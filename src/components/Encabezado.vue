<template>
  <div id="divPrincipal">
    <div id="divUno">
      <div id="cuadrito">
        <b-dropdown id="dropDown" class="m-2">
          <template v-slot:button-content>
            <b-icon-menu-up />
          </template>
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>
      </div>
      <div id="logo">
        <img id="logoImagen" alt="Steel Of Elements" src="../assets/logo.png" />
      </div>
      <div id="miCuentaDiv">
        <span class="iconoSpan">
          <fa-icon :icon="['fas', 'shopping-cart']" />Carrito
        </span>
        <span class="iconoSpan">
          <fa-icon :icon="['fas', 'heart']" />Favoritos
        </span>
        <span class="iconoSpan">
          <fa-icon :icon="['fas', 'user']" />Mi Cuenta
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
    <div id="divTres">
      <div id="divTresH">
        <button id="botonBuscar" type="submit" class="btn btn-primary btn-sm">
          <b-icon-search id="buscarIcono" />
        </button>
        <input id="inputBuscar" type="search" class="input-sm form-control" placeholder="Búsqueda" />
      </div>
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
  background-color: none;
  border-top: 8px solid rgb(247, 175, 20);
}
#divDos {
  clear: left;
  background-color: none;
  border: none;
  height: 100px;
}
#divTres {
  clear: left;
  text-align: center;
  background-color: none;
  border: none;
  margin-bottom: 30px;
}
#divTresH {
  display: inline-block;
}
#cuadrito {
  background-color: none;
  float: left;
  height: 80px;
  width: 33%;
}
#logo {
  float: left;
  background-color: none;
  height: 80px;
  width: 33%;
}
#logoImagen {
  /*width: 100%;*/
}
#miCuentaDiv {
  float: left;
  background-color: none;
  height: 80px;
  width: 34%;
}
#miCuenta {
  background-color: #ac5e3f;
  width: 34%;
  display: inline-block;
}
#favoritos {
  background-color: #05afda;
  width: 33%;
  display: inline-block;
}
#carrito {
  background-color: #dda01b;
  width: 33%;
  display: inline-block;
}
.menu {
  display: inline-block;
  border: 1px dotted red;
  width: 70px;
}
#inputBuscar {
  width: 900px;
  display: inline-block;
}
#botonBuscar {
  background-color: none;
}
#buscarIcono {
  height: 25px;
}
#dropDown {
  float: left;
}
.iconoSpan {
  float: right;
  padding-left: 20px;
}
</style>