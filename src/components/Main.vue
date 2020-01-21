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
  background-attachment: inherit;
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
  background: inherit;


}

#main-info-div  ::before{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: inset 0 0 2000px rgba(0, 0, 0, 0.5);




}




</style>
