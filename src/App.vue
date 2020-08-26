<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Encabezado />
    <PantallaDos />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import PantallaUno from './components/PantallaUno.vue'
import Encabezado from './components/Encabezado.vue'
import PantallaDos from './components/PantallaDos.vue'

export default {
  name: 'App',
  components: {
    //PantallaUno
    Encabezado,
    PantallaDos
    //HelloWorld
  }
}
</script>

<style>

</style>
