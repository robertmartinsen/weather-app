import { fetchCountries } from "./../api/fetchCountries.js"
import { fetchCities } from "./../api/fetchCities.js"
import { fetchFlagsForCountries } from "./../api/fetchFlags.js"

export function populateCountries() {
  const countriesContainer = document.getElementById("countriesContainer")
  const citiesContainer = document.getElementById("citiesContainer")

  fetchCountries()
    .then(async (countries) => {
      const flagsData = await fetchFlagsForCountries()

      countries.forEach((country) => {
        const countryContainer = document.createElement("div")
        countryContainer.classList.add("countries-container")

        const countryFlagDiv = document.createElement("div")
        countryFlagDiv.classList.add("country-flag")

        const flagImg = document.createElement("img")
        flagImg.classList.add("country-flag-img")

        const countryFlagData = flagsData.find((data) => data.name === country)
        if (countryFlagData && countryFlagData.flag) {
          flagImg.src = countryFlagData.flag
        } else {
          flagImg.src = "./assets/web.svg"
        }

        const countryNameDiv = document.createElement("div")
        const countryName = document.createElement("p")
        countryName.textContent = country

        countryNameDiv.classList.add("country-name")

        countryFlagDiv.appendChild(flagImg)
        countryContainer.appendChild(countryFlagDiv)

        countryNameDiv.appendChild(countryName)
        countryContainer.appendChild(countryNameDiv)

        countriesContainer.appendChild(countryContainer)

        countriesContainer.addEventListener("click", async (event) => {
          const countryContainer = event.target.closest(".countries-container")
          if (countryContainer) {
            const selectedCountry =
              countryContainer.querySelector(".country-name p").textContent
            await hideCountriesAndShowCities(selectedCountry)
          }
        })
      })
    })
    .catch((error) => {
      console.error("Error:", error)
    })

  async function hideCountriesAndShowCities(selectedCountry) {
    countriesContainer.style.display = "none"
    citiesContainer.style.display = "block"

    citiesContainer.innerHTML = ""

    const searchInput = document.querySelector(".search input")
    searchInput.value = ""

    const cities = await fetchCities(selectedCountry)
    cities.forEach((city) => {
      const cityContainer = document.createElement("div")
      cityContainer.classList.add("cities-container")

      const cityNameDiv = document.createElement("div")
      cityNameDiv.classList.add("city-name")

      const cityName = document.createElement("p")
      cityName.textContent = city

      cityNameDiv.appendChild(cityName)
      cityContainer.appendChild(cityNameDiv)

      citiesContainer.appendChild(cityContainer)

      cityContainer.addEventListener("click", () => {
        document.querySelector(".close-btn").click()
      })
    })
  }
}

