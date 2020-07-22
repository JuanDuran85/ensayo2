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
  </div>
</nav>
    </div>
</template>

<script>
  
export default {
    name: 'Navegacion',
}
</script>

<style >

</style>