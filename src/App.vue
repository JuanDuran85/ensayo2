<template>
  <div id="app">
    <navegacion></navegacion>
      <router-view @reinicioTodo="reiniciarOpiniones"/>
     <footer-app></footer-app>
  </div>
</template>

<script>
import Navegacion from './components/Navegacion.vue';
import FooterApp from './components/FooterApp.vue';
import {conexApi} from "./config/conexionApi";

export default {
  name: 'App',
   components: {
     Navegacion,
     FooterApp
   },
   mounted() {
    conexApi();
   },
   methods: {
     reiniciarOpiniones(){
       this.$store.state.listaOpiniones = [];
     }
   },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
