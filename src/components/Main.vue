<template>
  <div class="main-div">
    <div id="temp-div">
      <div id="display-temp">
        <div>
            {{icons[forecast.currently.icon]}}
            {{forecast.currently.temperature}}°C
            {{forecast.currently.summary}}             
        </div>
      </div>
    </div>
    <div id="more-info-div">
      <div id="more-info-div1">
      </div>
      <div id="more-info-div2"></div>
      <div id="more-info-div3"></div>

    </div>
  </div>
</template>

<script>

/* eslint-disable no-console */

import API from '../lib/API';

export default {
  name: "HelloWorld",
  data() {
    return {
      forecast: {},
      icons:{
        'clear-day': '🌞',
        'clear-night': '🌙',
        'rain': '🌧',
        'snow': '🌨',
        'sleet': '⛷',
        'wind': '💨',
        'fog': '🌫',
        'cloudy': '☁',
        'partly-cloudy-day': '⛅',
        'partly-cloudy-night': '🌚',
      }
    };
  },

  props: {
    msg: String
  },

  mounted(){
    API.getForecast().then(result => {
      console.log(result);
      this.forecast = result;
    });
  },

 


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

#more-info-div1{
  border: yellow solid;
}
#more-info-div2{
  border: yellow solid;
}
#more-info-div3{
  border: yellow solid;
}
</style>
