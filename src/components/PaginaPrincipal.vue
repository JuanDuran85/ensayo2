<template>
  <div class="container">
    <div class="row">
      <div
        class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4"
        v-for="(item, index) in datosApi"
        :key="index"
      >
        <div class="card">
          <img :src="item.image" class="image" :alt="index" />
          <div class="card-body">
            <h5 class="card-title">{{item.name}}</h5>
            <button
              type="button"
              class="btn btn-primary mx-3"
              data-toggle="modal"
              :data-target="'#opinar'+index"
              data-whatever="@mdo"
            >Opinar</button>
            <button
              type="button"
              class="btn btn-primary mx-3"
              data-toggle="modal"
              :data-target="'#ver'+index"
              data-whatever="@mdo"
            >Ver Más</button>

            <div
              class="modal fade"
              :id="'opinar'+index"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="title">Nombre del Personaje {{item.name}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Tu nombre:</label>
                        <input
                          type="text"
                          class="form-control"
                          v-model="nombreUsuario"
                          placeholder="ingresa tu nombre"
                        />
                      </div>
                      <div class="form-group">
                        <label for="message-text" class="col-form-label">Tu opinión:</label>
                        <textarea
                          class="form-control"
                          id="message-text"
                          v-model="opinion"
                          placeholder="ingresa tu opinión aquí..."
                        ></textarea>
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click.prevent="guardarOpinion(item)"
                      data-dismiss="modal"
                    >Guardar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      <!-- Modal -->
      <div class="modal fade" :id="'ver'+index" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">{{item.name}}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="media">
                  <img class="mr-3" :src="item.image" alt="Generic placeholder image">
                  <div class="media-body">
                    <h5>{{item.name}}</h5>
                    <p>{{item.status}}</p>
                    <p>{{item.species}}</p>
                    <p>{{item.location.name}}</p> 
                    <p>{{item.episode.length}} episodes</p> 
                    <p>{{item.created}}</p>
                  </div>
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal" @click.prevent="agregandoFav(item)">Agregar a Favoritos</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaginaPrincipal",
  data() {
    return {
      opinion: "",
      nombreUsuario: "",
    };
  },
  computed: {
    datosApi() {
      return this.$store.getters.enviarInfoApi;
    }
  },
  methods: {
    guardarOpinion(item) {
      if (this.opinion.length <= 20 && this.nombreUsuario.length <= 2) {
            alert("debe tener mas de 20 caracteres");
      } else {
        let datosAux = {
          opinion: this.opinion,
          nombre: this.nombreUsuario,
          personaje: item.name,
          id: item.id
        };
        this.$store.dispatch("guardandoOpinion", datosAux);
        this.$router.push('/opiniones');
      }
    },
    agregandoFav(item){
      this.$store.dispatch('agregandoFav',item);
      this.$router.push('/favoritos');
    }
  }
};
</script>


<style scoped lang="scss">
$primary: #d30b47;

@import "../../node_modules/bootstrap/scss/bootstrap.scss";
</style>>



