<template>
  <div
    class="min-h-screen bg-[url('https://res.cloudinary.com/dughcx6qb/image/upload/v1741331030/bglariviera_x530xy.jpg')]"
  >
    <header class="shadow-md py-6 bg-stone-900">
      <div class="container mx-auto px-4 mt-5 sm:mt-4">
        <h1 class="text-3xl md:text-4xl font-[Comfortaa] text-white text-center">
          Galería de Eventos
        </h1>
        <p
          class="text-center text-stone-400 mt-2"
          style="font-family: 'Comfortaa', sans-serif"
        >
          Capturando momentos especiales
        </p>
      </div>
    </header>

    <div class="container mx-auto px-4 py-6">
      <div class="flex flex-wrap justify-center gap-2 mb-8">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="[
            'px-4 py-2 rounded-full transition-all duration-300',
            selectedCategory === category
              ? 'bg-amber-500 text-white shadow-lg'
              : 'bg-stone-900 text-gray-100 hover:bg-amber-500',
          ]"
          style="font-family: 'Comfortaa', sans-serif"
        >
          {{ category }}
        </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          v-for="photo in filteredPhotos"
          :key="photo.id"
          class="group relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-all duration-300 cursor-pointer"
          @click="openLightbox(photo)"
        >
          <div class="relative pb-[100%]">
            <img
              :src="photo.url"
              :alt="photo.title"
              class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h3
                class="text-white font-medium"
                style="font-family: 'Comfortaa', sans-serif"
              >
                {{ photo.title }}
              </h3>
              <p
                class="text-gray-200 text-sm"
                style="font-family: 'Comfortaa', sans-serif"
              >
                {{ photo.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="selectedPhoto"
        class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
        @click="closeLightbox"
      >
        <div class="relative max-w-4xl mx-4" @click.stop>
          <button
            @click="closeLightbox"
            class="absolute -top-10 right-0 text-white hover:text-gray-300 p-2"
          >
            <span class="text-3xl">&times;</span>
          </button>
          <img
            :src="selectedPhoto.url"
            :alt="selectedPhoto.title"
            class="max-h-[80vh] max-w-full object-contain rounded-lg"
          />
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
      categories: ["Todos", "Bodas", "Quinceañeras", "Eventos Corporativos", "Fiestas"],
      photos: [
        {
          id: 1,
          title: "Boda Romántica",
          description: "Ceremonia romantica en nuestro ambiente",
          category: "Bodas",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082038/IMG-20180926-WA0019_oiwq7y.jpg",
        },
        {
          id: 2,
          title: "Quinceañera Elegante",
          description: "Celebración de XV años",
          category: "Quinceañeras",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082151/479487023_1142232350677854_5400312498081089072_n_xenukc.jpg",
        },
        {
          id: 3,
          title: "Conferencia Tech",
          description: "Evento corporativo anual",
          category: "Eventos Corporativos",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082087/IMG-20180829-WA0009_jq2hku.jpg",
        },
        {
          id: 4,
          title: "Gala Benéfica",
          description: "Cena de gala anual",
          category: "Fiestas",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082087/IMG_20210403_121803_317_zlmnxc.jpg",
        },
        {
          id: 5,
          title: "Boda en la Playa",
          description: "Ceremonia junto al mar",
          category: "Bodas",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082039/SaveClip.App_61781313_146143013216037_8931770470732746958_n_hjgptn.jpg",
        },
        {
          id: 6,
          title: "Quinceañera Moderna",
          description: "Celebración contemporánea",
          category: "Quinceañeras",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1738349307/15Platinum_ysnz5h.jpg",
        },
        {
          id: 7,
          title: "Summit Empresarial",
          description: "Conferencia internacional",
          category: "Eventos Corporativos",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082119/IMG-20180912-WA0017_td0q2q.jpg",
        },
        {
          id: 8,
          title: "Fiesta de Graduación",
          description: "Celebración universitaria",
          category: "Fiestas",
          url:
            "https://res.cloudinary.com/dughcx6qb/image/upload/v1740082119/IMG-20180827-WA0020_aapitq.jpg",
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
