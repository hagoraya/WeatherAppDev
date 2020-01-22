<template>
  <div class="main-div">
    <div id="temp-div">
      <div id="display-temp" v-if="forecast">
        <div>
          {{icons[forecast.currently.icon]}}
          {{forecast.currently.temperature}}
          <p v-if="fc === 'us'" style="display:inline">°F</p>
          <p v-else style="display:inline">°C</p>

          {{forecast.currently.summary}}
        </div>
        <div>
          {{address.name}}
          {{forecast.flags.units}}
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
      </div>
      <div id="more-info-div2"></div>
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
      location: "",
      address : "",
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
      }
    };
  },

  methods: {
    forc(){
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
        this.forecast = result;
        this.forc()
        
      });
    }
  },

  props: {
    msg: String
  },

  mounted() {
    //Default load wether with California
    this.loadWeather('34.070025', '-118.294616');
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-div {
  display: grid;
  grid-template-columns: 2fr 0.7fr;
  background: grey;
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/images/clouds1.jpg");
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
}

#more-info-div {
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;
  background-color: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(5px);
  box-shadow: black;
}

#more-info-div1 {
  padding-top: 10px;
  padding-right: 8px;
  padding-left: 8px;
}
#more-info-div2 {
  border: yellow solid;
}
#more-info-div3 {
  border: yellow solid;
}
</style>
