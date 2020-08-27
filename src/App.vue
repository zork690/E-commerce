<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Encabezado />
    <PantallaTres />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import PantallaUno from './components/PantallaUno.vue'
import Encabezado from './components/Encabezado.vue'
//import PantallaDos from './components/PantallaDos.vue'
import PantallaTres from './components/PantallaTres.vue'

export default {
  name: 'App',
  components: {
    //PantallaUno
    Encabezado,
    PantallaTres
    //PantallaDos
    //HelloWorld
  }
}
</script>

<style>

</style>
