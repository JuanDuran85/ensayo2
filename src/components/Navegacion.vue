<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
         <router-link class="navbar-brand" to="/">Rick and Morty</router-link>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNav">
           <ul class="navbar-nav ml-auto">
               <li class="nav-item active">
                 <router-link class="nav-link" to="/opiniones">Opiniones</router-link>
               </li>
               <li class="nav-item">
                 <router-link class="nav-link" to="/favoritos">Favoritos</router-link>
               </li>
               <li class="nav-item">
                 <router-link class="nav-link" to="/administracion">Administración</router-link>
               </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Escribe el personaje que deseas buscar..." aria-label="Search" v-model="busqueda">
<!--             <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click.prevent="enviarBusqueda">Search</button> -->
        </form>
        </div>
</nav>
    </div>
</template>

<script>
  
export default {
    name: 'Navegacion',
    data() {
      return {
        busqueda: ''
      }
    },
    watch: {
      busqueda(){
        this.$store.state.busqueda = this.busqueda;
      }
    },
   /*  methods: {
      enviarBusqueda(){
        this.$store.state.busqueda = this.busqueda;
      }
    }, */
}
</script>

<style >

</style>