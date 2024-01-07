import { COUNTRIES_URL } from "./endpoints.js"

export async function fetchCountries() {
  try {
    const response = await fetch(`${COUNTRIES_URL}`)
    const data = await response.json()

    if (data.error === false && data.data) {
      return data.data.map((country) => country.country)
    }

    return []
  } catch (error) {
    console.error("Error fetching countries:", error)
    return []
  }
}