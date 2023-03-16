document.addEventListener('DOMContentLoaded', function () {
    var btnEn = document.getElementById('btnEn')
    var btnFr = document.getElementById('btnFr')
    var btnDe = document.getElementById('btnDe')
    var slogan = document.getElementById('slogan')
    var locationLabel = document.getElementById('locationLabel')
    var btnSearch = document.getElementById('btnSearch')
    var timezonesLabel = document.getElementById('timezonesLabel')
    var currentLang = navigator.language || navigator.userLanguage

    translatePage(currentLang.substring(0, 2))

    btnEn.addEventListener('click', function () {
        translatePage('en')
    })

    btnFr.addEventListener('click', function () {
        translatePage('fr')
    })

    btnDe.addEventListener('click', function () {
        translatePage('de')
    })

    function translatePage(lang) {
        var langFile = 'assets/json/' + lang + '.json'

        fetch(langFile)
            .then(function (response) {
                return response.json()
            })
            .then(function (langData) {
                slogan.innerHTML = langData.slogan
                locationLabel.innerHTML = langData.locationLabel
                btnSearch.innerHTML = langData.btnSearch
                timezonesLabel.innerHTML = langData.timezonesLabel
            })
    }
})