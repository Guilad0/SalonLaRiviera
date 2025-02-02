<template>
  <div class="flex items-center justify-center mt-8">
    <h1 class="text-4xl md:text-4xl font-bold text-center">
      RESERVA UNA REUNIÓN INICIAL
    </h1>
  </div>

  <div>
    <!-- Botones para seleccionar las categorías -->
    <div class="flex space-x-4 mb-4 items-center justify-center">
      <button v-for="categoria in categories" :key="categoria.value" @click="selectedCategory = categoria.value"
        :class="['px-4 py-2 rounded-lg', selectedCategory === categoria.value ? 'bg-blue-500 text-white' : 'bg-gray-300']">
        {{ categoria.label }}
      </button>
    </div>

    <!-- Contenido dinámico basado en la categoría seleccionada MATRIMONIOS -->
    <div v-if="selectedCategory === 'matrimonios'">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="paquete in filteredPackages('matrimonios')" :key="paquete.id"
          class="bg-white rounded-lg shadow-lg overflow-hidden">
          <img :src="paquete.image" alt="Imagen del paquete" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="text-lg font-bold mb-2">{{ paquete.title }}</h3>
            <p class="text-gray-600">{{ paquete.description }}</p>
            <p class="mt-4 text-blue-500 font-semibold">Precio: {{ paquete.price }}</p>

            <!-- Botón para navegar a la vista bodaEstandar -->
            <router-link v-if="paquete.category === 'matrimonios' && paquete.title === 'Paquete Matrimonial Estandar'"
              :to="{ name: 'bodaEstandar', params: { id: paquete.id } }"
              class="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Ver detalles
            </router-link>

            <!-- Botón para navegar a la vista bodaGold -->
            <router-link v-if="paquete.category === 'matrimonios' && paquete.title === 'Paquete Matrimonial Gold'"
              :to="{ name: 'bodaGold', params: { id: paquete.id } }"
              class="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Ver detalles
            </router-link>

            <!-- Botón para navegar a la vista bodaPlatinum -->
            <router-link v-if="paquete.category === 'matrimonios' && paquete.title === 'Paquete Matrimonial Platinum'"
              :to="{ name: 'bodaPlatinum', params: { id: paquete.id } }"
              class="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Ver detalles
            </router-link>
          </div>
        </div>
      </div>
    </div>


    <!-- Contenido dinámico basado en la categoría seleccionada QUINCE AÑOS -->
    <div v-if="selectedCategory === 'quinceanos'">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="paquete in filteredPackages('quinceanos')" :key="paquete.id"
          class="bg-white rounded-lg shadow-lg overflow-hidden">
          <img :src="paquete.image" alt="Imagen del paquete" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="text-lg font-bold mb-2">{{ paquete.title }}</h3>
            <p class="text-gray-600">{{ paquete.description }}</p>
            <p class="mt-4 text-blue-500 font-semibold">Precio: {{ paquete.price }}</p>

            <!-- Botón para navegar a la vista quinceEstandar -->
            <router-link v-if="paquete.category === 'quinceanos' && paquete.title === 'Paquete Quinceañera Estandar'"
              :to="{ name: 'quinceEstandar', params: { id: paquete.id } }"
              class="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Ver detalles
            </router-link>

            <!-- Botón para navegar a la vista quinceGold -->
            <router-link v-if="paquete.category === 'quinceanos' && paquete.title === 'Paquete Quinceañera Gold'"
              :to="{ name: 'quinceGold', params: { id: paquete.id } }"
              class="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Ver detalles
            </router-link>

            <!-- Botón para navegar a la vista quincePlatinum -->
            <router-link v-if="paquete.category === 'quinceanos' && paquete.title === 'Paquete Quinceañera Platinum'"
              :to="{ name: 'quincePlatinum', params: { id: paquete.id } }"
              class="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Ver detalles
            </router-link>
          </div>
        </div>
      </div>
    </div>


    <!-- Contenido dinámico basado en la categoría seleccionada EVENTOS PRIVADOS -->

    <div v-if="selectedCategory === 'eventosprivados'">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="paquete in filteredPackages('eventosprivados')" :key="paquete.id"
          class="bg-white rounded-lg shadow-lg overflow-hidden">
          <img :src="paquete.image" alt="Imagen del paquete" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="text-lg font-bold mb-2">{{ paquete.title }}</h3>
            <p class="text-gray-600">{{ paquete.description }}</p>
            <p class="mt-4 text-blue-500 font-semibold">Precio: {{ paquete.price }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Contenido dinámico basado en la categoría seleccionada OTROS -->

    <div v-if="selectedCategory === 'otros'">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="paquete in filteredPackages('otros')" :key="paquete.id"
          class="bg-white rounded-lg shadow-lg overflow-hidden">
          <img :src="paquete.image" alt="Imagen del paquete" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="text-lg font-bold mb-2">{{ paquete.title }}</h3>
            <p class="text-gray-600">{{ paquete.description }}</p>
            <p class="mt-4 text-blue-500 font-semibold">Precio: {{ paquete.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: 'matrimonios',


      categories: [
        { label: 'Matrimonios', value: 'matrimonios' },
        { label: 'Quince Años', value: 'quinceanos' },
        { label: 'Eventos Privados', value: 'eventosprivados' },
        { label: 'Eventos de Empresa', value: 'otros' },
      ],

      paquetes: [
        {
          id: 1,
          category: 'matrimonios',
          title: 'Paquete Matrimonial Estandar',
          description: 'Incluye decoración, catering gourmet y DJ profesional o musica a elección.',
          price: 'Bs 185 por persona',
          image: 'src/assets/img/BodaEstandar.jpeg',
        },
        {
          id: 2,
          category: 'matrimonios',
          title: 'Paquete Matrimonial Gold',
          description: 'Incluye decoración personalizada, catering gourmet y DJ profesional.',
          price: 'Bs 190 por persona',
          image: 'src/assets/img/BodaGold.jpeg',
        },
        {
          id: 3,
          category: 'quinceanos',
          title: 'Paquete Quinceañera Estandar',
          description: 'Incluye decoración y salón con pista de baile.',
          price: 'Bs 150 por persona',
          image: 'src/assets/img/15Estandar.jpeg',
        },
        {
          id: 4,
          category: 'quinceanos',
          title: 'Paquete Quinceañera Gold',
          description: 'Decoración personalizada y menú especial.',
          price: 'Bs 170 por persona',
          image: 'src/assets/img/15Gold.jpeg',
        },
        {
          id: 5,
          category: 'eventosprivados',
          title: 'Paquete Estandar',
          description: 'Decoración temática y juegos interactivos.',
          price: 'Bs 160 por persona',
          image: 'src/assets/img/EPEstandar.jpeg',
        },
        {
          id: 6,
          category: 'otros',
          title: 'Paquete Personalizado',
          description: 'Paquete personalizado para cualquier tipo de evento.',
          price: '$1000',
          image: 'src/assets/img/EventoEmpresa.jpeg',
        },
        {
          id: 7,
          category: 'matrimonios',
          title: 'Paquete Matrimonial Platinum',
          description: 'Incluye decoración personalizada, catering gourmet y DJ profesional.',
          price: 'Bs 220 por persona',
          image: 'src/assets/img/BodaPlatinum.jpeg',
        },
        {
          id: 8,
          category: 'quinceanos',
          title: 'Paquete Quinceañera Platinum',
          description: 'Decoración personalizada y menú especial.',
          price: 'Bs 190 por persona',
          image: 'src/assets/img/15Platinum.jpeg',
        },

        {
          id: 9,
          category: 'eventosprivados',
          title: 'Paquete Gold',
          description: 'Decoración temática y juegos interactivos.',
          price: 'Bs 180 por persona',
          image: 'src/assets/img/EPGold.jpeg',
        },
        {
          id: 10,
          category: 'eventosprivados',
          title: 'Paquete Platinum',
          description: 'Decoración temática y juegos interactivos.',
          price: 'Bs 210 por persona',
          image: 'src/assets/img/EPPlatinum.jpeg',
        },
      ],
    };
  },
  methods: {
    // Filtrar los paquetes según la categoría seleccionada
    filteredPackages(categoria) {
      return this.paquetes.filter(paquete => paquete.category === categoria);
    },
  },
};
</script>

<style>
button {
  transition: background-color 0.3s, color 0.3s;
}
</style>
