<template>
  <div
    class="font-serif bg-[url('https://res.cloudinary.com/dughcx6qb/image/upload/v1738768263/textura_LE_upscale_balanced_x4v2_fekn3r.jpg')] bg-cover"
  >
    <div class="flex items-center justify-center mt-8 m-5 p-2.5">
      <h1 class="text-4xl md:text-4xl font-serif text-center">
        RESERVA UNA REUNIÓN INICIAL
      </h1>
    </div>

    <div>
      <div
        class="flex space-x-4 mb-4 items-center justify-center border-1 border-neutral-400 bg-neutral-200"
      >
        <button
          v-for="categoria in categories"
          :key="categoria.value"
          @click="selectedCategory = categoria.value"
          :class="[
            'px-4 py-2  rounded-none font-serif ',
            selectedCategory === categoria.value
              ? 'bg-slate-700 text-white'
              : 'bg-gray-300',
          ]"
        >
          {{ categoria.label }}
        </button>
      </div>

      <div v-if="selectedCategory === 'matrimonios'">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 m-5 p-2.5">
          <div
            v-for="paquete in filteredPackages('matrimonios')"
            :key="paquete.id"
            class="bg-white shadow-lg overflow-hidden border-4 border-neutral-400"
          >
            <img
              :src="paquete.image"
              alt="Imagen del paquete"
              class="w-full h-48 object-cover border-2 border-neutral-400 flex"
            />
            <div class="p-4">
              <h3 class="text-lg font-bold mb-2 bg-neutral-200">{{ paquete.title }}</h3>
              <p class="mt-4 text-gray-600 font-semibold bg-neutral-100">
                Precio: {{ paquete.price }}
              </p>
              <p class="text-gray-600 bg-neutral-100">{{ paquete.description }}</p>

              <router-link
                v-if="
                  paquete.category === 'matrimonios' &&
                  paquete.title === 'Paquete Matrimonial Estandar'
                "
                :to="{ name: 'bodaEstandar', params: { id: paquete.id } }"
                class="inline-block mt-4 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-700"
                @click="scrollToTop"
              >
                Ver detalles
              </router-link>

              <!-- Botón para navegar a la vista bodaGold -->
              <router-link
                v-if="
                  paquete.category === 'matrimonios' &&
                  paquete.title === 'Paquete Matrimonial Gold'
                "
                :to="{ name: 'bodaGold', params: { id: paquete.id } }"
                class="inline-block mt-4 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-700"
                @click="scrollToTop"
              >
                Ver detalles
              </router-link>

              <!-- Botón para navegar a la vista bodaPlatinum -->
              <router-link
                v-if="
                  paquete.category === 'matrimonios' &&
                  paquete.title === 'Paquete Matrimonial Platinum'
                "
                :to="{ name: 'bodaPlatinum', params: { id: paquete.id } }"
                class="inline-block mt-4 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-700"
                @click="scrollToTop"
              >
                Ver detalles
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Contenido dinámico basado en la categoría seleccionada QUINCE AÑOS -->
      <div v-if="selectedCategory === 'quinceanos'">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="paquete in filteredPackages('quinceanos')"
            :key="paquete.id"
            class="bg-white rounded-lg shadow-lg overflow-hidden border-4 border-neutral-400 mb-4"
          >
            <img
              :src="paquete.image"
              alt="Imagen del paquete"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h3 class="text-lg font-bold bg-neutral-200">{{ paquete.title }}</h3>
              <p class="mt-4 text-gray-600 font-semibold bg-neutral-100">
                Precio: {{ paquete.price }}
              </p>
              <p class="text-gray-600 bg-neutral-100">{{ paquete.description }}</p>

              <!-- Botón para navegar a la vista quinceEstandar -->
              <router-link
                v-if="
                  paquete.category === 'quinceanos' &&
                  paquete.title === 'Paquete Quinceañera Estandar'
                "
                :to="{ name: 'quinceEstandar', params: { id: paquete.id } }"
                class="inline-block mt-4 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-700"
                @click="scrollToTop"
              >
                Ver detalles
              </router-link>

              <!-- Botón para navegar a la vista quinceGold -->
              <router-link
                v-if="
                  paquete.category === 'quinceanos' &&
                  paquete.title === 'Paquete Quinceañera Gold'
                "
                :to="{ name: 'quinceGold', params: { id: paquete.id } }"
                class="inline-block mt-4 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-700"
                @click="scrollToTop"
              >
                Ver detalles
              </router-link>

              <!-- Botón para navegar a la vista quincePlatinum -->
              <router-link
                v-if="
                  paquete.category === 'quinceanos' &&
                  paquete.title === 'Paquete Quinceañera Platinum'
                "
                :to="{ name: 'quincePlatinum', params: { id: paquete.id } }"
                class="inline-block mt-4 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-700"
                @click="scrollToTop"
              >
                Ver detalles
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Contenido dinámico basado en la categoría seleccionada EVENTOS PRIVADOS -->

      <div v-if="selectedCategory === 'eventosprivados'">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="paquete in filteredPackages('eventosprivados')"
            :key="paquete.id"
            class="bg-white rounded-lg shadow-lg overflow-hidden border-4 border-neutral-400 mb-4"
          >
            <img
              :src="paquete.image"
              alt="Imagen del paquete"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h3 class="text-lg font-bold mb-2 bg-neutral-200">{{ paquete.title }}</h3>
              <p class="mt-4 text-gray-600 font-semibold bg-neutral-100">
                Precio: {{ paquete.price }}
              </p>
              <p class="text-gray-600 bg-neutral-100">{{ paquete.description }}</p>
              <!-- Botón para navegar a la vista EventoPrivadoEstandarView -->
              <router-link
                v-if="
                  paquete.category === 'eventosprivados' &&
                  paquete.title === 'Paquete Estandar'
                "
                :to="{ name: 'EventoPrivadoEstandarView', params: { id: paquete.id } }"
                class="inline-block mt-4 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-700"
                @click="scrollToTop"
              >
                Ver detalles
              </router-link>

              <!-- Botón para navegar a la vista EventoPrivadoGoldView -->
              <router-link
                v-if="
                  paquete.category === 'eventosprivados' &&
                  paquete.title === 'Paquete Gold'
                "
                :to="{ name: 'EventoPrivadoGoldView', params: { id: paquete.id } }"
                class="inline-block mt-4 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-700"
                @click="scrollToTop"
              >
                Ver detalles
              </router-link>

              <!-- Botón para navegar a la vista EventoPrivadoPlatinumView -->
              <router-link
                v-if="
                  paquete.category === 'eventosprivados' &&
                  paquete.title === 'Paquete Platinum'
                "
                :to="{ name: 'EventoPrivadoPlatinumView', params: { id: paquete.id } }"
                class="inline-block mt-4 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-700"
                @click="scrollToTop"
              >
                Ver detalles
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Contenido dinámico basado en la categoría seleccionada OTROS -->

      <div v-if="selectedCategory === 'otros'">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-auto px-4 mb-4">
          <div
            v-for="paquete in filteredPackages('otros')"
            :key="paquete.id"
            class="bg-white rounded-lg shadow-lg overflow-hidden border-4 border-neutral-400"
          >
            <img
              :src="paquete.image"
              alt="Imagen del paquete"
              class="w-full h-48 object-cover"
            />
            <div class="p-4 flex justify-center flex-col">
              <h3 class="text-lg font-bold bg-neutral-200">{{ paquete.title }}</h3>
              <p class="mt-4 text-gray-600 font-semibold bg-neutral-100">
                Precio: {{ paquete.price }}
              </p>
              <p class="text-gray-600 bg-neutral-100">{{ paquete.description }}</p>

              <!-- Botón para navegar a la vista OtrosView -->
              <router-link
                v-if="
                  paquete.category === 'otros' && paquete.title === 'Eventos de Empresa'
                "
                :to="{ name: 'OtrosView', params: { id: paquete.id } }"
                class="inline-block mt-4 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-700"
                @click="scrollToTop"
              >
                Ver detalles
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="grid grid-cols-1 md:grid-cols-3 gap-6 px-1">
      <MainCard
        image-src=""
        title="ASDDDD"
        price="1022"
        description="asdasdasdasdsadsa"
        class=""
      />
      <MainCard
        image-src=""
        title="ASDDDD"
        price="1022"
        description="asdasdasdasdsadsa"
      />
      <MainCard
        image-src=""
        title="ASDDDD"
        price="1022"
        description="asdasdasdasdsadsa"
      />
    </div> -->
  </div>
</template>

<script>
import MainCard from "../components/MainCard.vue";
export default {
  components: { MainCard },
  data() {
    return {
      selectedCategory: "matrimonios",

      categories: [
        { label: "Matrimonios", value: "matrimonios" },
        { label: "Quince Años", value: "quinceanos" },
        { label: "Eventos Privados", value: "eventosprivados" },
        { label: "Eventos de Empresa", value: "otros" },
      ],

      paquetes: [
        {
          id: 1,
          category: "matrimonios",
          title: "Paquete Matrimonial Estandar",
          description:
            "Incluye decoración básica, catering gourmet y DJ profesional o música a elección. Una opción ideal para una boda sencilla pero especial.",
          price: "Bs 185 por persona",
          image: "src/assets/img/BodaEstandar.jpeg",
        },
        {
          id: 2,
          category: "matrimonios",
          title: "Paquete Matrimonial Gold",
          description:
            "Ofrece decoración personalizada, un menú gourmet exclusivo y DJ profesional. Perfecto para quienes buscan un evento elegante.",
          price: "Bs 190 por persona",
          image: "src/assets/img/BodaGold.jpeg",
        },
        {
          id: 3,
          category: "quinceanos",
          title: "Paquete Quinceañera Estandar",
          description:
            "Incluye decoración clásica, salón con pista de baile y un menú especial. Una opción ideal para una celebración inolvidable.",
          price: "Bs 150 por persona",
          image: "src/assets/img/15Estandar.jpeg",
        },
        {
          id: 4,
          category: "quinceanos",
          title: "Paquete Quinceañera Gold",
          description:
            "Ofrece decoración personalizada, menú gourmet y efectos especiales. Perfecto para una fiesta mágica y elegante.",
          price: "Bs 170 por persona",
          image: "src/assets/img/15Gold.jpeg",
        },
        {
          id: 5,
          category: "eventosprivados",
          title: "Paquete Estandar",
          description: "Decoración temática y juegos interactivos.",
          price: "Bs 160 por persona",
          image: "src/assets/img/EPEstandar.jpeg",
        },
        {
          id: 6,
          category: "otros",
          title: "Eventos de Empresa", // Aquí debe coincidir con el router-link
          description: "Paquete personalizado para cualquier tipo de evento.",
          price: "$1000",
          image: "src/assets/img/EventoEmpresa.jpeg",
        },

        {
          id: 7,
          category: "matrimonios",
          title: "Paquete Matrimonial Platinum",
          description:
            "Brinda una decoración de lujo, catering gourmet de alto nivel y DJ profesional. La mejor opción para una boda inolvidable y sofisticada.",
          price: "Bs 220 por persona",
          image: "src/assets/img/BodaPlatinum.jpeg",
        },
        {
          id: 8,
          category: "quinceanos",
          title: "Paquete Quinceañera Platinum",
          description:
            "Presenta una decoración exclusiva, catering premium y show en vivo. La mejor elección para un evento único y lujoso.",
          price: "Bs 190 por persona",
          image: "src/assets/img/15Platinum.jpeg",
        },
        {
          id: 9,
          category: "eventosprivados",
          title: "Paquete Gold",
          description: "Decoración temática y juegos interactivos.",
          price: "Bs 180 por persona",
          image: "src/assets/img/EPGold.jpeg",
        },
        {
          id: 10,
          category: "eventosprivados",
          title: "Paquete Platinum",
          description: "Decoración temática y juegos interactivos.",
          price: "Bs 210 por persona",
          image: "src/assets/img/EPPlatinum.jpeg",
        },
      ],
    };
  },
  methods: {
    // Filtrar los paquetes según la categoría seleccionada
    filteredPackages(categoria) {
      return this.paquetes.filter((paquete) => paquete.category === categoria);
    },

    // Función para mover el scroll hacia el principio de la página
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  }, // <-- Asegúrate de que no haya coma aquí
};
</script>

<style>
button {
  transition: background-color 0.3s, color 0.3s;
}
</style>
