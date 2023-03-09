const form = document.getElementById('timezoneForm');
const tableBody = document.getElementById('tableBody');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form submission

    const locationInput = document.querySelector('#locationInput').value;

    var access_key = fetch('keys.json')
        .then(response => response.json())
        .then(data => {
            return data.key;
        })
        .catch(error => {
            console.error('Error loading configuration file:', error);
        });

    const params = new URLSearchParams({
        access_key: access_key,
        query: locationInput
    });

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.positionstack.com/v1/forward?' + params.toString());
    xhr.onload = function() {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);

            // create new table row and cells
            const newRow = tableBody.insertRow();
            const locationCell = newRow.insertCell();
            const timezoneCell = newRow.insertCell();

            // populate cells with data
            locationCell.textContent = response.data.label;
            timezoneCell.textContent = response.data.timezone_module.offset_sec;
        } else {
            console.log('Request failed. Returned status of ' + xhr.status);
        }
    };
    xhr.send();
});