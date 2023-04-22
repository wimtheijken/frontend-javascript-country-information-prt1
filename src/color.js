import axios from "axios";

// 1 Installeer en importeer Axios;
// 2 Neem de documentatie van de REST Countries API goed door. Welk endpoint heb je nodig om informatie over alle landen op te halen?
// 3 Schrijf een asynchrone functie die, met behulp van Axios, een GET-request maakt naar het juiste endpoint. Log de response in de console en bestudeer de data goed: hoe is het opgebouwd?
// 4 Probeer eens om de naam van het allereerste land te loggen in de console, welk pad moet je hiervoor volgen?
// 5 Maak een <ul>-tag in de HTML die je als referentie kunt gebruiken in jouw JavaScript bestand;
// 6 Zorg ervoor dat de naam van het allereerste land wordt weergegeven als <li>-tag in het lijst-element op de pagina;
// 7 Zorg er nu ook voor dat de populatie (Has a population of [amount] people) daaronder wordt weergegeven;
// 8 Schrijf een aparte functie die één regio-naam verwacht, en op basis van deze regio de correcte kleur-naam als string teruggeeft. Gebruik deze, om de naam van het land in de juiste kleur weer te geven op de pagina. Tip: zorg ervoor dat je CSS-classes maakt voor alle regio-kleuren!
// 9 Breidt de <li>-tag uit met een <img>-tag om zo ook de url van de meegegeven vlag-afbeelding weer te kunnen geven;
// 10 Gebruik de map-methode om over de array met landen heen te mappen, en zo een <li>-element te maken voor álle landen;
// 11 Zorg er ten slotte voor dat je de response data eerst sorteert op populatie, van laag naar hoog, voor je eroverheen mapt om de landen op de pagina weer te geven.
//

const countryList = document.getElementById('countries-list')
const errorMessage = document.getElementById('error')


async function fetchCountries() {

    try {
        // const response = await axios.get('https://restcountries.com/v3.1/all')
        const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,flag,continents,population')
        response.data.sort((a, b) => a.population - b.population)
        function colorPicker(continent) {
            let regionColor = document.querySelector("#region-color")
            switch (continent) {
                case 'North America':
                    regionColor.style.color = "#4C824B"
                    break;
                case 'Africa':
                    regionColor.style.color = "#4C824B"
                    break;
                case 'South America':
                    regionColor.style.color = "#4C824B"
                    break;
                case 'Oceania':
                    regionColor.style.color = "#4C824B"
                    break
                case 'Europe':
                    regionColor.style.color = "#4C824B"
                    break
                case 'Asia':
                    regionColor.style.color = "#4C824B"
                    break
                default:
                    regionColor.style.color = "#4C824B"
            }
        }
        colorPicker(continent)
        console.log(color)
        console.log(response.data)
        console.log(response.data.length)
        for (let i = 0; i < response.data.length; i++) {
            let continent = response.data[i].continents[0]
            // let color = colorPicker(continent)
            // console.log(color)

            console.log(continent)
            countryList.innerHTML += `
        <li class="countryBox"><p class="country"><span>${response.data[i].flag} </span><span id="region-color"> ${response.data[i].name.common}</span></p>
        <p class="population">Has a population of ${response.data[i].population} people</p></li>`
        }
    } catch (e) {
        console.log(e)
        errorMessage.innerHTML += `
        <p class="error">Foutcode: ${e.response.status}</p>`
    }
}

void fetchCountries()
