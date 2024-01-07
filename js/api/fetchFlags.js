import { COUNTRIES_FLAGS_URL } from "./endpoints.js"

export async function fetchFlagsForCountries() {
  try {
    const response = await fetch(COUNTRIES_FLAGS_URL)
    if (!response.ok) {
      throw new Error("Failed to fetch country flags")
    }
    const data = await response.json()
    return data.data
  } catch (error) {
    console.error("Error fetching country flags:", error)
    return []
  }
}
