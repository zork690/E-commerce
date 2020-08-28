<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Encabezado />
    <PantallaCuatro />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import PantallaUno from './components/PantallaUno.vue'
//import Encabezado from './components/Encabezado.vue'
//import PantallaDos from './components/PantallaDos.vue'
//import PantallaTres from './components/PantallaTres.vue'
import PantallaCuatro from './components/PantallaCuatro.vue'

export default {
  name: 'App',
  components: {
    //PantallaUno
    //Encabezado,
    PantallaCuatro
    //PantallaTres
    //PantallaDos
    //HelloWorld
  }
}
</script>

<style>

</style>
