import './public/js/defaulttime.js'
import './public/js/lang.js'
import './public/js/whatheure.js'

let url = "http://localhost:8888"
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM chargé')
    loadLocations();
});
function loadLocations() {
    fetch(url+'/api/timezone')
        .then(response => response.json())
        .then(data => {
            const locations = data.locations;
            console.log(locations);

            locations.forEach(location => {
                const locationElement = createNewLocation(location);
                document.querySelector('#timezoneTable').appendChild(locationElement);
            });
        })
        .catch(error => {
            console.log('Error: ' + error);
        });

}



function createNewLocation(location) {
    const locationElement = document.createElement('tr');
    locationElement.classList.add('w-full');

    const locationText = document.createElement('td'); // Create the locationText element
    locationText.id = 'locationText';
    locationText.textContent = location.location; // Set the location text content
    locationElement.appendChild(locationText); // Append it to the locationElement

    const timeText = document.createElement('td'); // Create the timeText element
    timeText.id = 'timeText';
    locationElement.appendChild(timeText); // Append it to the locationElement

    setInterval(function () {
        let targetTime = new Date();
        let tzDifference = location.offset * 60 + targetTime.getTimezoneOffset();
        let newDate = new Date(targetTime.getTime() + tzDifference * 60 * 1000);
        timeText.innerHTML = newDate.toLocaleString();
    }, 1000);

    return locationElement;
}


