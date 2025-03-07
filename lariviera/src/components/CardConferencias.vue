<template>
  <section class="container mx-auto px-4 py-12">
    <h2 class="text-3xl font-serif font-bold text-stone-800 mb-8 text-center">
      Conferencias - Eventos Corporativos
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <EventCard v-for="(event, index) in events" :key="index" :event="event" />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import EventCard from "../components/EventCard.vue";

const events = ref([
  {
    title: "Convencion de Tatuajes",
    price: "Obten mas informacion",
    image:
      "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082085/IMG-20180913-WA0015_lvwmon.jpg",

    detailsLink: "/paquetes",
  },
  {
    title: "Conferencia Sobre economia nacional",
    price: "Obten mas información",
    image:
      "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082087/IMG-20180829-WA0009_jq2hku.jpg",
    detailsLink: "/paquetes",
  },
  {
    title: "Conferencia de la iglesia ",
    price: "Obten mas información",
    image:
      "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082087/IMG_20210403_121803_317_zlmnxc.jpg",

    detailsLink: "/paquetes",
  },
  {
    title: "Conferencia sobre politica y comercio internacional ",
    price: "Obten mas información",
    image:
      "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082086/IMG_20180730_165127_330_vbnr4t.jpg",
    detailsLink: "/paquetes",
  },
]);
</script>
