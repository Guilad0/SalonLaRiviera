<script setup>
import ChatBot from "@/components/ChatBot.vue";
import Carrusel from "@/components/Carrusel.vue";
import CardPaquetes from "@/components/CardPaquetes.vue";
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="relative w-full h-screen flex items-center justify-center">
      <img
        src="https://res.cloudinary.com/dughcx6qb/image/upload/v1738349297/EPPlatinum_rajo51.jpg"
        alt="home"
        class="absolute inset-0 w-full h-full object-cover opacity-90 bg-black"
      />

      <p
        class="absolute text-6xl font-extrabold text-neutral-300 font-serif texts text-center bg-opacity-80 w-96 right-40 border-4 border-slate-200"
      >
        SALÓN DE EVENTOS LA RIVIERA
      </p>
      <img
        src="https://res.cloudinary.com/dughcx6qb/image/upload/v1738605755/IMG-20180802-WA0002_nxqo8w.jpg"
        alt=""
        class="h-96 mr-2 absolute left-10 rounded-full border-4 border-slate-900"
      />
    </div>

    <div
      class="relative flex flex-col items-center w-full min-h-screen p-10 bg-[url('https://res.cloudinary.com/dughcx6qb/image/upload/v1738768263/textura_LE_upscale_balanced_x4v2_fekn3r.jpg')] bg-cover"
    >
      <div class="relative w-full max-w-4xl mb-10">
        <p
          class="text-4xl font-bold font-serif flex justify-center mb-4 bg-neutral-200 border-2 border-neutral-400 text-neutral-500"
        >
          PAQUETES
        </p>
        <CardPaquetes />
      </div>

      <div class="relative w-full max-w-4xl">
        <Carrusel class="w-full shadow-lg rounded-none" />
      </div>

      <div class="relative w-full max-w-4xl mt-10">
        <ChatBot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.texts {
  text-shadow: 2px 10px 4px rgba(0, 0, 0, 0.5);
}
</style>
