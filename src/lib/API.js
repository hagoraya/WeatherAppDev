const proxy = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = '9aa8775e682a72dabd6309710e5c2c2f';
const location = '43.7282669,-79.7639757';

const API_URL = `${proxy}https://api.darksky.net/forecast/${API_KEY}/${location}`;

/* eslint-disable no-console */

function getForecast(){
    console.log(URL);
    fetch(API_URL)
    .then(response => response.json())
    .then(result => {
        console.log(result);
    });
}

export default {
    getForecast
};