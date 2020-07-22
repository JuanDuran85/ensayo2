<template>
  <div>
      <img :src="imagen" alt="error">
  </div>
</template>

<script>
import Error404 from '../assets/notFound404.jpg';

export default {
    name: 'Error404',
    data() {
        return {
            imagen: Error404
        }
    },
}
</script>

<style>

</style>