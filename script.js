document.addEventListener("DOMContentLoaded", function() {
    console.log("Strona załadowana!");
});

const translations = {
    "pl": {
        "About Us": "O Nas",
        "Pricelist": "Cennik",
        "Gallery": "Galeria",
        "June 2025": "Czerwiec 2025",
        "July 2025": "Lipiec 2025",
        "August 2025": "Sierpień 2025",
        "Contact": "Kontakt",
        "Our company deals with": "Nasza Firma zajmuje się",
        "Our company specializes in the comprehensive laying of paving stones in the areas of single-family houses, plots of land and the implementation of small paving works.": "Nasza firma specjalizuje się w kompleksowym układaniu kostki brukowej na terenach domków jednorodzinnych, działkach oraz realizacji drobnych prac brukarskich.",
        "We are engaged in the overall performance of the paving foundation, and we provide all the materials and equipment necessary for the order. Although we are a new company on the market, we already enjoy a solid reputation, which we build thanks to our high-quality services and full commitment to each order.": "Zajmujemy się całościowym wykonaniem podbudowy pod kostkę, zapewniamy wszystkie materiały oraz sprzęt niezbędny do realizacji zlecenia. Choć jesteśmy nową firmą na rynku, już teraz cieszymy się solidną reputacją, którą budujemy dzięki wysokiej jakości usługom i pełnemu zaangażowaniu w każde zlecenie.",
        "Our goal is complete customer satisfaction. Therefore, we customize our work, take care of every detail, even the smallest, and ensure order at every stage of execution. With us you can be sure that your order will be carried out professionally and on time.": "Naszym celem jest pełne zadowolenie klienta. Dlatego dostosowujemy naszą pracę do indywidualnych potrzeb, dbamy o każdy, nawet najmniejszy detal i zapewniamy porządek na każdym etapie realizacji. Z nami możesz mieć pewność, że Twoje zlecenie będzie wykonane profesjonalnie i terminowo.",
        "Trust us and your environment will get an aesthetic, functional and durable look!": "Zaufaj nam, a Twoje otoczenie zyska estetyczny, funkcjonalny i trwały wygląd!",
        "A house with an architect": "Domek z architektem",
        "Company": "Firma",
        "Homepage": "Strona główna",
        "Pricelist of the services we provide": "Cennik prowadzonych przez nas usług",
        "": "Ułożenie Kamienia Sjeneńskiego",
        "": "Kostka betonowa klasyczna o grubości 6cm",
        "": ""
    },

    "en": {
        "O Nas": "About Us",
        "Cennik": "Pricelist",
        "Galeria": "Gallery",
        "Czerwiec 2025": "June 2025",
        "Lipiec 2025": "July 2025",
        "Sierpień 2025": "August 2025",
        "Kontakt": "Contact",
        "Nasza Firma zajmuje się": "Our company deals with",
        "Nasza firma specjalizuje się w kompleksowym układaniu kostki brukowej na terenach domków jednorodzinnych, działkach oraz realizacji drobnych prac brukarskich.": "Our company specializes in the comprehensive laying of paving stones in the areas of single-family houses, plots of land and the implementation of small paving works.",
        "Zajmujemy się całościowym wykonaniem podbudowy pod kostkę, zapewniamy wszystkie materiały oraz sprzęt niezbędny do realizacji zlecenia. Choć jesteśmy nową firmą na rynku, już teraz cieszymy się solidną reputacją, którą budujemy dzięki wysokiej jakości usługom i pełnemu zaangażowaniu w każde zlecenie.": "We are engaged in the overall performance of the paving foundation, and we provide all the materials and equipment necessary for the order. Although we are a new company on the market, we already enjoy a solid reputation, which we build thanks to our high-quality services and full commitment to each order.",
        "Naszym celem jest pełne zadowolenie klienta. Dlatego dostosowujemy naszą pracę do indywidualnych potrzeb, dbamy o każdy, nawet najmniejszy detal i zapewniamy porządek na każdym etapie realizacji. Z nami możesz mieć pewność, że Twoje zlecenie będzie wykonane profesjonalnie i terminowo.": "Our goal is complete customer satisfaction. Therefore, we customize our work, take care of every detail, even the smallest, and ensure order at every stage of execution. With us you can be sure that your order will be carried out professionally and on time.",
        "Zaufaj nam, a Twoje otoczenie zyska estetyczny, funkcjonalny i trwały wygląd!": "Trust us and your environment will get an aesthetic, functional and durable look!",
        "Domek z architektem": "A house with an architect",
        "Firma": "Company",
        "Strona główna": "Homepage",
        "Cennik prowadzonych przez nas usług": "Pricelist of the services we provide",
        "Ułożenie Kamienia Sjeneńskiego": "",
        "Kostka betonowa klasyczna o grubości 6cm": "",
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