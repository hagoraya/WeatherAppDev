<template>
  <div id="main-div">
    <div id="temp-div">
      <div id="display-temp-bottomgrid" v-if="forecast">
        <div id="temp-summ-loc">
          <div id="big-temp-div">
            <span>{{currentTemp}}°</span>
          </div>
          <div id="summ-loc">
            <span>{{forecast.currently.summary}} {{icons[forecast.currently.icon]}} {{address.name}}</span>
            <span></span>
          </div>
        </div>
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
        <div id="majorCities">
          <p id="Los Angeles" @click="newPresetLocation($event) ">Los Angeles</p>
          <p id="Toronto" @click="newPresetLocation($event)">Toronto</p>
          <p id="London" @click="newPresetLocation($event)">London</p>
          <p id="Istanbul" @click="newPresetLocation($event)">Istanbul</p>
          <p id="Dehli" @click="newPresetLocation($event)">Dehli</p>
          <p id="Shanghai" @click="newPresetLocation($event)">Shanghai</p>
          <p id="Tokyo" @click="newPresetLocation($event)">Tokyo</p>
          <p id="Sydney" @click="newPresetLocation($event)">Sydney</p>

          <div id="hr"></div>
        </div>
      </div>
      <div id="more-info-div2">
        <p id="weatherdetails">Weather Details</p>
        <div class="weathericon">
          <v-icon class="icons" name="wind" scale="3"></v-icon>
          <p>{{currentWind}} km/h</p>
        </div>
        <div class="weathericon">
          <v-icon class="icons" name="tint" scale="3"></v-icon>
          <p>{{precentpp}}%</p>
        </div>
        <div class="weathericon">
          <v-icon class="icons" name="sun" scale="3"></v-icon>
          <p>{{forecast.currently.uvIndex}} UV Index</p>
        </div>
        <div id="hr2"></div>
      </div>

      <div id="more-info-div3">
        <p>Tomorrow</p>

        <div id="thisWeek">
          <p>Percipitation chance</p>
          <p>{{tomprecentpp}}%</p>
          <p>Hemperature High</p>
          <p>{{tomTempHigh}}</p>
          <p>Temperature Low</p>
          <p>{{tomTempLow}}</p>
        </div>
      </div>
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
      currentTemp: 0,
      currentWind: 0,
      tomTempHigh: 0,
      tomTempLow: 0,
      tomprecentpp: 0,
      location: "",
      address: "",
      fc: "ca",
      forecast: null,
      icons: {
        "clear-day": "🌞",
        "clear-night": "🌙",
        "rain": "🌧",
        "snow": "🌨",
        "sleet": "⛷",
        "wind": "💨",
        "fog": "🌫",
        "cloudy": "☁",
        "partly-cloudy-day": "⛅",
        "partly-cloudy-night": "🌚"
      },
      backgrounds: {
        "clear-day": "../assets/images/clear-day.jpg",
        "clear-night": "🌙",
        "rain": "🌧",
        "snow": "🌨",
        "sleet": "⛷",
        "wind": "../assets/images/wind.jpg",
        "fog": "🌫",
        "cloudy": "../assets/images/cloudy.jpg",
        "partly-cloudy-day": "⛅",
        "partly-cloudy-night": "🌚"
      }
    };
  },

  methods: {
    newPresetLocation(clicked_id) {
      this.location = clicked_id.srcElement.id;
      this.updateLocation();
    },

    changeBackground(icon) {
      console.log("changing background.. to: " + icon);
      var backimage = document.getElementById("main-div");
      var imgUrl = "./assets/images/x.jpg'";
      backimage.style.backgroundImage = imgUrl;
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
       // console.log(result);
        this.forecast = result;
        this.currentTemp = Math.round(this.forecast.currently.temperature);
        this.currentWind = Math.round(this.forecast.currently.windSpeed);
        this.precentpp = Math.round(
          this.forecast.currently.precipProbability * 100
        );
        this.tomTempHigh = Math.round(
          this.forecast.daily.data[0].temperatureHigh
        );
        this.tomTempLow = Math.round(
          this.forecast.daily.data[0].temperatureLow
        );

        this.tomprecentpp = Math.round(
          this.forecast.daily.data[0].precipProbability * 100
        );
        this.forc();
       // this.changeBackground(this.forecast.currently.icon);
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

#big-temp-div {
  font-size: 9rem;
  text-align: left;
  width: 50%;
}

#temp-summ-loc {
  display: inline;
}

#display-temp-bottomgrid {
  grid-row: 2/2;
  color: aliceblue;
  width: 100%;
  height: 100%;
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
  display: grid;
  grid-template-rows: 0.5fr 2fr;
  padding-top: 10px;
  padding-right: 8px;
  padding-left: 8px;
}
#more-info-div2 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.2fr 1fr 0.2fr;
  color: antiquewhite;
  align-items: center;
}
#more-info-div3 {
  color: whitesmoke;
  text-align: left;
  padding-left: 40px;
}

#more-weather-info {
}

#summ-loc{
  text-align: left;
  font-size: 2rem;
}

#thisWeek {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}

hr {
  display: block;
  height: 1px;
  width: 90%;
}

.icons {
  color: whitesmoke;
  margin: 15px;
}

.weathericon {
  margin-bottom: 20px;
}

#weatherdetails {
  display: inline;
  grid-column: 1 / 4;
  padding-top: 5px;
  text-align: left;
  margin-left: 40px;
}

#majorCities {
  color: whitesmoke;
  text-align: left;
  font-size: 110%;
  padding-left: 30px;
}

#hr {
  border-top: 1px solid whitesmoke;
  width: 90%;
}

#hr2 {
  grid-column: 1/4;
  border-top: 1px solid whitesmoke;
  width: 82%;
  margin-left: 35px;
  margin-right: 2px;
}
</style>
