<template>
  <div id="principalDiv">
    <div id="tuCarritoDiv">
      <h3 id="tuCarritoH">Tu Carrito:</h3>
      <b-button id="botonPagarUno">Pagar</b-button>
      <table id="tablaCarrito">
        <tr>
          <th
            v-for="(encabezadoTablaCarrito, indexEncabezadoTablaCarrito) in encabezadosTablaCarrito"
            :key="indexEncabezadoTablaCarrito"
          >{{encabezadoTablaCarrito}}</th>
        </tr>
        <tr
          class="trTablaCarrito"
          v-for="(articuloCarrito, indexArticuloCarrito) in articulosCarrito"
          :key="indexArticuloCarrito"
        >
          <td class="imagenDescripcionCarrito">
            <img :src="articuloCarrito.imagen" /> 
            <span class="descripcionArticulo">{{articuloCarrito.descripcion}}</span>
            <a class="eliminar">Eliminar</a>
          </td>
          <td>
            <span class="botonPiezas" @click="decrementarPiezas()">-</span>
            <span class="piezasS">{{articuloCarrito.piezas}}</span>
            <span class="botonPiezas" @click="incrementarPiezas()">+</span>
          </td>
          <td>{{articuloCarrito.precio}}</td>
          <td>{{articuloCarrito.porcentaje}}</td>
          <td>{{(articuloCarrito.precio)*("."+articuloCarrito.porcentaje)}}</td>
          <td>{{articuloCarrito.precio - ((articuloCarrito.precio)*("."+articuloCarrito.porcentaje))}}</td>
        </tr>
      </table>
    </div>
    <div id="resumenCompraP">
      <div id="resumenCompraUno">
        <p> 
          <span class="iconoresumenCompraUno">
            <fa-icon :icon="['fas', 'lock']" />
          </span>Compra Segura
        </p>
        <p>
          <span class="iconoresumenCompraUno">
            <fa-icon :icon="['fas', 'hotel']" />
          </span>Entrega en Sucursal
        </p>
        <p>
          <span class="iconoresumenCompraUno">
            <fa-icon :icon="['fas', 'shuttle-van']" />
          </span>Envios a Domicilio
        </p>
        <p>
          <span class="iconoresumenCompraUno">
            <fa-icon :icon="['fas', 'award']" />
          </span>Garantía
        </p>
        <p>
          <span class="iconoresumenCompraUno">
            <fa-icon :icon="['fas', 'phone-volume']" />
          </span>¿Necesitas ayuda? Llamanos al
          <span id="telefono">00-000-00-000</span>
        </p>
      </div>
      <div id="resumenCompraDos">
        <h3>Resumen de Compra</h3>
        <div id="totalesResumenCompraDiv">
          <p>Número de piezas:{{numeroPiezas}}</p>
          <p>Total de Compra: ${{totalCompra}}</p>
          <p id="descuentoAplicadoP">Descuento Aplicado: ${{descuentoAplicado}}</p>
          <p id="totalPagar">Total a Pagar: ${{totalPagar}}</p>
        </div>
        <b-button id="pagarButon">Pagar</b-button>
        <p>
          <a id="seguirComprando" @click="seguirComprando">Seguir Comprando</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PantallaTres",
  data: function () {
    return {
      encabezadosTablaCarrito: [
        "Producto",
        "Piezas",
        "Precio",
        "%",
        "Descuento",
        "Subtotal",
      ],
      articulosCarrito: [
        {
          imagen:
            "../assets/imagenes/7.jpg",
          descripcion: "Pulsera Estrella Circulo Resina",
          piezas: 2,
          precio: 200,
          porcentaje: 25,
        },
        {
          imagen:
            "https://distrollermx.vteximg.com.br/arquivos/ids/159126-750-750/7506176967411_02.jpg?v=636525831016570000",
          descripcion: "Pulsera Estrella Circulo Resina",
          piezas: 2,
          precio: 200,
          porcentaje: 25,
        },
        {
          imagen:
            "https://distrollermx.vteximg.com.br/arquivos/ids/159126-750-750/7506176967411_02.jpg?v=636525831016570000",
          descripcion: "Pulsera Estrella Circulo Resina",
          piezas: 2,
          precio: 200,
          porcentaje: 25,
        },
        {
          imagen:
            "https://distrollermx.vteximg.com.br/arquivos/ids/159126-750-750/7506176967411_02.jpg?v=636525831016570000",
          descripcion: "Pulsera Estrella Circulo Resina",
          piezas: 2,
          precio: 200,
          porcentaje: 25,
        },
        {
          imagen:
            "https://distrollermx.vteximg.com.br/arquivos/ids/159126-750-750/7506176967411_02.jpg?v=636525831016570000",
          descripcion: "Pulsera Estrella Circulo Resina",
          piezas: 2,
          precio: 200,
          porcentaje: 25,
        },
      ],
      numeroPiezas: 8,
      totalCompra: 600,
      descuentoAplicado: 100,
      totalPagar: 400,
    };
  },
  methods: {
    seguirComprando: function () {
      alert("SEGUIRÁ COMPRANDO");
    },
    incrementarPiezas() {
      alert("incrementar piezas");
    },
    decrementarPiezas() {
      alert("decrementar piezas");
    },
  },
};
</script>
<style scoped>
#principalDiv {
  border: 0px solid red;
}
#tuCarritoDiv {
  border-top: 5px solid orange;
}
#tablaCarrito {
  width: 100%;
  text-align: center;
}
.trTablaCarrito {
  border-top: 2px solid rgb(190, 181, 181);
}
.imagenDescripcionCarrito {
  width: 400px;
}
.imagenDescripcionCarrito > img {
  width: 50%;
  margin: 10px;
  border: 0px solid black;
  float: left;
}
.eliminar {
  color: red;
  font-size: 12px;
  text-decoration-line: underline;
}
#resumenCompraP {
  border-top: 2px solid rgb(190, 181, 181);
  height: 300px;
  text-align: center;
}
#resumenCompraUno {
  border: 0px solid green;
  height: 100%;
  width: 50%;
  float: left;
  text-align: left;
  padding-top: 50px;
  padding-left: 10px;
}
#resumenCompraDos {
  border: 0px solid green;
  height: 100%;
  width: 50%;
  float: left;
  background-color: rgb(245, 133, 58);
  margin-top: 8px;
}
#totalesResumenCompraDiv {
  background-color: white;
  margin: 20px;
}
#descuentoAplicadoP {
  color: pink;
}
#botonPagarUno {
  float: right;
  background-color: pink;
  width: 200px;
  color: black;
  font-weight: bold;
  border: none;
  margin: 8px;
}
#pagarButon {
  background-color: pink;
  border: none;
  width: 300px;
  color: black;
  font-weight: bolder;
}
#seguirComprando {
  text-decoration-line: underline;
  color: blue;
}
.iconoresumenCompraUno {
  padding-right: 8px;
}
#telefono {
  color: red;
  text-decoration-line: underline;
}
#totalPagar {
  font-weight: bold;
}
#tuCarritoH {
  display: inline;
}
.descripcionArticulo {
  font-weight: bold;
  text-transform: uppercase;
  display: block;
}
.botonPiezas {
  border: none;
  background-color: white;
  color: rgb(197, 62, 85);
  font-size: 30px;
  font-weight: bolder;
}
.piezasS{
  border: 2px solid pink;
  padding: 5px;
}
.botonPiezas:hover {
  cursor: pointer;
}
</style>