<template>
    <div class="container">
      <h1>Vista de Administracion</h1>
      <div v-if="opinionActual.length > 0">
        <table class="table table-hover mt-5">
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
              <td>{{index+1}}</td>
              <td>{{item.personaje}}</td>
              <td>{{item.opinion}}</td>
              <td>{{item.nombre}}</td>
              <td><button type="button" class="btn btn-info" @click="editandoOpinion(index)">Editar</button></td>
              <td>
                 <!-- Button trigger modal -->
                 <button type="button" class="btn btn-danger" data-toggle="modal" :data-target="'#eliminando'+index">Eliminar</button>
              </td>
                          
              <!-- Modal -->
              <div class="modal fade" :id="'eliminando'+index" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Eliminando</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                        ¿Esta seguro que quiere borrar el comentario realizado por: {{item.nombre}} para el personaje: {{item.personaje}}?
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                      <button type="button" class="btn btn-danger" data-dismiss="modal" @click="eliminandoOpinion(index)">Eliminar</button>
                    </div>
                  </div>
                </div>
              </div>          
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
      },
      eliminandoOpinion(index){
        this.$store.dispatch('eliminarOpinionAction',index);
      },
      editandoOpinion(index){
        this.$router.push(`/editar/${index}`);
      }
    },
}
</script>

<style lang="scss" scoped>
  tbody{
    tr{
      &:hover{
        background-color: aquamarine !important;
      }
    }
  }
  @import '../../node_modules/bootstrap/scss/bootstrap.scss';
</style>