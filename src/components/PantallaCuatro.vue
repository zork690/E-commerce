<template>
  <div id="divPrincipal">
    <div id="encabezadoDosDiv">
      <div id="iconosEncabezadosUno">
        <fa-icon class="iconoEncabezado" :icon="['fas', 'search']" size="2x" />
        <fa-icon class="iconoEncabezado" :icon="['fas', 'bars']" size="2x" />
      </div>
      <img id="logoImagen" alt="Steel Of Elements" src="../assets/logo.png" />
      <div id="iconosEncabezadosDos">
        <fa-icon class="iconoEncabezado" :icon="['fas', 'shopping-cart']" size="2x" />
        <fa-icon class="iconoEncabezado" :icon="['fas', 'heart']" size="2x" />
        <fa-icon class="iconoEncabezado" :icon="['fas', 'user']" size="2x" />
      </div>
    </div>

    <div id="categoriasDosDiv">
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

    <div id="sliderDiv">
      <b-carousel style="text-shadow: 0px 0px 2px #000" fade indicators :interval="2000">
        <b-carousel-slide
          v-for="(imagenSlider, indexImagenSlider) in imagenesSlider"
          :key="indexImagenSlider"
        >
          <template v-slot:img>
            <img class="imagenSlider" :src="imagenSlider.source" />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>

    <div id="novedadesDiv">
      <h3 id="novedadesH">NOVEDADES</h3>
      <img
        class="imagenNovedades"
        v-for="(imagenNovedades, indexImagenNovedades) in imagenesNovedades"
        :key="indexImagenNovedades"
        :src="imagenNovedades.source"
      />
    </div>

    <div id="imagenDiv">
      <img :src="imagenGrande" />
    </div>

    <div id="categoriasDiv">
      <h3 id="categoriaH">Conoce por categorias</h3>
      <div
        class="categoriasHijoDiv"
        v-for="(imagenCategorias, indexImagenCategorias) in imagenesCategorias"
        :key="indexImagenCategorias"
      >
        <img :src="imagenCategorias.source" />
        <span>{{imagenCategorias.categoria}}</span>
      </div>
    </div>

    <div id="piePaginaDiv">
      <div id="piePaginaLeftDiv">
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
      <div id="piePaginaRightDiv">
        <div id="piePaginaRightHijoDiv">
          <fa-icon class="iconoPiePaginaRight" :icon="['fab', 'facebook-square']" size="3x" />
          <fa-icon class="iconoPiePaginaRight" :icon="['fab', 'whatsapp-square']" size="3x" />
          <fa-icon class="iconoPiePaginaRight" :icon="['fab', 'instagram-square']" size="3x" />
        </div>
      </div>
      <h4
        id="derechosH"
      >&copy; 2019 Todos los derechos reservados | Sitio diseñado y desarrollado por by Elements</h4>
    </div>
  </div>
</template>
<script>
export default {
  name: "PantallaCuatro",
  data: function () {
    return {
      imagenesSlider: [
        {
          source:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRj21HrkDwgKe_rRxhtmSfh5hmvO75aWTyyQ&usqp=CAU",
          caption: "",
        },
        {
          source:
            "https://www.munakuy.net/wp-content/uploads/2019/10/aretes-para-hombre-bolivia-31.jpeg",
          caption: "",
        },
        {
          source:
            "https://swarovskimexico.vteximg.com.br/arquivos/ids/158812-607-607/5464120_gi2_1200.jpg?v=636846390239030000",
          caption: "",
        },
        {
          source:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSi3TYgFa6xB29DCw46dQXkVZ0rg6Df_POc4w&usqp=CAU",
          caption: "",
        },
      ],
      imagenesNovedades: [
        {
          source:
            "https://cdn.shopify.com/s/files/1/0283/2701/8541/products/Cadena-de-serpiente-de-color-plata-aut-ntica-de-alta-calidad-BAOPON-pulsera-fina-con-encanto_1_300x300.jpg?v=1578345118",
          categoria: "nonononon",
          precio: 200,
          rebaja: false,
        },
        {
          source:
            "https://images-na.ssl-images-amazon.com/images/I/712XChsim3L._AC_UX385_.jpg",
          categoria: "nonononon",
          precio: 200,
          rebaja: false,
        },
        {
          source:
            "https://andreamx.vteximg.com.br/arquivos/ids/4460614-450-450/Perfil-Normal.jpg?v=637026441414000000",
          categoria: "nonononon",
          precio: 200,
          rebaja: false,
        },
        {
          source:
            "https://http2.mlstatic.com/D_NQ_NP_873828-MLM31226151471_062019-W.jpg",
          categoria: "nonononon",
          precio: 200,
          rebaja: false,
        },
      ],
      imagenGrande:
        "https://previews.123rf.com/images/photostella/photostella1710/photostella171000002/87779014-pulseras-de-piedras-preciosas-de-%C3%A1gata-con-espoleta-dorada.jpg",
      imagenesCategorias: [
        {
          source:
            "https://www.didiamant.com/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/1/0/100013-100_front.jpeg",
          categoria: "Anillos",
        },
        {
          source:
            "https://images-na.ssl-images-amazon.com/images/I/61OvvJEWHsL._AC_SX569_.jpg",
          categoria: "Brazaletes",
        },
        {
          source:
            "https://images-na.ssl-images-amazon.com/images/I/71V0J9YGlHL._AC_SY395_.jpg",
          categoria: "Collares",
        },
        {
          source:
            "https://cristaljoyas.com/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/y/o/yolh-07.jpg",
          categoria: "Aretes",
        },
        {
          source:
            "https://michelle.com.mx/wp-content/uploads/2019/05/8F2GKLCL3AM.jpg",
          categoria: "Juegos",
        },
      ],
    };
  },
};
</script>
<style scoped>
#divPrincipal {
  border: 0px solid red;
}
#encabezadoDosDiv {
  border: 0px solid green;
  text-align: center;
}
#iconosEncabezadosUno {
  border: 0px solid red;
  float: left;
  display: inline-block;
  margin-top: 10px;
}
.iconoEncabezado{
    margin-left: 35px;
}
#logoImagen {
  display: inline-block;
}
#iconosEncabezadosDos {
  border: 0px solid red;
  float: right;
  display: inline-block;
  margin-top: 10px;
}
#categoriasDosDiv {
  border: 0px solid red;
}
#sliderDiv {
  border: 0px solid orange;
  width: 100%;
  height: auto;
}
.imagenSlider {
  height: 300px;
  width: 100%;
}
#novedadesDiv {
  border: 0px solid brown;
}
#novedadesH {
  text-align: center;
}
.imagenNovedades {
  border: 0px solid black;
  display: inline-block;
  width: 130px;
  height: 130px;
  margin-left: 20px;
}
#imagenDiv {
  border: 0px solid black;
  height: 250px;
}
#imagenDiv > img {
  width: 100%;
  height: 100%;
}
#categoriasDiv {
  border: 0px solid orchid;
}
#categoriaH {
  text-align: center;
}
.categoriasHijoDiv {
  border: 2px solid black;
  width: 130px;
  height: 130px;
  display: inline-block;
  margin-left: 20px;
}
.categoriasHijoDiv > img {
  width: 100%;
  height: 80%;
}
.categoriasHijoDiv > span {
  border: 0px solid red;
  text-align: center;
  display: block;
}
#piePaginaDiv {
  border: 0px solid orange;
}
#piePaginaLeftDiv {
  border: 0px solid blue;
  float: left;
  width: 50%;
  height: 200px;
  padding-top: 10px;
  padding-left: 20px;
}

#piePaginaRightDiv {
  border: 0px solid rgb(192, 231, 14);
  float: left;
  width: 50%;
  height: 200px;
  display: flex;
  align-items: center;
}
#piePaginaRightHijoDiv {
  margin: 0 auto;
}
#derechosH {
  clear: left;
  text-align: center;
}
.iconoPiePaginaRight {
  margin-left: 20px;
}
.iconoresumenCompraUno {
  padding-right: 8px;
}
#telefono {
  color: red;
  text-decoration-line: underline;
}
</style>