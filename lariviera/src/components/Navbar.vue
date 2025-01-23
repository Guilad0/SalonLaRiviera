<template>
  <nav class="bg-blue-950 font-serif">
    <div class="flex px-4 justify-between">
      <div class="flex">
        <img
          src="https://scontent.flpb3-1.fna.fbcdn.net/v/t39.30808-6/305998895_602548724646222_6734776312684364712_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=umH4yXIZ3CEQ7kNvgFyEkN-&_nc_zt=23&_nc_ht=scontent.flpb3-1.fna&_nc_gid=Au6uCaLZHFTzDVVHAqdrnZm&oh=00_AYA3rEH5GY--Lgsu3w0h2eoTMFcCHU9dxf_eaTaLZJa08w&oe=67944B17"
          class="h-13 rounded-full w-14 m-2"
        />
        <p class="mt-5 mx-4 text-white font-serif text-3xl">LA RIVIERA</p>
      </div>
      <button class="lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 text-white-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div class="flex px-5 flex-row gap-5 mt-5 text-white mx-4 text-2xl">
        <router-link to="/" class="">
          <HomeIcon class="w-6 h-6" />
          <p class="">Home</p>
        </router-link>
        <router-link to="/about">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>

          Ofertas
        </router-link>
        <router-link to="/about">
          <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
            />
          </svg> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
            />
          </svg>

          Habitaciones
        </router-link>
        <router-link to="/about">
          <AcademicCapIcon class="w-6 h-6 justify-center" />
          <p class="">Nuestros Servicios</p>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { AcademicCapIcon, HomeIcon } from "@heroicons/vue/outline";
</script>

<style></style>
