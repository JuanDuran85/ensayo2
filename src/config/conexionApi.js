import axios from 'axios';
import store from '../store/store';

export function conexApi() {
  axios.get('https://rickandmortyapi.com/api/character/')
    .then(response=>{
       store.dispatch('infoApi',response.data.results);
        console.log(response)
    }).catch(error=> {
        console.error(error);
    });
}
