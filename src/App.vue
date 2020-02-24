<template>
  <v-app>
    <NavBar/>
  </v-app>

</template>

<script>
  // @ is an alias to /src
  import NavBar from "@/components/NavBar";
  export default {
    name: 'app',
    components: {
      NavBar,
    }
  }
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    background: #263238;
  }
</style>