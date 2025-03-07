<template>
  <div
    class="font-sans bg-[url('https://media.istockphoto.com/id/938870836/photo/gold-glittering-star-light-and-bokeh-magic-dust-abstract-background-element-for-your-product.jpg?s=2048x2048&w=is&k=20&c=V9Z6q3MNwW-KQxoZi4TW6gqMKW0uQgQZHGTKwoGzVjU=')] bg-cover">
    <div class="flex items-center justify-center mt-8 mx-5 p-4">
      <h1 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-center max-w-lg text-white">
        REVISA EL PAQUETE DE TU EVENTO
      </h1>
    </div>

    <div class="flex flex-wrap justify-center gap-3 p-4 ">
      <button v-for="categoria in categories" :key="categoria.value" @click="selectedCategory = categoria.value"
        :class="['button-category']"
        :style="selectedCategory === categoria.value ? { backgroundColor: 'black', color: 'white' } : {}">
        {{ categoria.label }}
      </button>
    </div>

    <div class="container mt-2">
      <transition-group name="fade" tag="div" class="row g-4 justify-content-center font-sans-serif">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" v-for="paquete in filteredPackages" :key="paquete.nombre">
          <EventCard :event="{
            title: paquete.nombre,
            price: paquete.precio + ' por persona',
            image: paquete.image,
            description: paquete.descripcion,
            detailsLink: getPaqueteLink(paquete)
          }" />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import EventCard from "../components/EventCard.vue";

export default {
  components: { EventCard },
  data() {
    return {
      paquetes: [
        { nombre: "Paquete Matrimonial Estandar", precio: "Bs 185", descripcion: "Decoración Básica...", image: "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082039/Captura_de_pantalla_2025-02-13_080929_kuxmjx.jpg", category: "matrimonios" },
        { nombre: "Paquete Matrimonial Gold", precio: "Bs 190", descripcion: "Decoración Premium ...", image: "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082038/received_990762377781067_aahmr8.jpg", category: "matrimonios" },
        { nombre: "Paquete Matrimonial Platinum", precio: "Bs 220", descripcion: "Decoración Exclusiva...", image: "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082038/SaveClip.App_37598889_265211824076485_479068567820566528_n_w4q6rt.jpg", category: "matrimonios" },
        { nombre: "Paquete Quince Años Estandar", precio: "Bs 160", descripcion: "Decoración Básica...", image: "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082152/478990134_1141698550731234_4863281091107801233_n_sssouh.jpg", category: "quinceanos" },
        { nombre: "Paquete Quince Años Gold", precio: "Bs 170", descripcion: "Decoración Premium ...", image: "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082149/SaveClip.App_81585373_160842461923771_8576567447727770476_n_fjhvjg.jpg", category: "quinceanos" },
        { nombre: "Paquete Quince Años Platinum", precio: "Bs 190", descripcion: "Decoración Exclusiva...", image: "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082151/479487023_1142232350677854_5400312498081089072_n_xenukc.jpg", category: "quinceanos" },
        { nombre: "Paquete Eventos Privados Estandar", precio: "Bs 160", descripcion: "Decoración Básica...", image: "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082121/Captura_de_pantalla_2025-02-13_080720_yluxe0.jpg", category: "eventosprivados" },
        { nombre: "Paquete Eventos Privados Gold", precio: "Bs 180", descripcion: "Decoración Premium ...", image: "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082120/SaveClip.App_38194810_227566937927616_865769800901591040_n_kynn9k.jpg", category: "eventosprivados" },
        { nombre: "Paquete Eventos Privados Platinum", precio: "Bs 210", descripcion: "Decoración Exclusiva...", image: "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082118/IMG-20180827-WA0010_psttr5.jpg", category: "eventosprivados" },
        { nombre: "Paquete Eventos Corporativos", precio: "Bs 160", descripcion: "Decoración según su Necesidad...", image: "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082087/IMG_20210403_121803_317_zlmnxc.jpg", category: "eventoscorporativos" },
      ],
      selectedCategory: "matrimonios",
      categories: [
        { label: "Matrimonios", value: "matrimonios" },
        { label: "Quince Años", value: "quinceanos" },
        { label: "Eventos Privados", value: "eventosprivados" },
        { label: "Eventos Corporativos", value: "eventoscorporativos" },
      ],
    };
  },
  computed: {
    filteredPackages() {
      return this.paquetes.filter(paquete => paquete.category === this.selectedCategory);
    },
  },
  methods: {
    getPaqueteLink(paquete) {
      const routeMap = {
        "Paquete Matrimonial Estandar": "/boda-estandar",
        "Paquete Matrimonial Gold": "/bodagold",
        "Paquete Matrimonial Platinum": "/bodaplatinum",
        "Paquete Quince Años Estandar": "/quince-estandar",
        "Paquete Quince Años Gold": "/quinceGold",
        "Paquete Quince Años Platinum": "/quincePlatinum",
        "Paquete Eventos Privados Estandar": "/evento-privado-estandar",
        "Paquete Eventos Privados Gold": "/evento-privado-gold",
        "Paquete Eventos Privados Platinum": "/evento-privado-platinum",
        "Paquete Eventos Corporativos": "/otros",
      };

      const basePath = routeMap[paquete.nombre] || "/otros";
      const id = paquete.nombre.replace(/\s+/g, '-').toLowerCase();
      return `${basePath}/${id}`;
    },
  },
};
</script>

<style scoped>
.button-category {
  padding: 8px 16px;
  border-radius: 9999px;
  font-family: sans-serif;
  transition: all 0.2s;
  background-color: black;
  color: white;
}

.button-category:hover {
  background-color: rgb(245, 158, 11);

}

.button-category:focus {
  outline: none;

}
</style>
