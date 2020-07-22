<template>
    <div>
      <h1>Vista de Administracion</h1>
      <div v-if="opinionActual.length > 0">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Personaje</th>
              <th>Opinión</th>
              <th>Usuario</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in opinionActual" :key="index">
              <th>{{index+1}}</th>
              <th>{{item.personaje}}</th>
              <th>{{item.opinion}}</th>
              <th>{{item.nombre}}</th>
              <th><button type="button" class="btn btn-primary">Editar</button></th>
              <th><button type="button" class="btn btn-danger">Eliminar</button></th>
            </tr>
          </tbody>
        </table>
        <button type="button" class="btn btn-primary" @click="reiniciarTodo">Reiniciar</button>
      </div>
      <div class="alert alert-primary" role="alert" v-else>
        No hay nada que administrar...
      </div>
    </div>
</template>

<script>
export default {
    name: 'Administracion',
    computed: {
      opinionActual() {
        return this.$store.getters.enviarListaOpiniones;
      }
    },
    methods: {
      reiniciarTodo(){
        this.$emit('reinicioTodo');
      }
    },
}
</script>