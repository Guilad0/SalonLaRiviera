<template>
  <div class="container mx-auto py-12 px-6">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="(paquete, index) in paquetes"
        :key="index"
        class="bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 border border-gray-300"
      >
        <img :src="paquete.img" :alt="paquete.titulo" class="w-full h-56 object-cover" />
        <div class="p-6">
          <h3 class="text-2xl font-semibold text-gray-800 border-b pb-2 border-gray-300">
            {{ paquete.titulo }}
          </h3>
          <p class="text-gray-600 text-lg mt-2 font-serif">{{ paquete.precio }}</p>
          <p class="text-gray-700 mt-3 font-serif">{{ paquete.descripcion }}</p>
          <router-link
            to="/paquetes"
            class="inline-block mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-neutral-400 transition"
          >
            Ver a Detalle...
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const paquetes = [
  {
    titulo: "15 años",
    precio: "190 Bs por persona",
    descripcion:
      "Querida quinceañera y familia, es un honor para nosotros ser parte de este momento tan especial en sus vidas.",
    img: "@/assets/img/EpEstandar.jpeg",
  },
  {
    titulo: "Matrimonios",
    precio: "190 Bs por persona",
    descripcion:
      "Estimados novios, es un placer para nosotros ser parte de este momento tan especial en sus vidas.",
    img:
      "https://res.cloudinary.com/dughcx6qb/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1738349302/BodaEstandar_my9r6v.jpg",
  },
  {
    titulo: "Varios",
    precio: "190 Bs por persona",
    descripcion:
      "Estimados anfitriones y familia, es un honor para nosotros ser parte de este momento tan especial en sus vidas.",
    img: "@/assets/img/EPPlatinum.jpeg",
  },
];
</script>

<style>
.container {
  max-width: 1200px;
}
</style>
