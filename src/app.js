import axios from "axios";

const countryList = document.getElementById('countries-list')
const errorMessage = document.getElementById('error')
async function fetchCountries() {
    try {
        // const response = await axios.get('https://restcountries.com/v3.1/all')
        const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,flag,continents,population')
        response.data.sort((a, b) => a.population - b.population)

        // console.log(response.data)
        // console.log(response.data.length)
        for (let i = 0; i < response.data.length; i++) {
            let continent = response.data[i].continents[0]
            // console.log(continent)
            switch (continent) {
                case 'North America':
                    countryList.innerHTML += `
        <li class="countryBox"><p class="country"><span>${response.data[i].flag} </span><span class="n-america"> ${response.data[i].name.common}</span></p>
        <p class="population">Has a population of ${response.data[i].population} people</p></li>`
                    break;
                case 'Africa':
                    countryList.innerHTML += `
        <li class="countryBox"><p class="country"><span>${response.data[i].flag} </span><span class="africa"> ${response.data[i].name.common}</span></p>
        <p class="population">Has a population of ${response.data[i].population} people</p></li>`
                    break;
                case 'South America':
                    countryList.innerHTML += `
        <li class="countryBox"><p class="country"><span>${response.data[i].flag} </span><span class="s-america"> ${response.data[i].name.common}</span></p>
        <p class="population">Has a population of ${response.data[i].population} people</p></li>`
                    break;
                case 'Oceania':
                    countryList.innerHTML += `
        <li class="countryBox"><p class="country"><span>${response.data[i].flag} </span><span class="oceania"> ${response.data[i].name.common}</span></p>
        <p class="population">Has a population of ${response.data[i].population} people</p></li>`
                    break
                case 'Europe':
                    countryList.innerHTML += `
        <li class="countryBox"><p class="country"><span>${response.data[i].flag} </span><span class="europe"> ${response.data[i].name.common}</span></p>
        <p class="population">Has a population of ${response.data[i].population} people</p></li>`
                    break
                case 'Asia':
                    countryList.innerHTML += `
        <li class="countryBox"><p class="country"><span>${response.data[i].flag} </span><span class="asia"> ${response.data[i].name.common}</span></p>
        <p class="population">Has a population of ${response.data[i].population} people</p></li>`
                    break
                default:
                    countryList.innerHTML += `
        <li class="countryBox"><p class="country"><span>${response.data[i].flag} </span><span class="default"> ${response.data[i].name.common}</span></p>
        <p class="population">Has a population of ${response.data[i].population} people</p></li>`
            }
        }
    } catch (e) {
        console.log(e)
        errorMessage.innerHTML += `
        <p class="error">Foutcode: ${e.response.status}</p>`
    }
}

void fetchCountries()
