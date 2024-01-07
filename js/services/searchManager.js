export function manageSearch() {
  const countriesContainer = document.getElementById("countriesContainer")
  const citiesContainer = document.getElementById("citiesContainer")
  const searchInput = document.querySelector(".search input")

  searchInput.addEventListener("input", function (event) {
    const searchTerm = event.target.value.toLowerCase().trim()

    const countries = countriesContainer.querySelectorAll(".country-name p")
    countries.forEach((country) => {
      const countryName = country.textContent.toLowerCase()
      const countryContainer = country.closest(".countries-container")

      if (countryName.includes(searchTerm)) {
        countryContainer.classList.remove("hidden")
      } else {
        countryContainer.classList.add("hidden")
      }
    })

    const cities = citiesContainer.querySelectorAll(".city-name p")
    cities.forEach((city) => {
      const cityName = city.textContent.toLowerCase()
      const cityContainer = city.closest(".cities-container")

      if (cityName.includes(searchTerm)) {
        cityContainer.classList.remove("hidden")
      } else {
        cityContainer.classList.add("hidden")
      }
    })
  })
}
