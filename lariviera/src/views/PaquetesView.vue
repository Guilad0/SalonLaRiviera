<template>
  <div
    class="font-serif bg-[url('https://res.cloudinary.com/dughcx6qb/image/upload/v1738768263/textura_LE_upscale_balanced_x4v2_fekn3r.jpg')] bg-cover">
    <div class="flex items-center justify-center mt-8 m-5 p-2.5">
      <h1 class="text-4xl md:text-4xl font-serif text-center">
        RESERVA UNA REUNIÓN INICIAL
      </h1>
    </div>

    <div>
      <div class="flex space-x-4 mb-4 items-center justify-center border-1 border-neutral-400 bg-neutral-200">
        <button v-for="categoria in categories" :key="categoria.value" @click="selectedCategory = categoria.value"
          :class="[
            'px-4 py-2  rounded-none font-serif ',
            selectedCategory === categoria.value
              ? 'bg-slate-700 text-white'
              : 'bg-gray-300',
          ]">
          {{ categoria.label }}
        </button>
      </div>


      <!-- Contenido dinámico basado en la categoría seleccionada MATRIMONIOS -->
      <div class="container mt-2">
        <div class="row g-4 d-flex justify-content-center">
          <div class="col-md-3 col-sm-6 mb-4" v-for="(paquete, index) in filteredPackages(selectedCategory)"
            :key="index">
            <div class="card card-block">
              <h4 class="card-title text-right">
                <i class="material-icons">Ver Detalles</i>
              </h4>
              <img :src="paquete.image" alt="Paquete imagen" />
              <h5 class="card-title mt-3 mb-3">{{ paquete.nombre }}</h5>
              <h5 class="card-title mt-3 mb-3">Precio: {{ paquete.precio }} por persona</h5>
              <p class="card-text">{{ paquete.descripcion }}</p>
            </div>
          </div>
        </div>
      </div>




      <!-- Contenido dinámico basado en la categoría seleccionada QUINCE AÑOS -->


      <!-- Contenido dinámico basado en la categoría seleccionada EVENTOS PRIVADOS -->

      <!-- Contenido dinámico basado en la categoría seleccionada OTROS -->


    </div>
  </div>
</template>

<script>
import MainCard from "../components/MainCard.vue";

export default {
  components: { MainCard },

  // Data que contiene los paquetes, categorías y la categoría seleccionada
  data() {
    return {
      // Paquetes disponibles para cada categoría
      paquetes: [
        // Paquetes Matrimonios
        {
          nombre: "Paquete Matrimonial Estandar",
          precio: "Bs 185",
          descripcion: "Incluye decoración básica, catering gourmet y música a elección. Una opción ideal para una boda sencilla pero especial.",
          image: "https://static.pexels.com/photos/7096/people-woman-coffee-meeting.jpg",
          category: "matrimonios"
        },
        {
          nombre: "Paquete Matrimonial Gold",
          precio: "Bs 190",
          descripcion: "Ofrece decoración personalizada, un menú gourmet exclusivo y música a elección. Perfecto para quienes buscan un evento elegante.",
          image: "https://static.pexels.com/photos/7357/startup-photos.jpg",
          category: "matrimonios"
        },
        {
          nombre: "Paquete Matrimonial Platinum",
          precio: "Bs 220",
          descripcion: "Brinda una decoración de lujo, catering gourmet y música a elección. La mejor opción para una boda inolvidable.",
          image: "https://static.pexels.com/photos/262550/pexels-photo-262550.jpeg",
          category: "matrimonios"
        },

        // Paquetes Quince Años
        {
          nombre: "Paquete Quince Años Classic",
          precio: "Bs 150",
          descripcion: "Un paquete elegante con decoración y catering básico para una fiesta encantadora.",
          image: "https://static.pexels.com/photos/4503460/pexels-photo-4503460.jpeg",
          category: "quinceanos"
        },
        {
          nombre: "Paquete Quince Años Deluxe",
          precio: "Bs 250",
          descripcion: "Decoración exclusiva y un menú personalizado para una celebración de lujo.",
          image: "https://static.pexels.com/photos/1723563/pexels-photo-1723563.jpeg",
          category: "quinceanos"
        },
        {
          nombre: "Paquete Quince Años Deluxe",
          precio: "Bs 250",
          descripcion: "Decoración exclusiva y un menú personalizado para una celebración de lujo.",
          image: "https://static.pexels.com/photos/1723563/pexels-photo-1723563.jpeg",
          category: "quinceanos"
        },


        // Paquetes Eventos Privados
        {
          nombre: "Paquete Evento Privado Básico",
          precio: "Bs 200",
          descripcion: "Paquete básico con catering y música para cualquier tipo de evento privado.",
          image: "https://static.pexels.com/photos/1437510/pexels-photo-1437510.jpeg",
          category: "eventosprivados"
        },
        {
          nombre: "Paquete Evento Privado Premium",
          precio: "Bs 350",
          descripcion: "Un paquete exclusivo con servicio personalizado, catering gourmet y música en vivo.",
          image: "https://static.pexels.com/photos/1029714/pexels-photo-1029714.jpeg",
          category: "eventosprivados"
        },
        {
          nombre: "Paquete Evento Privado Premium",
          precio: "Bs 350",
          descripcion: "Un paquete exclusivo con servicio personalizado, catering gourmet y música en vivo.",
          image: "https://static.pexels.com/photos/1029714/pexels-photo-1029714.jpeg",
          category: "eventosprivados"
        },


        // Paquetes Eventos de Empresa
        {
          nombre: "Paquete Empresa Básico",
          precio: "Bs 180",
          descripcion: "Ideal para eventos corporativos pequeños, con catering sencillo y espacio adaptado.",
          image: "https://static.pexels.com/photos/3182766/pexels-photo-3182766.jpeg",
          category: "otros"
        },    
      ],

      // Categoría seleccionada por defecto
      selectedCategory: "matrimonios",

      // Categorías disponibles para la selección
      categories: [
        { label: "Matrimonios", value: "matrimonios" },
        { label: "Quince Años", value: "quinceanos" },
        { label: "Eventos Privados", value: "eventosprivados" },
        { label: "Eventos de Empresa", value: "otros" }
      ]
    };
  },

  // Métodos para manejar la lógica de filtrado y desplazamiento de página
  methods: {
    // Filtra los paquetes según la categoría seleccionada
    filteredPackages(categoria) {
      return this.paquetes.filter(paquete => paquete.category === categoria);
    },

    // Mueve el scroll hacia el principio de la página
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>


<style scoped>
/* Contenedor de las tarjetas */
.container .row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* Centra las tarjetas horizontalmente */
  gap: 30px;
  /* Espacio entre las tarjetas */
}

/* Estilos para las tarjetas */
.card {
  width: 100%;
  /* Asegura que las tarjetas sean responsivas */
  max-width: 280px;
  /* Limita el tamaño máximo de las tarjetas */
  margin-bottom: 20px;
  /* Espacio entre las tarjetas de diferentes filas */
  transition: 0.5s;
  cursor: pointer;
}

.card img {
  height: 150px;
  width: 100%;
}

.card-title {
  font-size: 15px;
  transition: 1s;
  cursor: pointer;
}

.card-title i {
  font-size: 15px;
  transition: 1s;
  cursor: pointer;
  color: #ffa710;
}

.card-title i:hover {
  transform: scale(1.25) rotate(100deg);
  color: #18d4ca;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
}

.card-text {
  height: 80px;
}

/* Efectos de sombra y transición para la tarjeta */
.card::before,
.card::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: scale3d(0, 0, 1);
  transition: transform 0.3s ease-out 0s;
  background: rgba(255, 255, 255, 0.1);
  content: '';
  pointer-events: none;
}

.card::before {
  transform-origin: left top;
}

.card::after {
  transform-origin: right bottom;
}

.card:hover::before,
.card:hover::after,
.card:focus::before,
.card:focus::after {
  transform: scale3d(1, 1, 1);
}

.card {
  padding-top: 20px;
  /* Espacio en la parte superior */
  padding-right: 15px;
  /* Espacio en el lado derecho */
  padding-bottom: 20px;
  /* Espacio en la parte inferior */
  padding-left: 15px;
  /* Espacio en el lado izquierdo */
}
</style>
