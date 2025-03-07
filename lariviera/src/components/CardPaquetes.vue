<template>
  <section class="container mx-auto px-4 py-12">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <EventCard v-for="(event, index) in events" :key="index" :event="event" />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import EventCard from "../components/EventCard.vue";

const events = ref([
  {
    title: "15 años",
    price: "190 Bs por persona",
    image:
      "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082148/SaveClip.App_81411677_2451636041752098_240112728907964506_n_djjjcy.jpg",
    description:
      "Querida quinceañera y familia, Es un honor para nosotros ser parte de este momento tan especial en sus vidas.",
    detailsLink: "/paquetes",
  },
  {
    title: "Matrimonios",
    price: "185 Bs por persona",
    image:
      "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082038/IMG-20180926-WA0019_oiwq7y.jpg",
    description:
      "Estimados novios, Es un placer para nosotros ser parte de este momento tan especial en sus vidas y hacer de su día especial aún mas especial.",
    detailsLink: "/paquetes",
  },
  {
    title: "Eventos Privados",
    price: "Obten mas información",
    image:
      "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082086/IMG-20180728-WA0002_wdflc2.jpg",
    description:
      "Estimados anfitriones y familia, Es un honor para nosotros ser parte de este momento tan especial en sus vidas.",
    detailsLink: "/paquetes",
  },
  {
    title: "Eventos Corporativos",
    price: "Obten mas información",
    image:
      "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082087/IMG_20210403_121803_317_zlmnxc.jpg",
    description:
      "Estimados anfitriones y familia, Es un honor para nosotros ser parte de este momento tan especial en sus vidas.",
    detailsLink: "/paquetes",
  },
]);
</script>
