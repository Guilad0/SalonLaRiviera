<template>
  <section class="container mx-auto px-4 py-12">
    <h2 class="text-3xl font-serif font-bold text-stone-800 mb-8 text-center">
      Eventos Anteriores
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <EventCard v-for="(event, index) in events" :key="index" :event="event" />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import EventCard from "../components/EventCard.vue";

const events = ref([
  {
    title: "Concierto Tributo a Pink Floyd",
    price: "22/08/2023",
    image:
      "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082118/IMG-20180827-WA0010_psttr5.jpg",
    description:
      "Querida quinceañera y familia, Es un honor para nosotros ser parte de este momento tan especial en sus vidas.",
    detailsLink: "/paquetes",
  },
  {
    title: 'Concierto "Tiempo de Clasicos" 80s, 90s y 70s',
    price: "12/08/2023",
    image:
      "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082119/IMG-20180827-WA0020_aapitq.jpg",
    description:
      "Estimados novios, Es un placer para nosotros ser parte de este momento tan especial en sus vidas.",
    detailsLink: "/paquetes",
  },
  {
    title: 'Graduacion de Academia de modelaje "Glamour Models"',
    price: "29/07/2024",
    image:
      "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082125/IMG_20210417_212241_orqgbl.jpg",
    description:
      "Estimados anfitriones y familia, Es un honor para nosotros ser parte de este momento tan especial en sus vidas.",
    detailsLink: "/paquetes",
  },
]);
</script>
