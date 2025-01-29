<script setup>
import ChatBot from "@/components/ChatBot.vue";
</script>

<template>
  <div class="relative w-full h-screen">
    <div class="absolute inset-0">
      <img src="@/assets/img/BAUTIZO.jpeg" alt="Hotel" class="w-full h-full opacity-80" />
    </div>
    <div class="absolute left-0 right-0 p-8">
      <p class="text-3xl font-bold mb-8 justify-center flex text-gray">
        Nuestros Servicios
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <img src="@/assets/img/EpEstandar.jpeg" alt="" class="h-48 w-full" />
          <h3 class="text-xl font-bold">15 años</h3>
          <p class="text-gray-600">190 Bs por persona</p>
          <p>
            El paquete Gold incluye: Decoracion personalizada, catering gourmet y DJ
            profesional
          </p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <img src="@/assets/img/EPGold.jpeg" alt="" class="h-48 w-full" />
          <h3 class="text-xl font-bold">Matrimonios</h3>
          <p class="text-gray-600">
            Disfruta de una deliciosa gastronomía en nuestro restaurante.
          </p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <img src="@/assets/img/EPPlatinum.jpeg" alt="" class="h-48 w-full" />
          <h3 class="text-xl font-bold">Varios</h3>
          <p class="text-gray-600">
            Relájate y renueva energías en nuestro exclusivo spa.
          </p>
        </div>
      </div>
    </div>
    <ChatBot />
  </div>
</template>
<style></style>
