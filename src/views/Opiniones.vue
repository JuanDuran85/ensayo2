<template>
    <div > 
      <h1>Opiniones de los usuarios</h1>
      <div v-if="opinionActual.length > 0">
        <div id="accordion" > <!-- poner aqui el v for desde los comentarios -->
          <div class="card" v-for="(item, index) in opinionActual" :key="index">
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  OPINION SOBRE {{item.personaje}} REALIZADA POR {{item.nombre}}
                </button>
              </h5>
            </div>
            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
              <div class="card-body">
                {{item.opinion}}
              </div>
            </div>
          </div>
        </div>
      </div>  
      <div v-else>
        <p>No hay información para mostrar</p>
      </div>
    </div>    
</template>

<script>
export default {
    name: 'Opiniones',
      data() {
        return{

        }
      },
      computed: {
          opinionActual() {
            return this.$store.getters.enviarListaOpiniones;
          }
      },
}
    
</script>

<style >

</style>