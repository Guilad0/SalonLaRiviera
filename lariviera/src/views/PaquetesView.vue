<template>
  <div class="font-serif bg-cover">
    <!-- Título principal -->
    <div class="flex items-center justify-center mt-8 mx-5 p-4">
      <h1 class="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-center max-w-lg">
        RESERVA UNA REUNIÓN INICIAL
      </h1>
    </div>

    <div class="flex flex-wrap justify-center gap-3 p-4">
      <button v-for="categoria in categories" :key="categoria.value" @click="selectedCategory = categoria.value" :class="[
        'btn mb-2 mb-md-0 btn-outline-primary px-4 py-2 rounded-pill font-serif transition-all',
        selectedCategory === categoria.value
          ? 'btn-primary text-white scale-105'
          : 'btn-outline-primary'
      ]">
        <span>{{ categoria.label }}</span>
      </button>
    </div>



    <!-- Contenedor de los paquetes con animación -->
    <div class="container mt-2">
      <transition-group name="fade" tag="div" class="row g-4 d-flex justify-content-center">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" v-for="paquete in filteredPackages" :key="paquete.nombre">
          <div class="card card-block">
            <h4 class="card-title text-right">
              <router-link :to="getPaqueteLink(paquete)" class="text-decoration-none">
                <i class="material-icons">Ver Detalles</i>
              </router-link>
            </h4>
            <img :src="paquete.image" alt="Paquete imagen" class="img-fluid" />
            <h5 class="card-title mt-3 mb-3">{{ paquete.nombre }}</h5>
            <h5 class="card-title mt-3 mb-3">Precio: {{ paquete.precio }} por persona</h5>
            <p class="card-text">{{ paquete.descripcion }}</p>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>




<script>
export default {
  data() {
    return {
      paquetes: [
        { nombre: "Paquete Matrimonial Estandar", precio: "Bs 185", descripcion: "Decoración básica...", image: "https://example.com/image1.jpg", category: "matrimonios" },
        { nombre: "Paquete Matrimonial Gold", precio: "Bs 190", descripcion: "Decoración básica...", image: "https://example.com/image1.jpg", category: "matrimonios" },
        { nombre: "Paquete Matrimonial Platinum", precio: "Bs 220", descripcion: "Decoración básica...", image: "https://example.com/image1.jpg", category: "matrimonios" },
        { nombre: "Paquete Quince Años Estandar", precio: "Bs 200", descripcion: "Decoración exclusiva...", image: "https://example.com/image2.jpg", category: "quinceanos" },
        { nombre: "Paquete Quince Años Gold", precio: "Bs 250", descripcion: "Decoración exclusiva...", image: "https://example.com/image2.jpg", category: "quinceanos" },
        { nombre: "Paquete Quince Años Platinum", precio: "Bs 300", descripcion: "Decoración exclusiva...", image: "https://example.com/image2.jpg", category: "quinceanos" },
        { nombre: "Paquete Eventos Privados Estandar", precio: "Bs 300", descripcion: "Decoración exclusiva...", image: "https://example.com/image3.jpg", category: "eventosprivados" },
        { nombre: "Paquete Eventos Privados Gold", precio: "Bs 400", descripcion: "Decoración exclusiva...", image: "https://example.com/image3.jpg", category: "eventosprivados" },
        { nombre: "Paquete Eventos Privados Platinum", precio: "Bs 500", descripcion: "Decoración exclusiva...", image: "https://example.com/image3.jpg", category: "eventosprivados" },
        { nombre: "Paquete Eventos Corporativos", precio: "Bs 500", descripcion: "Decoración exclusiva...", image: "https://example.com/image4.jpg", category: "eventoscorporativos" },
      ],
      selectedCategory: "matrimonios",
      categories: [
        { label: "Matrimonios", value: "matrimonios" },
        { label: "Quince Años", value: "quinceanos" },
        { label: "Eventos Privados", value: "eventosprivados" },
        { label: "Eventos Corporativos", value: "eventoscorporativos" },
      ]
    };
  },
  computed: {
    filteredPackages() {
      return this.paquetes.filter(paquete => paquete.category === this.selectedCategory);
    }
  },
  methods: {
    getPaqueteLink(paquete) {
      const rutas = {
        matrimonios: {
          "Paquete Matrimonial Estandar": `/boda-estandar/${paquete.nombre.replace(/\s+/g, '-').toLowerCase()}`,
          "Paquete Matrimonial Gold": `/bodagold/${paquete.nombre.replace(/\s+/g, '-').toLowerCase()}`,
          "Paquete Matrimonial Platinum": `/bodaplatinum/${paquete.nombre.replace(/\s+/g, '-').toLowerCase()}`,
        },
        quinceanos: {
          "Paquete Quince Años Estandar": `/quince-estandar/${paquete.nombre.replace(/\s+/g, '-').toLowerCase()}`,
          "Paquete Quince Años Gold": `/quinceGold/${paquete.nombre.replace(/\s+/g, '-').toLowerCase()}`,
          "Paquete Quince Años Platinum": `/quincePlatinum/${paquete.nombre.replace(/\s+/g, '-').toLowerCase()}`
        },
        eventosprivados: {
          "Paquete Eventos Privados Estandar": `/evento-privado-estandar/${paquete.nombre.replace(/\s+/g, '-').toLowerCase()}`,
          "Paquete Eventos Privados Gold": `/evento-privado-gold/${paquete.nombre.replace(/\s+/g, '-').toLowerCase()}`,
          "Paquete Eventos Privados Platinum": `/evento-privado-platinum/${paquete.nombre.replace(/\s+/g, '-').toLowerCase()}`
        },
        eventoscorporativos: {
          "Paquete Eventos Corporativos": `/otros/${paquete.nombre.replace(/\s+/g, '-').toLowerCase()}`
        }
      };
      return rutas[paquete.category]?.[paquete.nombre] || "#";
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
  padding-right: 15px;
  padding-bottom: 20px;
  padding-left: 15px;
}

/* Animación Fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.card {
  width: 100%;
  max-width: 320px;
  /* Permite mejor adaptación */
  margin: auto;
  /* Centra las tarjetas */
}
</style>
