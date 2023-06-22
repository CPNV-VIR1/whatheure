import './public/js/defaulttime.js'
import './public/js/lang.js'
import './public/js/whatheure.js'

let url = "http://localhost:8080"
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM chargé')
    loadLocations();
});
function loadLocations() {
    fetch(url+'/api/locations')
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
    locationElement.innerHTML = `
        <td id="locationText">${location.location}</td>
        <td id="timeText">${location.location_offset}</td>
    `;
    return locationElement;
}
