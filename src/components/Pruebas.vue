<template>
  <div>
    {{saludo}}
    <p v-for="elemento in array" :key="elemento">{{elemento}}</p>
    <input v-model="inputUno" />
    <button v-on:click="clickUno">Click</button>
  </div>
</template>
<script>
export default {
  name: "PantallaDos",
  data: function () {
    return {
      saludo: "HOLA MAMITA",
      array: ["Hola", "Hi", "Adios", "Bye"],
      inputUno: ''
    }
  },
  methods:{
      clickUno: function(){
          alert("HOLA VUE");
      }
  }
};
</script>
<style scoped>
</style>