'use strict';

const api_key = "7e7e7d605462457894755219241506";

/**Fetch data from the server
 * @param {string} URL - API URL
 * @param {Function} callback - Callback function
 */
export const fetchData = (url, callback) => {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => callback(data))
        .catch(error => console.error('Error fetching data:', error));
};

export const url = {
    currentWeather(lat, lon, lang) {
        return `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${lat},${lon}&lang=${lang}`;
    },
    forecast(lat, lon, lang) {
        return `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${lat},${lon}&days=7&lang=${lang}`;
    },
    reverseGeo(lat, lon, lang) {
        return `https://api.weatherapi.com/v1/search.json?key=${api_key}&q=${lat},${lon}&lang=${lang}`;
    },
    geo(query, lang) {
        return `https://api.weatherapi.com/v1/search.json?key=${api_key}&q=${query}&lang=${lang}`;
    }
};
