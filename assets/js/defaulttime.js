var localDateTime = document.getElementById('timeText');
localDateTime.innerHTML = new Date().toLocaleString();
setInterval(function() {
    localDateTime.innerHTML = new Date().toLocaleString();
}, 1000);
var myTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
var localLocation = document.getElementById('locationText');
localLocation.innerHTML = myTimeZone;