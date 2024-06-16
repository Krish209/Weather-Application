# Weather Web Application

## Overview

This Weather Web Application allows users to view the current weather, hourly forecast, and 5-day forecast for any location worldwide. The application provides detailed information on temperature, humidity, pressure, visibility, air quality index (AQI), and sunrise/sunset times. Users can search for locations and view the weather data in an intuitive and user-friendly interface.

![image](https://github.com/Krish209/Weather-Application/assets/76595963/63fbcb3b-fc7f-46ce-9685-8a97f7d8bd17)


![image](https://github.com/Krish209/Weather-Application/assets/76595963/aa2d6e12-d37e-4585-8748-9d5f9b74b5f7)


## Features

- **Current Weather**: Displays the current temperature, weather conditions, and other relevant details for the selected location.
- **Hourly Forecast**: Provides a forecast for the next 24 hours with details on temperature, weather conditions, and wind speed.
- **7-Day Forecast**: Shows a 7-day weather forecast with daily temperature highs and conditions.
- **Sunrise & Sunset Times**: Shows the sunrise and sunset times for the current day.
- **Moonrise & Moonset Times**: Shows the moonrise and moonset times for the current day.
- **Search Functionality**: Allows users to search for any location worldwide and view its weather data.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **HTML**: Structure of the web pages.
- **CSS**: Styling of the web pages.
- **JavaScript**: Client-side scripting and API interactions.
- **Weather API**: Fetches weather data from a weather service provider.
- **Reverse Geocoding API**: Converts geographic coordinates into a human-readable address.

## Setup and Installation

## Setup and Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Krish209/weather-app.git
    ```

2.  **Open with VSCode**:

    ```bash
      code .
    ```

3. **Install Dependencies**:
    - Ensure you have a local server setup (e.g., using VSCode Live Server, XAMPP, etc.) to serve the application files.

4. **API Configuration**:
    - Obtain API keys from the weather service provider and reverse geocoding service.
    - Update the `api.js` file with your API keys:
        ```javascript
        const api_key = "YOUR_WEATHER_API_KEY";
        const geo_api_key = "YOUR_GEO_API_KEY";
        ```

5. **Run the Application**:
    - Start your local server and navigate to the application URL (e.g., `http://localhost/weather-app`).

## Project Structure

```plaintext
weather-app/
├── assets/
│   ├── images/
│   ├── font/
├── css/
│   └── style.css
├── js/
│   ├── api.js
│   ├── app.js
│   ├── new_app.js
│   ├── module.js
|   ├── route.js
├── favicon.svg
├── index.html
└── README.md
