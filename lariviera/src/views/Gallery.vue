<template>
  <div
    class="min-h-screen bg-[url('https://res.cloudinary.com/dughcx6qb/image/upload/v1741331030/bglariviera_x530xy.jpg')]">
    <header class="shadow-md py-6 bg-stone-900">
      <div class="container mx-auto px-4 mt-5 sm:mt-4">
        <h1 class="text-3xl md:text-4xl font-[Comfortaa] text-white text-center">
          Galería de Eventos
        </h1>
        <p class="text-center text-stone-400 mt-2" style="font-family: 'Comfortaa', sans-serif">
          Capturando momentos especiales
        </p>
      </div>
    </header>

    <div class="container mx-auto px-4 py-6">
      <div class="flex flex-wrap justify-center gap-2 mb-8">
        <button v-for="category in categories" :key="category" @click="selectedCategory = category" :class="[
          'px-4 py-2 rounded-full transition-all duration-300',
          selectedCategory === category
            ? 'bg-amber-500 text-white shadow-lg'
            : 'bg-stone-900 text-gray-100 hover:bg-amber-500',
        ]" style="font-family: 'Comfortaa', sans-serif">
          {{ category }}
        </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="photo in filteredPhotos" :key="photo.id"
          class="group relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-all duration-300 cursor-pointer"
          @click="openLightbox(photo)">
          <div class="relative pb-[100%]">
            <img :src="photo.url" :alt="photo.title"
              class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              loading="lazy" />
          </div>
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h3 class="text-white font-medium" style="font-family: 'Comfortaa', sans-serif">
                {{ photo.title }}
              </h3>
              <p class="text-gray-200 text-sm" style="font-family: 'Comfortaa', sans-serif">
                {{ photo.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="selectedPhoto" class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
        @click="closeLightbox">
        <div class="relative max-w-4xl mx-4" @click.stop>
          <button @click="closeLightbox" class="absolute -top-10 right-0 text-white hover:text-gray-300 p-2">
            <span class="text-3xl">&times;</span>
          </button>
          <img :src="selectedPhoto.url" :alt="selectedPhoto.title"
            class="max-h-[80vh] max-w-full object-contain rounded-lg" />
          <div class="text-white mt-4">
            <h3 class="text-xl font-medium" style="font-family: 'Comfortaa', sans-serif">
              {{ selectedPhoto.title }}
            </h3>
            <p class="text-gray-300" style="font-family: 'Comfortaa', sans-serif">
              {{ selectedPhoto.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoGallery",

  data() {
    return {
      selectedCategory: "Todos",
      searchQuery: "",
      selectedPhoto: null,
      categories: ["Todos", "Bodas", "Quinceañeras", "Eventos", "Gastronomia"],
      photos: [
        {
          id: 1,
          title: "Boda Romántica",
          description: "Un ambiente encantador de fondo, con los novios posando con amor y elegancia para la cámara",
          category: "Bodas",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082038/IMG-20180926-WA0019_oiwq7y.jpg",
        },
        {
          id: 2,
          title: "Quinceañera Elegante",
          description: "Una quinceañera radiante junto a su hermosa torta decorada, celebrando su día especial",
          category: "Quinceañeras",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082151/479487023_1142232350677854_5400312498081089072_n_xenukc.jpg",
        },
        {
          id: 3,
          title: "Presentacón de Salón",
          description: "Amplio, moderno y adaptable, ideal para celebrar momentos especiales y grandes encuentros",
          category: "Eventos",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082087/IMG-20180829-WA0009_jq2hku.jpg",
        },
        {
          id: 4,
          title: "Gastronomia",
          description: "Sabores irresistibles en cada bocadillo, listos para disfrutar en este gran evento",
          category: "Gastronomia",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082471/WhatsApp_Image_2025-02-20_at_8.21.54_AM_ec1gwy.jpg",
        },
        {
          id: 5,
          title: "Boda Elegante",
          description: "Mesa de bocadillos exquisitamente decorada, ofreciendo deliciosas opciones para los invitados",
          category: "Bodas",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082039/SaveClip.App_61781313_146143013216037_8931770470732746958_n_hjgptn.jpg",
        },
        {
          id: 6,
          title: "Quinceañera",
          description: "Decoración iluminada y elegante, destacando la torta de la quinceañera en su gran día",
          category: "Quinceañeras",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1738349307/15Platinum_ysnz5h.jpg",
        },
        {
          id: 7,
          title: "Evento de Salón",
          description: "El lugar ideal para exposiciones y disertaciones con comodidad, tecnología y elegancia.",
          category: "Eventos",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082119/IMG-20180912-WA0017_td0q2q.jpg",
        },
        {
          id: 8,
          title: "Gastronomia",
          description: "Variedad de bocadillos exquisitos, presentados con elegancia para una celebración especial",
          category: "Gastronomia",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082470/WhatsApp_Image_2025-02-20_at_8.21.54_AM_2_wkx9sn.jpg",
        },
        {
          id: 9,
          title: "Ceremonia de Matrimonio",
          description: "Mesa de boda elegantemente decorada, con bocadillos listos para ser servidos",
          category: "Bodas",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082039/Captura_de_pantalla_2025-02-13_080929_kuxmjx.jpg",
        },
        {
          id: 10,
          title: "Ceremonia de Matrimonio",
          description: "Mesas elegantes y bien decoradas para los invitados, rodeadas de un ambiente de boda sofisticado",
          category: "Bodas",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082038/SaveClip.App_38097070_2126975174229985_7285870495302418432_n_plscuu.jpg",
        },
        {
          id: 11,
          title: "Ceremonia de Matrimonio",
          description: "Mesas decoradas con esmero, complementando la belleza del salón para una celebración de boda memorabl",
          category: "Bodas",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082038/IMG_20180719_145828_845_bnhnq5.jpg",
        },
        {
          id: 12,
          title: "Ceremonia de Matrimonio",
          description: "Hermosas mesas de boda, con detalles decorativos que realzan la belleza del salón y crean un ambiente especial",
          category: "Bodas",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082038/SaveClip.App_37598889_265211824076485_479068567820566528_n_w4q6rt.jpg",
        },
        {
          id: 13,
          title: "Ceremonia de Matrimonio",
          description: "Decoración mesas y salónMesas cuidadosamente decoradas para los invitados, en un salón lleno de elegancia y encanto para la boda",
          category: "Bodas",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082038/received_990762377781067_aahmr8.jpg",
        },
        {
          id: 14,
          title: "Ceremonia de Matrimonio",
          description: "Mesa de la torta decorada con elegancia, en el centro de la celebración de boda",
          category: "Bodas",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082038/Captura_de_pantalla_2025-02-13_100655_ssepev.jpg",
        },
        {
          id: 15,
          title: "Quinceañera",
          description: "Hermosa decoración iluminada con la torta de la quinceañera y una selección de deliciosos bocadillos",	
          category: "Quinceañeras",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082152/478990134_1141698550731234_4863281091107801233_n_sssouh.jpg",
        },
        {
          id: 16,
          title: "Quinceañera",
          description: "Un elegante set con un hermoso sillón, perfecto para que la quinceañera capture recuerdos inolvidables",
          category: "Quinceañeras",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082149/SaveClip.App_81585373_160842461923771_8576567447727770476_n_fjhvjg.jpg",
        },
        {
          id: 17,
          title: "Quinceañera",
          description: "El salón en todo su esplendor, decorado con una temática única y especial para la quinceañeraa",
          category: "Quinceañeras",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082148/SaveClip.App_81411677_2451636041752098_240112728907964506_n_djjjcy.jpg",
        },
        {
          id: 18,
          title: "Quinceañera",
          description: "Mesa decorada con una variedad de deliciosos bocadillos, listos para disfrutar en la celebración",
          category: "Quinceañeras",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082148/IMG-20180717-WA0055_re11fz.jpg",
        },
        {
          id: 19,
          title: "Quinceañera",
          description: "Un momento único en el salón, donde la quinceañera baila el vals con su papá, rodeados de elegancia y emoción",
          category: "Quinceañeras",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082147/479517910_1141548570746232_7919470612120866853_n_gzqujt.jpg",
        },
        {
          id: 20,
          title: "Gastronomia",
          description: "Deliciosos bocadillos cuidadosamente preparados, perfectos para deleitar a los invitados",
          category: "Gastronomia",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082469/WhatsApp_Image_2025-02-20_at_8.21.54_AM_1_eqlf7i.jpg",
        },
        {
          id: 21,
          title: "Gastronomia",
          description: "Platos gourmet preparados con esmero, combinando presentación impecable y sabores exquisitos",
          category: "Gastronomia",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082468/WhatsApp_Image_2025-02-20_at_8.21.53_AM_3_jctl2z.jpg",
        },
        {
          id: 22,
          title: "Gastronomia",
          description: "Una experiencia culinaria única con platos gourmet que deleitan el paladar",
          category: "Gastronomia",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082467/WhatsApp_Image_2025-02-20_at_8.21.53_AM_2_h2ta8u.jpg",
        },
        {
          id: 23,
          title: "Gastronomia",
          description: "Variedad de complementos dulces y frutales, perfectos para personalizar tu postre",
          category: "Gastronomia",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082466/WhatsApp_Image_2025-02-20_at_8.21.53_AM_1_gbn3ev.jpg",
        },
        {
          id: 24,
          title: "Gastronomia",
          description: "Un festín visual con una selección de bocadillos, platos gourmet y exquisitos postres",
          category: "Gastronomia",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082464/WhatsApp_Image_2025-02-20_at_8.21.52_AM_ifgsse.jpg",
        },
        {
          id: 25,
          title: "Gastronomia",
          description: "Variedad gastronómica en un solo vistazo: bocadillos, platos gourmet y dulces irresistibles",
          category: "Gastronomia",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082463/WhatsApp_Image_2025-02-20_at_8.21.52_AM_2_n9mdox.jpg",
        },
        {
          id: 26,
          title: "Gastronomia",
          description: "Variedad de toppings para personalizar tu postre y disfrutar de sabores irresistibles",
          category: "Gastronomia",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082366/WhatsApp_Image_2025-02-20_at_8.21.52_AM_1_b6s94q.jpg",
        },
        {
          id: 27,
          title: "Gastronomia",
          description: "Postres exquisitos, cuidadosamente elaborados para endulzar cada momento de la celebración",
          category: "Gastronomia",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082365/WhatsApp_Image_2025-02-20_at_8.21.51_AM_fa7bpp.jpg",
        },
        {
          id: 28,
          title: "Gastronomia",
          description: "Sándwiches deliciosos y frescos, ideales para disfrutar en cualquier momento del evento",
          category: "Gastronomia",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082364/WhatsApp_Image_2025-02-20_at_8.21.51_AM_1_xmahbo.jpg",
        },
        {
          id: 29,
          title: "Gastronomia",
          description: "Exquisita tabla de quesos, embutidos y frutas frescas, perfecta para degustar y compartir",
          category: "Gastronomia",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082363/WhatsApp_Image_2025-02-20_at_8.21.49_AM_vb6dqd.jpg",
        },
        {
          id: 30,
          title: "Evento de Salón",
          description: "Un escenario elegante y glamuroso para desfiles de moda con modelos deslumbrante",
          category: "Eventos",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082125/IMG_20210417_212241_orqgbl.jpg",
        },
        {
          id: 31,
          title: "Evento de Salón",
          description: "Arreglo floral para eventos",
          category: "Eventos",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082121/Captura_de_pantalla_2025-02-13_080720_yluxe0.jpg",
        },
        {
          id: 32,
          title: "Evento de Salón",
          description: "Mesa de bocadillos",
          category: "Eventos",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082120/SaveClip.App_38194810_227566937927616_865769800901591040_n_kynn9k.jpg",
        },
        {
          id: 33,
          title: "Evento de Salón",
          description: "Un espacio diseñado para experiencias musicales en vivo, con sonido e iluminación profesional",
          category: "Eventos",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082119/IMG-20180827-WA0020_aapitq.jpg",
        },
        {
          id: 34,
          title: "Evento de Salón",
          description: "Pasarela ideal para exhibir belleza, estilo y las últimas tendencias de moda",
          category: "Eventos",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082119/IMG-20180912-WA0021_ef9jdw.jpg",
        },
       
        {
          id: 36,
          title: "Evento de Salón",
          description: "Un espacio diseñado para experiencias musicales en vivo, con sonido e iluminación profesional",
          category: "Eventos",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082118/IMG-20180827-WA0010_psttr5.jpg",
        },
        {
          id: 37,
          title: "Evento de Salón",
          description: "Escenario ideal para conciertos en vivo, con excelente acústica y ambiente vibrante",
          category: "Eventos",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082118/Captura_de_pantalla_2025-02-13_100741_skdkw3.jpg",
        },
        {
          id: 38,
          title: "Evento de Salón",
          description: "Espacio solemne y acogedor para la celebración de misas y encuentros religiosos",
          category: "Eventos",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082087/IMG_20210403_121803_317_zlmnxc.jpg",
        },
        {
          id: 39,
          title: "Evento de Salón",
          description: "Set ideal para fotos, con iluminación, fondos y ambiente perfecto para capturas únicas",
          category: "Eventos",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082086/IMG-20180728-WA0002_wdflc2.jpg",
        },
        {
          id: 40,
          title: "Evento de Salón",
          description: "Salón equipado para seminarios, con tecnología, comodidad y servicios para eventos profesionales",
          category: "Eventos",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082086/IMG_20180730_165127_330_vbnr4t.jpg",
        },
        {
          id: 41,
          title: "Evento de Salón",
          description: "Un salón diseñado para ferias de negocios, networking y exhibiciones empresariales exitosas",
          category: "Eventos",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082085/IMG-20181011-WA0001_g4gyec.jpg",
        },
        {
          id: 42,
          title: "Evento de Salón",
          description: "Un espacio ideal para ferias de tatuajes, reunimos artistas, cultura e innovación",
          category: "Eventos",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082085/IMG-20180913-WA0017_vztdbd.jpg",
        },
        {
          id: 43,
          title: "Evento de Salón",
          description: "El punto de encuentro para la cultura alternativa, arte, moda y expresión únic",
          category: "Eventos",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082085/IMG-20180913-WA0015_lvwmon.jpg",
        },

      ],
    };
  },

  computed: {
    filteredPhotos() {
      return this.photos.filter((photo) => {
        const matchesCategory =
          this.selectedCategory === "Todos" || photo.category === this.selectedCategory;
        const matchesSearch =
          photo.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          photo.description.toLowerCase().includes(this.searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });
    },
  },

  methods: {
    openLightbox(photo) {
      this.selectedPhoto = photo;
      document.body.style.overflow = "hidden";
    },

    closeLightbox() {
      this.selectedPhoto = null;
      document.body.style.overflow = "auto";
    },

    handleEsc(event) {
      if (event.key === "Escape" && this.selectedPhoto) {
        this.closeLightbox();
      }
    },
  },

  mounted() {
    window.addEventListener("keydown", this.handleEsc);
  },

  unmounted() {
    window.removeEventListener("keydown", this.handleEsc);
  },
};
</script>

<style scoped>
/* Font Comfortaa applied to all text elements */
* {
  font-family: "Comfortaa", sans-serif;
}

h1,
h2,
h3,
p {
  font-family: "Comfortaa", sans-serif;
}

/* Button styling */
button {
  font-family: "Comfortaa", sans-serif;
}
</style>
