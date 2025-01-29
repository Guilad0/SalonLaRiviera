<template>
  <nav class="bg-white-900 text-white p-4 flex justify-between items-center">
    <div class="flex items-center">
      <img src="@/assets/img/EPgold.jpeg" alt="Logo" class="h-10 mr-2" />
      <router-link to="/" class="text-lg font-bold text-black"
        >Salon de Eventos La Riviera</router-link
      >
    </div>
    <ul class="hidden md:flex space-x-6 text-black">
      <li><router-link to="/" class="hover:text-sky-700">Inicio</router-link></li>
      <li>
        <router-link to="/Ofertas" class="hover:text-sky-700">Eventos</router-link>
      </li>

      <li>
        <router-link to="/Servicios" class="hover:text-sky-700">Servicios</router-link>
      </li>
      <li>
        <router-link to="/paquetes" class="hover:text-sky-700">Paquetes</router-link>
      </li>
    </ul>
    <button class="bg-sky-700 hover:bg-gray-700 px-4 py-2 rounded text-white">
      Reservar
    </button>
  </nav>
</template>

<script setup>
import { AcademicCapIcon, HomeIcon } from "@heroicons/vue/outline";
</script>

<style></style>
