import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    infoList: [],
    listaOpiniones: [],
    listaFavorito: [],
    busqueda: '',
  },
  getters: {
    enviarInfoApi(state){
      return state.infoList;
    },
    enviarListaOpiniones(state){
      return state.listaOpiniones;
    },
    enviarFavList(state){
      return state.listaFavorito;
    }
  },
  mutations: {
    mutandoInfoApi(state, recibiendoInfoApi){
      state.infoList = recibiendoInfoApi;
    },
    mutandoInfoOpin(state, infoOpinRecibiendo){
      state.listaOpiniones.push(infoOpinRecibiendo);
    },
    mutandoFav(state,favRecibido){
      state.listaFavorito.push(favRecibido);
    },
    eliminarFavMutacion(state,index){
      state.listaFavorito.splice(index,1);
    },
    eliminarOpinionMutations(state,indexRecibido){
      console.time("Duracion");
      state.listaOpiniones.splice(indexRecibido,1);
      console.timeEnd("Duracion");
    },
    cambiandoOpinionMutations(state,datosRecibidos){
      state.listaOpiniones[datosRecibidos.index].nombre = datosRecibidos.nombre;
      state.listaOpiniones[datosRecibidos.index].opinion = datosRecibidos.opinion;
    }
  },
  actions: {
    infoApi(context,recibiendoInfoApi){
      context.commit('mutandoInfoApi',recibiendoInfoApi);
    },
    guardandoOpinion(context,infoOpinRecibiendo){
      context.commit('mutandoInfoOpin',infoOpinRecibiendo);
    },
    agregandoFav(context,favRecibido){
      context.commit('mutandoFav',favRecibido);
    },
    eliminandoFavorito(context,elimiFavRecibido){
      context.commit('eliminarFavMutacion',elimiFavRecibido);
    },
    eliminarOpinionAction(context,indexRecibido){
      context.commit('eliminarOpinionMutations',indexRecibido);
    },
    cambiandoOpinionAction(context,datosRecibidos){
      context.commit('cambiandoOpinionMutations',datosRecibidos);
    }
  },
})
