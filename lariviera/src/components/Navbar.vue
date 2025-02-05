<template>
  <nav
    class="bg-neutral-300 text-white p-4 flex justify-between items-center font-serif text-lg opacity-90 h-16"
  >
    <div class="flex items-center">
      <img src="@/assets/img/EPgold.jpeg" alt="Logo" class="h-10 mr-2" />
      <router-link
        to="/"
        class="text-2xl font-bold font-serif text-black hover:text-gray-400"
        >Salon de Eventos La Riviera</router-link
      >
    </div>
    <ul class="hidden md:flex space-x-6 text-black">
      <li><router-link to="/" class="hover:text-gray-400">Inicio</router-link></li>
      <li>
        <router-link to="/Ofertas" class="hover:text-gray-400">Eventos</router-link>
      </li>

      <li>
        <router-link to="/galeria" class="hover:text-gray-400">Galeria</router-link>
      </li>
      <li>
        <router-link to="/paquetes" class="hover:text-gray-400">Paquetes</router-link>
      </li>
    </ul>
    <!-- <button class="bg-sky-700 hover:bg-gray-700 px-4 py-2 rounded text-white">
      Reservar
    </button> -->
  </nav>
</template>

<script setup>
import { AcademicCapIcon, HomeIcon } from "@heroicons/vue/outline";
</script>

<style></style>
