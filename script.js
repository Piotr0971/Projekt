document.addEventListener("DOMContentLoaded", function() {
    console.log("Strona załadowana!");
});

const translations = {
    //Polski
    "pl": {
        //Strona główna
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
        //Cennik
        "Pricelist of the services we provide": "Cennik prowadzonych przez nas usług",
        "Laying the Sjeneński Stone": "Ułożenie Kamienia Sjeneńskiego",
        "Classic concrete pavers 6cm thick": "Kostka betonowa klasyczna o grubości 6cm",
        "Classic concrete pavers 8cm thick": "Kostka betonowa klasyczna o grubości 8cm",
        "Noble concrete pavers (old paving,nostalit,merkado)": "Kostka betonowa szlachetna (starobruk,nostalit,merkado)",
        "Granite cube size 8-12cm": "Kostka granitowa o rozmiarze 8-12cm",
        "Granite cube size 4-6cm": "Kostka granitowa o rozmiarze 4-6cm",
        "Piccolo, Nova Granite and related pavers": "Kostka typu Piccolo, Nova Granit i pokrewne",
        "Laying of Clinker Paving": "Ułożenie Bruku Klinkierowego",
        "Installation of concrete edges 6cm thick": "Osadzanie obrzeży betonowych gr 6cm",
        "Laying of road curbs": "Ułożenie krawężników drogowych",
        "Post-warranty repairs": "Naprawy pogwarancyjne",
        "Additional mini-excavator services": "Dodatkowe usługi minikoparką",
        "Compaction of the ground with sand or gravel up to 20 cm thick": "Zagęszczenie podłoża piaskiem lub żwirem do 20 cm grubości",
        "Compaction of the ground with sand or gravel up to 50 cm thick": "Zagęszczenie podłoża piaskiem lub żwirem do 50 cm grubości",
        "Stabilization of the ground with grit to a thickness of 5 cm": "Stabilizacja podłoża grysem do grubości 5 cm",
        "Stabilization of the ground with grit to a thickness of 10 cm": "Stabilizacja podłoża grysem do grubości 10 cm",
        "Compaction of the subsoil with sand or gravel with a 5 cm cement ballast - up to a total of 20 cm thick": "Zagęszczenie podłoża piaskiem lub żwirem z podsypką cementową 5 cm - łącznie do 20 cm grubości",
        "Compaction of the subsoil with sand or gravel with a 10 cm cement ballast - up to a total of 50 cm thick": "Zagęszczenie podłoża piaskiem lub żwirem z podsypką cementową 10 cm - łącznie do 50 cm grubości",
        "Fleece arrangement": "Ułożenie włókniny",
        "Laying the drainage system": "Ułożenie instalacji odwadniającej",
        "Preparation of the substrate for paving (load up to 3.5 t.)": "Przygotowanie podłoża pod kostkę (obciążenie do 3,5 t.)",
        "Preparation of the substrate for paving (load up to 10 t.)": "Przygotowanie podłoża pod kostkę (obciążenie do 10 t.)",
        "Preparation of the substrate for paving (load over 10 t.)": "Przygotowanie podłoża pod kostkę (obciążenie powyżej 10 t.)",
        "Laying of terrace slabs": "Ułożenie płyt tarasowych",
        "Laying of paving slabs": "Ułożenie płyt chodnikowych",
        "Laying of openwork slabs": "Ułożenie płyt ażurowych",
        //Galeria
        "Gallery Year 2025": "Galeria Rok 2025",
        "Terrace cube with black border": "Taras kostka w czarnym obramowaniem",
        "Path paved with gray pavers": "Ścieżka wybrukowana szarą kostką",
        "Too small of a photo, the quality is messed up": "Za małe zdjęcie, jakość się posypała",
        "Terrace made of nice thicker pavers": "Taras z ładnej grubszej kostki"
    },
    //Angielski
    "en": {
        //Homepage
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
        //Pricelist
        "Cennik prowadzonych przez nas usług": "Pricelist of the services we provide",
        "Ułożenie Kamienia Sjeneńskiego": "Laying the Sjeneński Stone",
        "Kostka betonowa klasyczna o grubości 6cm": "Classic concrete pavers 6cm thick",
        "Kostka betonowa klasyczna o grubości 8cm": "Classic concrete pavers 8cm thick",
        "Kostka betonowa szlachetna (starobruk,nostalit,merkado)": "Noble concrete pavers (old paving,nostalit,merkado)",
        "Kostka granitowa o rozmiarze 8-12cm": "Granite cube size 8-12cm",
        "Kostka granitowa o rozmiarze 4-6cm": "Granite cube size 4-6cm",
        "Kostka typu Piccolo, Nova Granit i pokrewne": "Piccolo, Nova Granite and related pavers",
        "Ułożenie Bruku Klinkierowego": "Laying of Clinker Paving",
        "Osadzanie obrzeży betonowych gr 6cm": "Installation of concrete edges 6cm thick",
        "Ułożenie krawężników drogowych": "Laying of road curbs",
        "Naprawy pogwarancyjne": "Post-warranty repairs",
        "Dodatkowe usługi minikoparką": "Additional mini-excavator services",
        "Zagęszczenie podłoża piaskiem lub żwirem do 20 cm grubości": "Compaction of the ground with sand or gravel up to 20 cm thick",
        "Zagęszczenie podłoża piaskiem lub żwirem do 50 cm grubości": "Compaction of the ground with sand or gravel up to 50 cm thick",
        "Stabilizacja podłoża grysem do grubości 5 cm": "Stabilization of the ground with grit to a thickness of 5 cm",
        "Stabilizacja podłoża grysem do grubości 10 cm": "Stabilization of the ground with grit to a thickness of 10 cm",
        "Zagęszczenie podłoża piaskiem lub żwirem z podsypką cementową 5 cm - łącznie do 20 cm grubości": "Compaction of the subsoil with sand or gravel with a 5 cm cement ballast - up to a total of 20 cm thick",
        "Zagęszczenie podłoża piaskiem lub żwirem z podsypką cementową 10 cm - łącznie do 50 cm grubości": "Compaction of the subsoil with sand or gravel with a 10 cm cement ballast - up to a total of 50 cm thick",
        "Ułożenie włókniny": "Fleece arrangement",
        "Ułożenie instalacji odwadniającej": "Laying the drainage system",
        "Przygotowanie podłoża pod kostkę (obciążenie do 3,5 t.)": "Preparation of the substrate for paving (load up to 3.5 t.)",
        "Przygotowanie podłoża pod kostkę (obciążenie do 10 t.)": "Preparation of the substrate for paving (load up to 10 t.)",
        "Przygotowanie podłoża pod kostkę (obciążenie powyżej 10 t.)": "Preparation of the substrate for paving (load over 10 t.)",
        "Ułożenie płyt tarasowych": "Laying of terrace slabs",
        "Ułożenie płyt chodnikowych": "Laying of paving slabs",
        "Ułożenie płyt ażurowych": "Laying of openwork slabs",
        //Gallery
        "Galeria Rok 2025": "Gallery Year 2025",
        "Taras kostka w czarnym obramowaniem": "Terrace cube with black border",
        "Ścieżka wybrukowana szarą kostką": "Path paved with gray pavers",
        "Za małe zdjęcie, jakość się posypała": "Too small of a photo, the quality is messed up",
        "Taras z ładnej grubszej kostki": "Terrace made of nice thicker pavers"
    }
};

function translateTo(lang) {

    sessionStorage.setItem("selectedLanguage", lang);

    document.querySelectorAll("#text").forEach(el => {
        if (translations[lang][el.innerText]) {
            el.innerText = translations[lang][el.innerText];
        }
    });
};

document.addEventListener("DOMContentLoaded", function() {
    const savedLang = sessionStorage.getItem("selectedLanguage")
    translateTo(savedLang);
});