<template>
  <div id="main-div">
    <div id="temp-div">
      <div id="display-temp" v-if="forecast">
        <div>
          {{icons[forecast.currently.icon]}}
          {{forecast.currently.temperature}}
          <p v-if="fc === 'us'" style="display:inline">°F</p>
          <p v-else style="display:inline">°C</p>
          {{forecast.currently.summary}}
        </div>
        <div>{{address.name}}</div>
      </div>
    </div>
    <div id="more-info-div">
      <div id="more-info-div1">
        <div>
          <b-input-group class="mb-3">
            <b-form-input v-model="location"></b-form-input>
            <b-input-group-append>
              <b-button v-on:click="updateLocation" size="sm" text="Search" variant="success">Seach</b-button>
            </b-input-group-append>
          </b-input-group>
        </div>
      </div>
      <div id="more-info-div2">
        <p id="weatherdetails">Weather details</p>
        <div class="weathericon">
          <v-icon class="icons" name="wind" scale="3"></v-icon>
          <p>{{forecast.currently.windSpeed}}km/h</p>
        </div>
        <div class="weathericon" >
          <v-icon class="icons" name="tint" scale="3"></v-icon>
          <p>{{precentpp}}%</p>
        </div>
        <div class="weathericon">
          <v-icon class="icons" name="sun" scale="3" ></v-icon>
          <p>{{forecast.currently.uvIndex}} UV Index</p>
        </div>
      </div>

      <div id="more-info-div3"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */

import API from "../lib/API";

export default {
  name: "HelloWorld",
  data() {
    return {
      precentpp: 0,
      location: "",
      address: "",
      fc: "ca",
      forecast: null,
      icons: {
        "clear-day": "🌞",
        "clear-night": "🌙",
        rain: "🌧",
        snow: "🌨",
        sleet: "⛷",
        wind: "💨",
        fog: "🌫",
        cloudy: "☁",
        "partly-cloudy-day": "⛅",
        "partly-cloudy-night": "🌚"
      },
      backgrounds: {
        "clear-day": "../assets/images/clear-day.jpg",
        "clear-night": "🌙",
        rain: "🌧",
        snow: "🌨",
        sleet: "⛷",
        wind: "../assets/images/wind.jpg",
        fog: "🌫",
        cloudy: "../assets/images/cloudy.jpg",
        "partly-cloudy-day": "⛅",
        "partly-cloudy-night": "🌚"
      }
    };
  },

  methods: {
    changeBackground(icon) {
      console.log("changing background.. to: " + icon);
      var backimage = document.getElementById("main-div");
      var imgUrl = "./assets/images/x.jpg'";
      backimage.style.backgroundImage = imgUrl;
      console.log(backimage.style);
    },

    forc() {
      this.fc = this.forecast.flags.units;
    },

    updateLocation() {
      API.getCoordinates(this.location).then(result => {
        this.loadWeather(result.latitude, result.longitude);
      });
    },

    loadWeather(lat, lng) {
      API.getAddress(lat, lng).then(result => {
        this.address = result;
      });

      API.getForecast(lat, lng).then(result => {
        console.log(result);
        this.forecast = result;
        this.precentpp = this.forecast.currently.precipProbability * 100,
        this.forc();
        this.changeBackground(this.forecast.currently.icon);
      });
    }
  },

  props: {
    msg: String
  },

  mounted() {
    //Default load wether with California
    this.loadWeather("34.070025", "-118.294616");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main-div {
  display: grid;
  grid-template-columns: 1fr 0.3fr;
  background: grey;
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/images/fog.jpg");
  background-size: cover;
}

#display-temp {
  grid-row: 2/2;
  color: aliceblue;
  justify-self: left;
  padding-top: 100px;
  padding-left: 100px;
  font-size: 3rem;
}

#temp-div {
  display: grid;
  /* Split the grid so it has two hafs horizonatally*/
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-items: center;
}

#more-info-div {
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;
  background-color: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(5px);
  box-shadow: black;
}

#more-info-div1 {
  /*Seach box div */
  padding-top: 10px;
  padding-right: 8px;
  padding-left: 8px;
  border: solid red;
}
#more-info-div2 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.2fr 1fr;
  color: antiquewhite;
  border: solid yellow;
  align-items: center;
}
#more-info-div3 {
  border: solid gray;
}

#more-weather-info {
}

hr {
  display: block;
  height: 1px;
  border-top: 1px solid #ccc;
  width: 90%;
}

.icons{
  color: whitesmoke;
  margin: 15px;
  
}

.weathericon{
  margin-bottom: 20px;
}

#weatherdetails{
  grid-column: 1 / 4;
  margin-top: 5px;
}

</style>
