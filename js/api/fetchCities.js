export async function fetchCities(country) {
  try {
    const response = await fetch(
      `https://countriesnow.space/api/v0.1/countries`
    )
    const data = await response.json()

    if (data.error === false && data.data) {
      const selectedCountry = data.data.find((item) => item.country === country)
      return selectedCountry ? selectedCountry.cities : []
    } else {
      return []
    }
  } catch (error) {
    console.error("Error fetching cities:", error)
    return []
  }
}