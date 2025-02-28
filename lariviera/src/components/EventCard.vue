<template>
  <div class="event-card group">
    <div class="relative overflow-hidden rounded-t-lg h-48">
      <img
        :src="event.image"
        :alt="event.title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div class="absolute bottom-4 left-4 right-4">
        <h3 class="text-2xl font-serif font-bold text-white">{{ event.title }}</h3>
      </div>
    </div>

    <div class="p-6 bg-white border-x border-b border-stone-200 rounded-b-lg">
      <div class="flex justify-between items-center mb-4">
        <span
          class="px-4 py-2 bg-stone-100 text-stone-800 font-serif rounded-full font-medium"
        >
          {{ event.price }}
        </span>
        <div
          class="h-8 w-8 flex items-center justify-center bg-stone-900 text-white rounded-full hover:bg-amber-500"
        >
          <router-link to="/paquetes">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8h.01M12 12v4"
              />
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
              />
            </svg>
          </router-link>
        </div>
      </div>

      <p class="text-stone-600 font-serif mb-4">{{ event.description }}</p>

      <router-link
        :to="event.detailsLink"
        class="inline-block py-2 px-4 bg-stone-800 text-white font-medium rounded transition hover:bg-amber-500 text-decoration-none"
      >
        Ver a Detalle
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  event: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.event-card {
  transform: translateY(0);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.event-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
