import { fetchWeather } from "../api/fetchWeather.js"

document.addEventListener("DOMContentLoaded", async () => {
  const locationElement = document.getElementById("location")
  const temperatureElement = document.getElementById("temperature")
  const windElement = document.getElementById("wind")
  const humidityElement = document.getElementById("humidity")
  const timezoneElement = document.getElementById("time")
  const descriptionElement = document.getElementById("description")

  try {
    const weatherData = await fetchWeather("Alaska")

    if (weatherData && weatherData.name) {
      updateWeatherInfo(weatherData)
    } else {
      throw new Error("City name not found in weather data")
    }

    const citiesContainer = document.getElementById("citiesContainer")
    citiesContainer.addEventListener("click", async (event) => {
      const selectedCity = event.target.textContent
      try {
        const weatherData = await fetchWeather(selectedCity)
        if (weatherData && weatherData.name) {
          updateWeatherInfo(weatherData)
        } else {
          throw new Error("City name not found in weather data")
        }
      } catch (error) {
        console.error("Error:", error)
      }
    })

    function updateWeatherInfo(weatherData) {
      locationElement.textContent = weatherData.name
      temperatureElement.textContent = `${Math.round(weatherData.main.temp)} °C`
      windElement.textContent = `${weatherData.wind.speed.toFixed(0)} Km/h`
      humidityElement.textContent = `${weatherData.main.humidity}%`
      timezoneElement.textContent = `${weatherData.timezone}`
      descriptionElement.textContent = `Feels like ${Math.round(
        weatherData.main.feels_like
      )} °C`

      const weatherCondition = weatherData.weather[0].main
      setWeatherImage(weatherCondition)
    }

    function setWeatherImage(weatherCondition) {
      const weatherImageElement = document.getElementById("weather-img")
      if (weatherCondition === "Clouds") {
        weatherImageElement.src = "./assets/cloudy.svg"
        weatherImageElement.alt = "Cloudy"
      } else if (weatherCondition === "Rain") {
        weatherImageElement.src = "./assets/rainy-1.svg"
        weatherImageElement.alt = "Rainy"
      } else if (weatherCondition === "Snow") {
        weatherImageElement.src = "./assets/snowy-1.svg"
        weatherImageElement.alt = "Snowy"
      } else if (weatherCondition === "Thunderstorm") {
        weatherImageElement.src = "./assets/thunder.svg"
        weatherImageElement.alt = "Thunderstorm"
      } else {
        weatherImageElement.src = "./assets/day.svg"
        weatherImageElement.alt = "Weather Condition"
      }
    }
  } catch (error) {
    console.error("Error:", error)
  }
})
