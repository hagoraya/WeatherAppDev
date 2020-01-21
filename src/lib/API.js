const proxy = 'https://cors-anywhere.herokuapp.com/'; //Sets the header before API_URL so we dont get the access-control-allow-origin error
const API_KEY = '9aa8775e682a72dabd6309710e5c2c2f';
const location = '43.7282669,-79.7639757';

const API_URL = `${proxy}https://api.darksky.net/forecast/${API_KEY}/${location}`;

/* eslint-disable no-console */

function getForecast(){
    return fetch(API_URL)
    .then(response => response.json());
    
}

export default {
    getForecast
};