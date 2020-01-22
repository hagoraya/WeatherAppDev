const proxy = 'https://cors-anywhere.herokuapp.com/'; //Sets the header before API_URL so we dont get the access-control-allow-origin error
const API_KEY = '9aa8775e682a72dabd6309710e5c2c2f';
const ADDRESS_API_URL = `${proxy}https://darksky.net/rgeo?hires=1`;
const WEATHER_API_URL = `${proxy}https://api.darksky.net/forecast/${API_KEY}/`;
const GEO_API_URL = `${proxy}https://darksky.net/geo?q=`;

/* eslint-disable no-console */

function getCoordinates(location) { 
    return fetch(`${GEO_API_URL}${location}`)
    .then(response => response.json());
 }

function getForecast(lat, long){
    
    return fetch(`${WEATHER_API_URL}${lat},${long}?units=auto`)
    .then(response => response.json());
    
}

function getAddress(lat, long){
    return fetch(`${ADDRESS_API_URL}&lat=${lat}&lon=${long}`)
    .then(response => response.json());
}

export default {
    getForecast,
    getCoordinates,
    getAddress
};