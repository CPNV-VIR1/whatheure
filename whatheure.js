import dataJson from "./keys.json" assert {type: "json"};

const form = document.getElementById('timezoneForm');
const tableBody = document.getElementById('tableBody');

// Get the access key from the JSON data
const access_key = dataJson.access_key;

form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent form submission
    const locationInput = document.querySelector('#locationInput').value;

    const params = new URLSearchParams({
        access_key: access_key,
        query: locationInput,
        timezone_module: 1
    });

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.positionstack.com/v1/forward?' + params.toString());
    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            var location = response.data[0].label;
            var offset = response.data[0].timezone_module.offset_sec;
            console.log(response.data[0].label);
            console.log(response.data[0].timezone_module.offset_sec);
            const now = new Date();
            var time_in_location = new Date(now - offset);
            console.log(time_in_location.toLocaleString());

            // Create a new row in the table for each location in the table body timezoneTableBody
            let tableBody = document.getElementById('timezoneTableBody');
            const newRow = tableBody.insertRow();
            const locationCell = newRow.insertCell();
            const timeCell = newRow.insertCell();
            locationCell.innerHTML = location;
            timeCell.innerHTML = time_in_location.toLocaleString();
            setInterval(function() {
                time_in_location = new Date(Date.now() - offset);
                timeCell.innerHTML = time_in_location.toLocaleString();
            }, 1000);

        } else {
            console.log('Request failed. Returned status of ' + xhr.status);
        }
    };
    xhr.send();
});
