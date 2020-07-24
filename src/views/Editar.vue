<template>
  <div class="container">
        <form class="mt-5 pt-5">
            <h3 class="text-left">Editando a: {{infoOpinionSola.personaje}}</h3>
            <div class="form-group">
                <label for="recipient-name" class="col-form-label">Tu nombre:</label>
                <input type="text" class="form-control" v-model="nombreUsuario" placeholder="ingresa tu nombre" />
            </div>
            <div class="form-group">
                <label for="message-text" class="col-form-label">Tu opinión:</label>
                <textarea class="form-control" id="message-text" v-model="opinion" placeholder="ingresa tu opinión aquí..."></textarea>
            </div>
            <!-- <button type="button" class="btn btn-primary mx-5 mt-3" @click="regresando">Regresar</button> -->
            <router-link to="/administracion" tag="button" class="btn btn-primary mt-3 mx-5">Regresar</router-link>
            <button type="button" class="btn btn-info mt-3" @click="guardandoCambioOpinion">Guardar</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Editar',
    data() {
        return {
/*             nombreUsuario: this.$store.getters.enviarListaOpiniones[this.$route.params.index].nombre,
            opinion: this.$store.getters.enviarListaOpiniones[this.$route.params.index].opinion  */
            nombreUsuario: '',
            opinion: '',
            infoOpinionSola: {}
        }
    },
/*     computed: {
        infoOpinion(){
            let infoOpinionSola = this.$store.getters.enviarListaOpiniones[this.$route.params.index];
            return infoOpinionSola;
        }
    }, */
    mounted() {
        this.infoOpinionSola = this.$store.getters.enviarListaOpiniones[this.$route.params.index];
        this.nombreUsuario = this.infoOpinionSola.nombre;
        this.opinion = this.infoOpinionSola.opinion;
    },
    methods: {
        guardandoCambioOpinion(){
            let datosOpinion = {
                opinion: this.opinion,
                nombre: this.nombreUsuario,
                index: this.$route.params.index
            };
            this.$store.dispatch('cambiandoOpinionAction',datosOpinion);
            this.$router.push('/administracion');
        }
    },
}
</script>

<style>

</style>