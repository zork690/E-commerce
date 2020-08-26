<template>
  <div id="principalDiv">
    <div id="articuloDetalleDiv">
      <div id="imagenChicaDiv">
        <img
          class="imagenChiquita"
          src="https://enriqueortegaburgos.com/wp-content/uploads/2019/10/joyas.jpg"
        />
      </div>
      <div id="imagenGrandeDiv">
        <ImagenZoom img-normal="https://conceptodefinicion.de/wp-content/uploads/2017/12/Joya2.jpg"></ImagenZoom>
      </div>
      <div id="calificacionImagenDiv">
        <h4 id="tituloImagen">Título de la imagen</h4>
        <b-form-rating id="estrellas" variant="warning" class="mb-2"></b-form-rating>
        <span id="calificarSpan">Calificar</span>
        <p id="puntosRecompensaP">Puntos de recompensa:10</p>
        <p>
          Precio:
          <span id="precioSpan">$100</span>
        </p>
        <p>
          Descuento:
          <span class="precioSpan">50%</span>
        </p>
        <p>
          Precio con Descuento:
          <span class="precioSpan">$50</span>
        </p>
        <button class="btns" @click="inc">+</button>
        <span id="conteoSpan">{{cantidadArticulo}}</span>
        <button class="btns" @click="dec">-</button>
        <button class="btn">Agregar Al carrito</button>
      </div>
      <div id="coloresImagenDiv">
        <span>Colores:</span>
        <br />
        <span>Gold</span>
        <span class="circulo" style="background-color: yellow;"></span>
        <br />
        <span>Rose</span>
        <span class="circulo" style="background-color: pink;"></span>
        <br />
        <span>Steel</span>
        <span class="circulo" style="background-color: gray;"></span>
      </div>
    </div>

    <div id="descripcionArticuloDivP">
      <div id="caracteristicasArticuloDiv">
        <h3>Características del Artículo</h3>
        <ul>
          <li>
            <span>Material:</span>
            <span>Acero</span>
          </li>
          <li>
            <span>Tipo:</span>
            <span>Abierto</span>
          </li>
          <li>
            <span>Figura:</span>
            <span>Si</span>
          </li>
          <li>
            <span>Medida:</span>
            <span>5cm</span>
          </li>
          <li>
            <span>Color:</span>
            <span>Gold</span>
          </li>
          <li>
            <span>Categoría:</span>Brazzalette
            <span></span>
          </li>
          <li>
            <span>Piedra:</span>
            <span>Si</span>
          </li>
          <li>
            <span>Tamaño:</span>
            <span>Medium</span>
          </li>
          <li>
            <span>Genero:</span>
            <span>Unisex</span>
          </li>
        </ul>
      </div>
      <div id="descripcionArticuloDiv">
        <h3>Descripción del artículo</h3>
        <span>Brazalete Elegante tipo abierto con detalles de figuras de bloque.</span>
      </div>
    </div>

    <div id="masArticulosDiv">
      <h3>Artículos que pueden interesarte:</h3>
      <div class="wrapper">
        <ul class="carousel" data-target="carousel">
          <li class="card" data-target="card">
            <img class="cardImagen" src="../assets/imagenes/1.jpg" />
          </li>
          <li class="card" data-target="card">
            <img class="cardImagen" src="../assets/imagenes/2.jpg" />
          </li>
          <li class="card" data-target="card">
            <img class="cardImagen" src="../assets/imagenes/3.jpg" />
          </li>
          <li class="card" data-target="card">
            <img class="cardImagen" src="../assets/imagenes/4.jpg" />
          </li>
          <li class="card" data-target="card">
            <img class="cardImagen" src="../assets/imagenes/5.jpg" />
          </li>
          <li class="card" data-target="card">
            <img class="cardImagen" src="../assets/imagenes/6.jpg" />
          </li>
          <li class="card" data-target="card">
            <img class="cardImagen" src="../assets/imagenes/7.jpg" />
          </li>
          <li class="card" data-target="card">
            <img class="cardImagen" src="../assets/imagenes/8.jpg" />
          </li>
          <li class="card" data-target="card">
            <img class="cardImagen" src="../assets/imagenes/9.jpg" />
          </li>
          <li class="card" data-target="card">
            <img class="cardImagen" src="../assets/imagenes/10.jpg" />
          </li>
          <li class="card" data-target="card">
            <img class="cardImagen" src="../assets/imagenes/11.jpg" />
          </li>
          <li class="card" data-target="card">
            <img class="cardImagen" src="../assets/imagenes/12.jpg" />
          </li>
          <li class="card" data-target="card">
            <img class="cardImagen" src="../assets/imagenes/13.jpg" />
          </li>
          <li class="card" data-target="card">
            <img class="cardImagen" src="../assets/imagenes/14.jpg" />
          </li>
          <li class="card" data-target="card">
            <img class="cardImagen" src="../assets/imagenes/15.jpg" />
          </li>
          <li class="card" data-target="card">
            <img class="cardImagen" src="../assets/imagenes/16.jpg" />
          </li>
          <li class="card" data-target="card">
            <img class="cardImagen" src="../assets/imagenes/17.jpg" />
          </li>
          <li class="card" data-target="card">
            <img class="cardImagen" src="../assets/imagenes/18.jpg" />
          </li>
          <li class="card" data-target="card">
            <img class="cardImagen" src="../assets/imagenes/19.jpg" />
          </li>
          <li class="card" data-target="card">
            <img class="cardImagen" src="../assets/imagenes/20.jpg" />
          </li>
        </ul>
        <div class="button-wrapper">
          <button data-action="slideLeft" @click="izquierda">L</button>
          <button data-action="slideRight" @click="derecha">R</button>
        </div>
      </div>
    </div>

    <div id="resenasDiv">
      <h3>Reseñas:</h3>
      <ul class="resenaUl">
        <li class="resenaLi">
          <fa-icon class="resenaImagen" :icon="['fas', 'user']" />
          <span>Benjamin:</span>
          <span>Excelente producto</span>
          <br />
          <b-form-rating v-model="valueResena" variant="warning" readonly></b-form-rating>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import ImagenZoom from "./ImagenZoom.vue";
export default {
  name: "PantallaDos",
  components: {
    ImagenZoom,
  },
  data: function () {
    return {
      cantidadArticulo: 0,
      carousel: "",
      card: "",
      carouselWidth: 0,
      cardStyle: "",
      cardMarginRight: 0,
      cardCount: 0,
      offset: 0,
      maxX: 0,
      valueResena: 4,
    };
  },
  methods: {
    inc() {
      this.cantidadArticulo += 1;
    },
    dec() {
      if (this.cantidadArticulo > 0) {
        this.cantidadArticulo -= 1;
      }
    },
    izquierda() {
      if (this.offset !== 0) {
        this.offset += this.carouselWidth + this.cardMarginRight;
        this.carousel.style.transform = `translateX(${this.offset}px)`;
      }
    },
    derecha() {
      if (this.offset !== this.maxX) {
        this.offset -= this.carouselWidth + this.cardMarginRight;
        this.carousel.style.transform = `translateX(${this.offset}px)`;
      }
    },
  },
  mounted() {
    this.carousel = document.querySelector("[data-target='carousel']");
    this.card = this.carousel.querySelector("[data-target='card']");
    this.carouselWidth = this.carousel.offsetWidth;
    this.cardStyle =
      this.card.currentStyle || window.getComputedStyle(this.card);
    this.cardMarginRight = Number(this.cardStyle.marginRight.match(/\d+/g)[0]);
    this.cardCount = this.carousel.querySelectorAll(
      "[data-target='card']"
    ).length;
    this.maxX = -(
      (this.cardCount / 5) * this.carouselWidth +
      this.cardMarginRight * (this.cardCount / 5) -
      this.carouselWidth -
      this.cardMarginRight
    );
  },
};
</script>
<style scoped>
#principalDiv {
  border-top: 5px solid red;
  margin: 0px;
}
#articuloDetalleDiv {
  border: 0px solid orange;
}
#articuloDetalleDiv > div {
  float: left;
}
#imagenChicaDiv {
  border: 2px solid red;
  width: 10%;
  height: 200px;
  margin: 20px 15px;
}
.imagenChiquita {
  width: 100%;
}
#imagenGrandeDiv {
  border: 0px solid black;
  width: 35%;
  margin: 20px 0px;
}
.imagenGrande {
  width: 100%;
}
#calificacionImagenDiv {
  border: 0px solid yellowgreen;
  width: 30%;
  margin: 20px 0px;
}
#estrellas {
  width: 80%;
  float: left;
}
#calificarSpan {
  color: red;
  font-size: 12px;
  border: 0px solid brown;
  float: right;
}
#puntosRecompensaP {
  clear: both;
}
#precioSpan {
  font-weight: bolder;
  text-decoration-line: line-through;
  text-decoration-color: red;
}
.precioSpan {
  font-weight: bolder;
}
#conteoSpan {
  border: 0px solid pink;
  display: inline-block;
  width: 20px;
  height: 25px;
}
#coloresImagenDiv {
  border: 0px solid red;
  width: 20%;
  margin: 20px 0px;
}
.circulo {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
#descripcionArticuloDivP {
  border: 1px solid red;
  clear: left;
}
#caracteristicasArticuloDiv {
  border: 0px solid purple;
  width: 50%;
  float: left;
}
#descripcionArticuloDiv {
  border: 0px solid purple;
  width: 50%;
  float: left;
}
#masArticulosDiv {
  border-top: 1px solid red;
  margin-bottom: 15px;
  clear: left;
}
#resenasDiv {
  border-top: 1px solid red;
}
.wrapper {
  height: 200px;
  width: 1064px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
}
.button-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
}
.carousel {
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  display: flex;
  position: absolute;
  left: 0;
  transition: all 1s ease;
}
.card {
  background: none;
  min-width: 200px;
  height: 200px;
  margin-right: 1rem;
  display: inline-block;
}
.cardImagen {
  width: 100%;
}
.resenaUl {
  list-style: none;
}
.resenaLi {
  margin: 0px;
}
.resenaImagen {
  border: 0px solid orange;
  margin: 0px 5px;
}
</style>