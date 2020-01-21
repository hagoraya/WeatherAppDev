<template>
  <div id="app-div">
    <Main></main>
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'app',
  components: {
    Main
  }
}
</script>

<style>
#app-div {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
  color: #2c3e50;
}

body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  background: #2c3e50;
  overflow: hidden;
}


</style>
