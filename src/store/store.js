import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    infoList: [],
    listaOpiniones: [],
    listaFavorito: [],
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
    }
  },
})
