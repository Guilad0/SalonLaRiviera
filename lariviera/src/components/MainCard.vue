<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div
      class="p-6 shadow-lg hover:scale-105 transition-transform duration-600 text-white border-4 border-neutral-400 w-96 flex flex-col"
    >
      <img :src="imageSrc" alt="" class="h-48 w-full" />
      <h3 class="text-xl font-serif font-bold text-gray-600 mt-2 bg-neutral-200">
        {{ title }}
      </h3>
      <p class="text-gray-600 font-serif bg-neutral-100">
        {{ price }}
      </p>
      <p class="text-gray-600 font-serif bg-neutral-100">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imageSrc: String,
  title: String,
  price: String,
  description: String,
});
</script>
