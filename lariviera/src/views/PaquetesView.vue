<template>
  <div class="flex items-center justify-center mt-8">
    <h1 class="text-4xl md:text-4xl font-bold text-center">
      RESERVA UNA REUNIÓN INICIAL
    </h1>
  </div>

  <div>
    <!-- Botones para seleccionar las categorías -->
    <div class="flex space-x-4 mb-4 items-center justify-center">
      <button
        v-for="categoria in categories"
        :key="categoria.value"
        @click="selectedCategory = categoria.value"
        :class="['px-4 py-2 rounded-lg', selectedCategory === categoria.value ? 'bg-blue-500 text-white' : 'bg-gray-300']"
      >
        {{ categoria.label }}
      </button>
    </div>

    <!-- Contenido dinámico basado en la categoría seleccionada -->
    <div v-if="selectedCategory === 'matrimonios'">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="paquete in filteredPackages('matrimonios')"
          :key="paquete.id"
          class="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <img :src="paquete.image" alt="Imagen del paquete" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="text-lg font-bold mb-2">{{ paquete.title }}</h3>
            <p class="text-gray-600">{{ paquete.description }}</p>
            <p class="mt-4 text-blue-500 font-semibold">Precio: {{ paquete.price }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="selectedCategory === 'quinceanos'">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="paquete in filteredPackages('quinceanos')"
          :key="paquete.id"
          class="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <img :src="paquete.image" alt="Imagen del paquete" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="text-lg font-bold mb-2">{{ paquete.title }}</h3>
            <p class="text-gray-600">{{ paquete.description }}</p>
            <p class="mt-4 text-blue-500 font-semibold">Precio: {{ paquete.price }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="selectedCategory === 'eventosprivados'">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="paquete in filteredPackages('eventosprivados')"
          :key="paquete.id"
          class="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <img :src="paquete.image" alt="Imagen del paquete" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="text-lg font-bold mb-2">{{ paquete.title }}</h3>
            <p class="text-gray-600">{{ paquete.description }}</p>
            <p class="mt-4 text-blue-500 font-semibold">Precio: {{ paquete.price }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="selectedCategory === 'otros'">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="paquete in filteredPackages('otros')"
          :key="paquete.id"
          class="bg-white rounded-lg shadow-lg overflow-hidden"
        >
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
          description: 'Incluye decoración, catering y música básica.',
          price: 'Bs 185 por persona',
          image: '@/assets/img/bodaEstandar.jpg',
        },
        {
          id: 2,
          category: 'matrimonios',
          title: 'Paquete Matrimonial Gold',
          description: 'Incluye decoración personalizada, catering gourmet y DJ profesional.',
          price: 'Bs 190 por persona',
          image: '@/assets/img/boda2.jpg',
        },
        {
          id: 3,
          category: 'quinceanos',
          title: 'Paquete Quinceañera Estandar',
          description: 'Incluye decoración y salón con pista de baile.',
          price: 'Bs 150 por persona',
          image: '@/assets/img/quince1.jpg',
        },
        {
          id: 4,
          category: 'quinceanos',
          title: 'Paquete Quinceañera Gold',
          description: 'Decoración personalizada y menú especial.',
          price: 'Bs 170 por persona',
          image: '@/assets/img/quince2.jpg',
        },
        {
          id: 5,
          category: 'eventosprivados',
          title: 'Paquete Estandar',
          description: 'Decoración temática y juegos interactivos.',
          price: 'Bs 160 por persona',
          image: '@/assets/img/cumple1.jpg',
        },
        {
          id: 6,
          category: 'otros',
          title: 'Paquete Personalizado',
          description: 'Paquete personalizado para cualquier tipo de evento.',
          price: '$1000',
          image: '@/assets/img/otros1.jpg',
        },
        {
          id: 7,
          category: 'matrimonios',
          title: 'Paquete Matrimonial Gold',
          description: 'Incluye decoración personalizada, catering gourmet y DJ profesional.',
          price: 'Bs 220 por persona',
          image: '@/assets/img/boda2.jpg',
        },
        {
          id: 8,
          category: 'quinceanos',
          title: 'Paquete Quinceañera Platinum',
          description: 'Decoración personalizada y menú especial.',
          price: 'Bs 190 por persona',
          image: '@/assets/img/quince2.jpg',
        },
        
        {
          id: 9,
          category: 'eventosprivados',
          title: 'Paquete Gold',
          description: 'Decoración temática y juegos interactivos.',
          price: 'Bs 180 por persona',
          image: '@/assets/img/cumple1.jpg',
        },
        {
          id: 10,
          category: 'eventosprivados',
          title: 'Paquete Platinum',
          description: 'Decoración temática y juegos interactivos.',
          price: 'Bs 210 por persona',
          image: '@/assets/img/cumple1.jpg',
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
