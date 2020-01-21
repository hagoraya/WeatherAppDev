<template>
  <div class="main-div">
    <div id="temp-div"></div>
    <div id="more-info-div"></div>
    <h1>HEEYYY </h1>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.main-div{
  display: inline-block;
  background: grey;
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/images/clouds1.jpg");
  background-size: cover;
}


#temp-div{
  display: inline-block;
  width: 70%;
  height: 100vh;
}

#more-info-div{
  display: inline-block;
  width: 30%;
  height: 100vh;
  background-color: rgba(0, 0, 0, .35);  
  backdrop-filter: blur(5px);
  box-shadow: black;



}






</style>
