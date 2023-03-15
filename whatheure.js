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
            console.log(response);
            var location = response.data[0].label;
            var offset = response.data[0].timezone_module.offset_sec / 3600;
            const now = new Date();


            // Create a new row in the table for each location in the table body timezoneTableBody
            let tableBody = document.getElementById('timezoneTableBody');
            const newRow = tableBody.insertRow();
            const locationCell = newRow.insertCell();
            const timeCell = newRow.insertCell();
            locationCell.innerHTML = location;
            setInterval(function() {
                let targetTime = new Date(new Date());
                let tzDifference = offset * 60 + targetTime.getTimezoneOffset();
                let newDate = new Date(targetTime.getTime() + tzDifference * 60 * 1000);
                timeCell.innerHTML = newDate.toLocaleString();
            }, 1000);

        } else {
            console.log('Request failed. Returned status of ' + xhr.status);
        }
    };
    xhr.send();
});
