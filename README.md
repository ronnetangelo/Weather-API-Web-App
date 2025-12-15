# Weather API Web App

## Project Overview
The **Weather API Web App** allows users to search for any city worldwide and view the current weather conditions along with a 5-day forecast. The application fetches real-time weather data from the **OpenWeatherMap API** and displays it in a visually appealing, responsive card layout.  

This project was created by **Ronnet** using **HTML, CSS, and JavaScript**.

---

## Features
- Search for the weather of any city.
- Display **current weather**:
  - Temperature in Celsius
  - Humidity percentage
  - Weather description
  - Weather icon
- Display **5-day forecast** at 12:00 PM each day.
- Simple, colorful, and responsive card layout.

---

## Technologies Used
- **HTML5** – Structure of the web page  
- **CSS3** – Styling and layout design  
- **JavaScript (ES6)** – API fetch requests and DOM manipulation  
- **OpenWeatherMap API** – Provides weather data  

---

## How It Works
1. User enters a city name in the search bar.  
2. The app sends a request to the **OpenWeatherMap API** for:
   - Current weather data
   - 5-day forecast data  
3. The app parses the API response and displays:
   - Current weather in a card with an icon, temperature, humidity, and description  
   - Forecast for the next 5 days in separate cards  

---

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, etc.)  
- Internet connection  
- OpenWeatherMap API key (already included in `script.js` for this project)

### Steps
1. Clone or download the repository.  
2. Ensure the following files are in the same folder:
   - `index.html`  
   - `style.css`  
   - `script.js`  
3. Open `index.html` in a web browser.  
4. Enter a city name and click **Search**.  
5. View the current weather and 5-day forecast.

---

## API Information
- **API Provider:** [OpenWeatherMap](https://openweathermap.org/)  
- **Endpoints Used:**
  - Current Weather: `https://api.openweathermap.org/data/2.5/weather`
  - 5-Day Forecast: `https://api.openweathermap.org/data/2.5/forecast`
- **Parameters:** 
  - `q` – City name  
  - `appid` – API key  
  - `units` – Metric system (°C)

---

## Author
**Ronnet**

---

## License
This project is open-source and free to use.
