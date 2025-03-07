<script setup>
import { ref, onMounted } from "vue";

const isScrolled = ref(false);
const isMenuOpen = ref(false);

onMounted(() => {
  window.addEventListener("scroll", () => {
    isScrolled.value = window.scrollY > 50;
  });
});

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div>
    <nav
      :class="[
        'fixed top-0 w-full z-50 transition-all duration-300 flex items-center justify-between px-6 py-3',
        isScrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-transparent',
      ]"
    >
      <div class="flex items-center gap-4">
        <img
          src="https://res.cloudinary.com/dughcx6qb/image/upload/v1738605755/IMG-20180802-WA0002_nxqo8w.jpg"
          alt="logo"
          class="h-10 sm:h-14 rounded-full border-2 border-gray-200 shadow-lg"
          onclick="window.location.href='/'"
          style="cursor: pointer"
        />
        <router-link
          to="/"
          class="font-semibold text-gray-100 tracking-wider text-decoration-none hover:text-amber-400"
          >LA RIVIERA</router-link
        >
      </div>

      <div class="hidden md:flex gap-8 text-white/90">
        <a
          href="/"
          class="relative hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full text-decoration-none text-white"
          >Inicio</a
        >

        <a
          href="#galeria"
          class="relative hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full text-decoration-none text-white"
          >Galería</a
        >
        <a
          href="#paquetes"
          class="relative hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full text-decoration-none text-white"
          >Paquetes</a
        >
        <a
          href="#conferencias"
          class="relative hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full text-decoration-none text-white"
          >Conferencias</a
        >
        <a
          href="#eventos"
          class="relative hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full text-decoration-none text-white"
          >Eventos</a
        >
        <a
          href="#contacto"
          class="relative hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full text-decoration-none text-white"
          >Contacto</a
        >
      </div>
      <button @click="toggleMenu" class="md:hidden text-white focus:outline-none">
        <svg
          v-if="!isMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <div
      v-if="isMenuOpen"
      class="fixed top-16 left-0 right-0 bg-black/70 backdrop-blur-md z-40 py-4 md:hidden flex flex-col items-center"
    >
      <a
        href="/"
        @click="isMenuOpen = false"
        class="py-3 px-4 w-full text-center text-white hover:bg-amber-500/20 transition-colors text-decoration-none"
        >Inicio</a
      >
      <a
        href="#galeria"
        @click="isMenuOpen = false"
        class="py-3 px-4 w-full text-center text-white hover:bg-amber-500/20 transition-colors text-decoration-none"
        >Galería</a
      >
      <a
        href="#paquetes"
        @click="isMenuOpen = false"
        class="py-3 px-4 w-full text-center text-white hover:bg-amber-500/20 transition-colors text-decoration-none"
        >Paquetes</a
      >
      <a
        href="#conferencias"
        @click="isMenuOpen = false"
        class="py-3 px-4 w-full text-center text-white hover:bg-amber-500/20 transition-colors text-decoration-none"
        >Conferencias</a
      >

      <a
        href="#eventos"
        @click="isMenuOpen = false"
        class="py-3 px-4 w-full text-center text-white hover:bg-amber-500/20 transition-colors text-decoration-none"
        >Eventos</a
      >
      <a
        href="#contacto"
        @click="isMenuOpen = false"
        class="py-3 px-4 w-full text-center text-white hover:bg-amber-500/20 transition-colors text-decoration-none"
        >Contacto</a
      >
    </div>
  </div>
</template>
