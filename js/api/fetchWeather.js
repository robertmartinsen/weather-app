import { BASE_URL, WEATHER_KEY } from "./endpoints.js"

export async function fetchWeather(city) {
  try {
    const response = await fetch(
      `${BASE_URL}q=${city}&units=metric&appid=${WEATHER_KEY}`
    )
    if (response.ok) {
      const data = await response.json()
      return data
    } else {
      throw new Error("Weather data not found")
    }
  } catch (error) {
    console.error("Error fetching weather", error)
    return null
  }
}
