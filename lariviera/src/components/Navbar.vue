<template>
  <div>
    <nav
      class="bg-neutral-300 text-white p-4 flex justify-between items-center font-serif text-lg shadow-md backdrop-blur-md bg-opacity-80 h-16"
    >
      <div class="flex items-center">
        <img
          src="@/assets/img/EPgold.jpeg"
          alt="Logo"
          class="h-10 mr-2 rounded-lg shadow-sm"
        />
        <router-link
          to="/"
          class="text-2xl font-bold font-serif text-black hover:text-gray-500 transition-colors duration-300"
          >Salon de Eventos La Riviera</router-link
        >
      </div>

      <ul class="hidden md:flex space-x-6 text-black">
        <li>
          <router-link to="/" class="hover:text-gray-500 transition-colors duration-300"
            >Inicio</router-link
          >
        </li>
        <!-- <li>
          <router-link
            to="/eventos"
            class="hover:text-gray-500 transition-colors duration-300"
            >Eventos</router-link
          >
        </li> -->
        <li>
          <router-link
            to="/galeria"
            class="hover:text-gray-500 transition-colors duration-300"
            >Galeria</router-link
          >
        </li>
        <li>
          <router-link
            to="/paquetes"
            class="hover:text-gray-500 transition-colors duration-300"
            >Paquetes</router-link
          >
        </li>
      </ul>

      <button @click="toggleMenu" class="md:hidden text-black focus:outline-none z-50">
        <div class="w-6 h-6 flex flex-col justify-between">
          <span
            class="block w-7 h-1 bg-black rounded transition-transform duration-300"
            :class="{ 'rotate-45 translate-y-2.5': menuOpen }"
          ></span>
          <span
            class="block w-7 h-1 bg-black rounded transition-opacity duration-300"
            :class="{ 'opacity-0': menuOpen }"
          ></span>
          <span
            class="block w-7 h-1 bg-black rounded transition-transform duration-300"
            :class="{ '-rotate-45 -translate-y-2.5': menuOpen }"
          ></span>
        </div>
      </button>
    </nav>

    <transition name="slide-fade">
      <div
        v-if="menuOpen"
        class="md:hidden bg-neutral-300 bg-opacity-90 text-black p-4 absolute top-16 left-0 w-full z-40 shadow-lg rounded-b-lg"
      >
        <ul class="space-y-4 text-center">
          <li>
            <router-link
              @click="toggleMenu"
              to="/"
              class="block py-2 hover:text-white hover:bg-neutral-400 transition-colors duration-300 rounded-lg"
              >Inicio</router-link
            >
          </li>
          <!-- <li>
            <router-link
              @click="toggleMenu"
              to="/eventos"
              class="block py-2 hover:text-white hover:bg-neutral-400 transition-colors duration-300 rounded-lg"
              >Eventos</router-link
            >
          </li> -->
          <li>
            <router-link
              @click="toggleMenu"
              to="/galeria"
              class="block py-2 hover:text-white hover:bg-neutral-400 transition-colors duration-300 rounded-lg"
              >Galeria</router-link
            >
          </li>
          <li>
            <router-link
              @click="toggleMenu"
              to="/paquetes"
              class="block py-2 hover:text-white hover:bg-neutral-400 transition-colors duration-300 rounded-lg"
              >Paquetes</router-link
            >
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
