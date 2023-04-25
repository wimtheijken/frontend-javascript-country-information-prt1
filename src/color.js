import axios from "axios";
async function fetchCountries() {

    try {
        // const response = await axios.get('https://restcountries.com/v3.1/all')
        const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,flag,continents,population,region')
        response.data.sort((a, b) => a.population - b.population)
        // console.log(response.data)
        // console.log(response.data.length)
        createListItems(response.data)
    } catch (e) {
        const errorMessage = document.getElementById('error')
        console.log(e)
        errorMessage.innerHTML += `
        <p class="error">Foutcode: ${e.response.status}</p>`
    }
}

void fetchCountries()
function createListItems(countries) {
    const countryList = document.getElementById('countries-list')
    countryList.innerHTML = countries.map((country) => {
        return `
      <li class="countryBox">
        <p><span>${country.flag} </span>
        <span class="${colorPicker(country.region)}">${country.name.common}</span></p>
        <p class="population">Has a population of ${country.population} people</p>
      </li>
    `
    }).join('');
}

function colorPicker(continent) {
    switch (continent) {
        case 'North America':
            return 'n-america'
        case 'Africa':
            return 'africa'
        case 'South America':
            return 's-america'
        case 'Oceania':
            return 'oceania'
        case 'Europe':
            return 'europe'
        case 'Asia':
            return 'asia'
        default:
            return 'default'
    }
}


