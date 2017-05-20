import axios from 'axios'

const API_KEY = '83d353252b186ac27b4cb2cbc542e917'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
