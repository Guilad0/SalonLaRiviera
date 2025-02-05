<template>
  <div
    class="p-6 shadow-lg hover:scale-105 transition-transform duration-600 text-white border-4 border-slate-700 w-96"
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
</template>

<script setup>
defineProps({
  imageSrc: String,
  title: String,
  price: String,
  description: String,
});
</script>
