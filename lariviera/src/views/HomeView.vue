<script setup>
import ChatBot from "@/components/ChatBot.vue";
import Carrusel from "@/components/Carrusel.vue";
import CardPaquetes from "@/components/CardPaquetes.vue";
import CardEventos from "@/components/CardEventos.vue";
import CardConferencias from "@/components/CardConferencias.vue";
import WhatsAppComponent from "@/components/WhatsAppComponent.vue";
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="relative w-full h-screen flex items-center justify-center">
      <img
        src="https://res.cloudinary.com/dughcx6qb/image/upload/v1738349297/EPPlatinum_rajo51.jpg"
        alt="home"
        class="absolute inset-0 w-full h-full object-cover opacity-90 bg-black"
      />

      <img
        src="https://res.cloudinary.com/dughcx6qb/image/upload/v1738605755/IMG-20180802-WA0002_nxqo8w.jpg"
        alt="logo"
        class="h-24 absolute left-4 top-4 rounded-full border-4 border-slate-900 shadow-lg"
      />
    </div>

    <div class="relative flex flex-col items-center w-full min-h-screen p-10 bg-gray-100">
      <section class="relative w-full max-w-4xl mb-10 text-center">
        <h2
          class="text-4xl font-bold bg-neutral-200 border-2 border-stone-800 text-stone-800 p-2 rounded-lg shadow"
          style="font-family: 'Comfortaa', sans-serif;"
        >
          PAQUETES
        </h2>
        <CardPaquetes />
      </section>

      <section class="relative w-full max-w-4xl">
        <Carrusel class="w-full shadow-lg rounded-lg" />
      </section>

      <section class="relative w-full max-w-4xl mt-10 text-center">
        <h2
          class="text-4xl font-bold bg-neutral-200 border-2 border-neutral-400 text-neutral-500 p-2 rounded-lg shadow"
          style="font-family: 'Comfortaa', sans-serif;"
        >
          CONCIERTOS
        </h2>
        <CardEventos class="flex m-4 max-w-4xl" />
      </section>

      <section class="relative w-full max-w-4xl mt-10 text-center">
        <h2
          class="text-4xl font-bold bg-neutral-200 border-2 border-neutral-400 text-neutral-500 p-2 rounded-lg shadow"
          style="font-family: 'Comfortaa', sans-serif;"
        >
          CONFERENCIAS
        </h2>
        <CardConferencias />
      </section>

      <div class="m-4 flex flex-col items-center space-y-4">
        <ChatBot />
        <WhatsAppComponent />
      </div>
    </div>
  </div>
</template>

<style scoped>
.texts {
  text-shadow: 2px 10px 4px rgba(0, 0, 0, 0.5);
}
</style>
