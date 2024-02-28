export function manageNavigation() {
  const backBtnContainer = document.querySelector(".back-btn-container")
  const countryTitle = document.querySelector(".navigation-container h1")
  const countriesContainer = document.getElementById("countriesContainer")
  const citiesContainer = document.getElementById("citiesContainer")
  const searchInput = document.getElementById("searchInput")

  const history = []

  function updateNavigation() {
    if (history.length === 0) {
      backBtnContainer.style.display = "none"
      countryTitle.style.display = "none"
      searchInput.placeholder = "Enter Country"
    } else {
      backBtnContainer.style.display = "block"
      countryTitle.style.display = "block"
      countryTitle.textContent = history[history.length - 1]
      searchInput.placeholder = "Enter City"
    }
  }

  function showCountryDetails(country) {
    history.push(country)
    updateNavigation()
    countriesContainer.style.display = "none"
    citiesContainer.style.display = "block"
    countryTitle.textContent = country
  }

  function showCountries() {
    history.pop()
    updateNavigation()
    countriesContainer.style.display = "block"
    citiesContainer.style.display = "none"
  }

  countriesContainer.addEventListener("click", function (event) {
    const countryContainer = event.target.closest(".countries-container")
    if (countryContainer) {
      const selectedCountry =
        countryContainer.querySelector(".country-name p").textContent
      showCountryDetails(selectedCountry)
    }
  })

  backBtnContainer.addEventListener("click", function () {
    showCountries()
  })

  updateNavigation()
}
