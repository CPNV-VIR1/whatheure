document.addEventListener('DOMContentLoaded', function () {
    var btnEn = document.getElementById('btnEn')
    var btnFr = document.getElementById('btnFr')
    var btnDe = document.getElementById('btnDe')
    var slogan = document.getElementById('slogan')
    var locationLabel = document.getElementById('locationLabel')
    var btnSearch = document.getElementById('btnSearch')
    var timezonesLabel = document.getElementById('timezonesLabel')
    var locationHead = document.getElementById('locationHead')
    var timeHead = document.getElementById('timeHead')
    var currentLang = navigator.language || navigator.userLanguage

    if (currentLang.startsWith('en')) {
        btnEn.classList.add('bg-indigo-300');
    } else if (currentLang.startsWith('fr')) {
        btnFr.classList.add('bg-indigo-300');
    } else if (currentLang.startsWith('de')) {
        btnDe.classList.add('bg-indigo-300');
    }

    translatePage(currentLang.substring(0, 2))

    btnEn.addEventListener('click', function () {
        translatePage('en')
        btnEn.classList.add('bg-indigo-300')
        btnDe.classList.remove('bg-indigo-300')
        btnFr.classList.remove('bg-indigo-300')
    })

    btnFr.addEventListener('click', function () {
        translatePage('fr')
        btnEn.classList.remove('bg-indigo-300')
        btnDe.classList.remove('bg-indigo-300')
        btnFr.classList.add('bg-indigo-300')
    })

    btnDe.addEventListener('click', function () {
        translatePage('de')
        btnEn.classList.remove('bg-indigo-300')
        btnDe.classList.add('bg-indigo-300')
        btnFr.classList.remove('bg-indigo-300')
    })

    function translatePage(lang) {
        var langFile = 'json/' + lang + '.json'

        fetch(langFile)
            .then(function (response) {
                return response.json()
            })
            .then(function (langData) {
                slogan.innerHTML = langData.slogan
                locationLabel.innerHTML = langData.locationLabel
                btnSearch.innerHTML = langData.btnSearch
                timezonesLabel.innerHTML = langData.timezonesLabel
                locationHead.innerHTML = langData.locationHead
                timeHead.innerHTML = langData.timeHead
            })
    }
})