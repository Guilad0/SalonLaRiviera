<template>
  <div
    class="font-sans bg-[url(https://res.cloudinary.com/dughcx6qb/image/upload/v1741331030/bglariviera_x530xy.jpg)] bg-cover min-h-screen pb-12"
  >
    <div class="flex items-center justify-center mt-8 mx-5 p-4">
      <h1
        class="text-2xl sm:text-3xl md:text-4xl font-semibold text-center max-w-lg text-white"
      >
        REVISA EL PAQUETE DE TU EVENTO
      </h1>
    </div>

    <div class="max-w-2xl mx-auto px-4 mb-8">
      <p class="text-white text-center text-lg bg-black bg-opacity-50 p-4 rounded-lg">
        Ofrecemos paquetes para todo tipo de eventos con opciones que se adaptan a tus
        necesidades y presupuesto. Selecciona una categoría para ver las opciones
        disponibles.
      </p>
    </div>

    <div class="flex flex-wrap justify-center gap-3 p-4 mb-6">
      <button
        v-for="categoria in categories"
        :key="categoria.value"
        @click="selectedCategory = categoria.value"
        class="button-category"
        :class="{ 'active-category': selectedCategory === categoria.value }"
      >
        {{ categoria.label }}
      </button>
    </div>

    <div class="container mx-auto px-4 mb-6">
      <h2
        class="text-2xl font-bold text-white text-center bg-black bg-opacity-40 py-2 rounded-lg"
      >
        {{ getCategoryLabel(selectedCategory) }}
      </h2>
    </div>

    <div class="container mx-auto px-4">
      <transition-group name="fade" tag="div" class="flex flex-wrap justify-center gap-6">
        <div
          v-for="paquete in filteredPackages"
          :key="paquete.nombre"
          class="w-full sm:w-5/12 md:w-1/3 lg:w-1/4 mb-8"
        >
          <EventCard
            :event="{
              title: paquete.nombre,
              price: paquete.precio + ' por persona',
              image: paquete.image,
              description: paquete.descripcion,
              detailsLink: `/paquetes/${paquete.category}/${paquete.slug}`,
              features: [
                'Salón decorado',
                'Mesas y sillas',
                'Servicio de atención',
                'Coordinación',
              ],
            }"
            class="card-sans-serif h-full"
          />
        </div>
      </transition-group>
    </div>

    <div class="max-w-4xl mx-auto mt-12 px-4">
      <div class="bg-white/25 bg-opacity-90 p-6 rounded-lg shadow-lg text-white">
        <h3 class="text-xl font-bold mb-4 text-center">¿Por qué elegirnos?</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="text-center p-4">
            <div class="text-amber-400 text-4xl mb-2">✓</div>
            <h4 class="font-bold mb-2">Experiencia</h4>
            <p class="text-sm">Más de 10 años organizando eventos inolvidables</p>
          </div>
          <div class="text-center p-4">
            <div class="text-amber-400 text-4xl mb-2">✓</div>
            <h4 class="font-bold mb-2">Personalización</h4>
            <p class="text-sm">Adaptamos cada detalle a tus necesidades específicas</p>
          </div>
          <div class="text-center p-4">
            <div class="text-amber-400 text-4xl mb-2">✓</div>
            <h4 class="font-bold mb-2">Garantía</h4>
            <p class="text-sm">Tu satisfacción es nuestra prioridad en cada evento</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import { usePaquetes } from "@/utils/usePaquetes";

export default {
  components: { EventCard },
  setup() {
    const { categories, selectedCategory, filteredPackages } = usePaquetes();

    const getCategoryLabel = (value) => {
      const category = categories.find((cat) => cat.value === value);
      return category ? category.label : "";
    };

    return {
      categories,
      selectedCategory,
      filteredPackages,
      getCategoryLabel,
    };
  },
};
</script>

<style scoped>
.font-sans {
  font-family: sans-serif;
}

h1,
h2,
h3,
h4 {
  font-family: sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.button-category {
  padding: 10px 20px;
  border-radius: 9999px;
  font-family: sans-serif;
  transition: all 0.3s;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-weight: 500;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.button-category:hover {
  background-color: rgb(251, 191, 36);
  transform: translateY(-2px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
}

.active-category {
  background-color: rgb(251, 191, 36);
  font-weight: bold;
}

.button-category:focus {
  outline: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.card-sans-serif,
.card-sans-serif * {
  font-family: sans-serif !important;
}
</style>
