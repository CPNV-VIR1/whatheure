const form = document.getElementById('locationForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const locationInput = document.querySelector('#locationInput').value;

    fetch(`http://whatheure.cld.education/api/locations?location=${locationInput}`)
    //fetch(`http://localhost:8888/api/locations?location=${locationInput}`)
        .then((response) => response.json())
        .then((data) => {
            fillTable(data.location, data.offset);
        })
        .catch((error) => {
            console.error(error);
        });
});

function fillTable(location, offset) {
    // Create a new row in the table for each location in the table body timezoneTableBody
    let tableBody = document.getElementById('timezoneTable');
    const newRow = tableBody.insertRow();
    const locationCell = newRow.insertCell();
    const timeCell = newRow.insertCell();

    setInterval(function () {
        locationCell.innerHTML = location;
        let targetTime = new Date();
        let tzDifference = offset * 60 + targetTime.getTimezoneOffset();
        let newDate = new Date(targetTime.getTime() + tzDifference * 60 * 1000);
        timeCell.innerHTML = newDate.toLocaleString();
    }, 1000);

    document.querySelector('#locationInput').value = '';
}
