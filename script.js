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
    document.querySelectorAll("#text").forEach(el => {
        if (translations[lang][el.innerText]) {
            el.innerText = translations[lang][el.innerText];
        }
    });
}