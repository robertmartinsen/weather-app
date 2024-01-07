import { manageNavigation } from "./services/navigationManager.js"
import { manageSearch } from "./services/searchManager.js"
import { populateCountries } from "./services/populateCountries.js"
import "./services/weatherDisplay.js"
import "./services/toggleSearchSection.js"

window.onload = function () {
  populateCountries()
  manageNavigation()
  manageSearch()
}
