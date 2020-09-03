<template>
  <div id="divPrincipal">
    <div id="divUno">
      <div id="divUnoUno">
        <span class="iconoSpan">
          <fa-icon class="iconoIcono" :icon="['fas', 'search']" size="2x" />
          <span class="iconoIconoTexto">Buscar</span>
        </span>
        <span class="iconoSpan">
          <fa-icon class="iconoIcono" :icon="['fas', 'bars']" size="2x" />
          <span class="iconoIconoTexto">Menu</span>
        </span>
      </div>
      <div id="divUnoDos">
        <img id="logoImagen" alt="Steel Of Elements" src="../assets/logoDos.png" />
      </div>
      <div id="divUnoTres">
        <span class="iconoSpan">
          <fa-icon class="iconoIcono" :icon="['fas', 'shopping-cart']" size="2x" />
          <span class="iconoIconoTexto">Carrito</span>
        </span>
        <span class="iconoSpan">
          <fa-icon class="iconoIcono" :icon="['fas', 'heart']" size="2x" />
          <span class="iconoIconoTexto">Favoritos</span>
        </span>
        <span class="iconoSpan">
          <fa-icon class="iconoIcono" :icon="['fas', 'user']" size="2x" />
          <span class="iconoIconoTexto">Mi Cuenta</span>
        </span>
      </div>
    </div>
    <div id="divDos">
      <b-nav pills align="center">
        <b-nav-item-dropdown
          id="my-nav-dropdown"
          text="Aretes"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item>One</b-dropdown-item>
          <b-dropdown-item>Two</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Three</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown
          id="my-nav-dropdown"
          text="Brazaletes"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item>One</b-dropdown-item>
          <b-dropdown-item>Two</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Three</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown
          id="my-nav-dropdown"
          text="Anillos"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item>One</b-dropdown-item>
          <b-dropdown-item>Two</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Three</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown
          id="my-nav-dropdown"
          text="Collares"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item>One</b-dropdown-item>
          <b-dropdown-item>Two</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Three</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown
          id="my-nav-dropdown"
          text="Juegos"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item>One</b-dropdown-item>
          <b-dropdown-item>Two</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Three</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown id="my-nav-dropdown" text="Otros" toggle-class="nav-link-custom" right>
          <b-dropdown-item>One</b-dropdown-item>
          <b-dropdown-item>Two</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Three</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown
          id="my-nav-dropdown"
          text="Fábrica"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item>One</b-dropdown-item>
          <b-dropdown-item>Two</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Three</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item>Ir a tienda CDMX</b-nav-item>
      </b-nav>
    </div>
  </div>
</template>
<script>
export default {
  name: "Encabezado",
};
</script>
<style scoped>
#divUno {
  border-top: 10px solid rgb(247, 175, 20);
  height: auto;
}
#divUnoUno {
  border: 0px solid red;
  width: 33.33%;
  float: left;
  padding: 12px;
}
#divUnoDos {
  border: 0px solid red;
  width: 33.33%;
  height: 80px;
  float: left;
  margin-bottom: 15px;
  text-align: center;
}
#logoImagen {
  border: 0px solid red;
  height: 100%;
}
#divUnoTres {
  border: 0px solid red;
  width: 33.33%;
  float: left;
  padding: 12px;
}
.iconoSpan {
  border: 0px solid red;
  display: inline-block;
  width: 33%;
}
.iconoIcono {
  border: 0px solid blue;
  display: block;
  width: 100%;
  text-align: center;
}
.iconoIconoTexto{
  border: 0px solid blue;
  display: block;
  text-align: center;
}
#divDos {
  clear: left;
  border-top: 2px solid gray;
  height: 100px;
}
</style>