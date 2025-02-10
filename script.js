document.addEventListener("DOMContentLoaded", function() {
    console.log("Strona załadowana!");
});

const translations = {
    "pl": {
        "About us": "O nas",
        "Pricelist": "Cennik",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": ""
    },
    "en": {
        "O nas": "About us",
        "Cennik": "Pricelist",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": ""
    }

};

function translateTo(lang) {

    localStorage.setItem("selectedLanguage", lang);

    document.querySelectorAll("#text").forEach(el => {
        if (translations[lang][el.innerText]) {
            el.innerText = translations[lang][el.innerText];
        }

        document.addEventListener("DOMContentLoaded", function() {
            const savedLang = localStorage.getItem("selectedLanguage");
            if (savedLang) {
                translateTo(savedLang);
            }
        })
    });
}