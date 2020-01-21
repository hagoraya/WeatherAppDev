<template>
  <div class="main-div">
    <div id="temp-div">
      <div id="display-temp">
        <h1>64</h1>
      </div>
    </div>
    <div id="more-info-div">
      <h3>HEYY</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-div {
  display: grid;
  grid-template-columns: 70% 30%;
  background: grey;
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/images/clouds1.jpg");
  background-size: cover;
}

#display-temp {
  background: bisque;
  bottom: 0;
  right: 0;
}

#temp-div {

}

#more-info-div {

  background-color: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(5px);
  box-shadow: black;
}
</style>
