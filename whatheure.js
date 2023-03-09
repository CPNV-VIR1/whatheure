import dataJson from "./keys.json" assert { type: "json" };

const form = document.getElementById('timezoneForm');
const tableBody = document.getElementById('tableBody');

// Get the access key from the JSON data
const access_key = dataJson.access_key;

document.getElementById('timezoneForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form submission
    const locationInput = document.querySelector('#locationInput').value;

    const params = new URLSearchParams({
        access_key: access_key,
        query: locationInput
    });

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.positionstack.com/v1/forward?' + params.toString());
    xhr.onload = function() {
        console.log(xhr.status);
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            // create new table row and cells
            const newRow = tableBody.insertRow();
            const locationCell = newRow.insertCell();
            const timezoneCell = newRow.insertCell();

            // populate cells with data
            locationCell.textContent = response.label;
            timezoneCell.textContent = response.timezone_module.offset_sec;
        } else {
            console.log('Request failed. Returned status of ' + xhr.status);
        }
    };
    xhr.send();
});
