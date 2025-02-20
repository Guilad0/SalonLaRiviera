<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow-md py-6">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl md:text-4xl font-[Comfortaa] text-gray-800 text-center">
          Galería de Eventos
        </h1>
        <p class="text-center text-gray-600 mt-2" style="font-family: 'Comfortaa', sans-serif;">
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
              ? 'bg-neutral-400 text-white shadow-lg' 
              : 'bg-white text-gray-700 hover:bg-blue-50' 
          ]"
          style="font-family: 'Comfortaa', sans-serif;"
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
              <h3 class="text-white font-medium" style="font-family: 'Comfortaa', sans-serif;">
                {{ photo.title }}
              </h3>
              <p class="text-gray-200 text-sm" style="font-family: 'Comfortaa', sans-serif;">
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
            <h3 class="text-xl font-medium" style="font-family: 'Comfortaa', sans-serif;">
              {{ selectedPhoto.title }}
            </h3>
            <p class="text-gray-300" style="font-family: 'Comfortaa', sans-serif;">
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
          description: "Ceremonia al atardecer en jardín",
          category: "Bodas",
          url:
            "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&auto=format&fit=crop",
        },
        {
          id: 2,
          title: "Quinceañera Elegante",
          description: "Celebración de XV años",
          category: "Quinceañeras",
          url:
            "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?w=800&auto=format&fit=crop",
        },
        {
          id: 3,
          title: "Conferencia Tech",
          description: "Evento corporativo anual",
          category: "Eventos Corporativos",
          url:
            "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&fit=crop",
        },
        {
          id: 4,
          title: "Gala Benéfica",
          description: "Cena de gala anual",
          category: "Fiestas",
          url:
            "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&auto=format&fit=crop",
        },
        {
          id: 5,
          title: "Boda en la Playa",
          description: "Ceremonia junto al mar",
          category: "Bodas",
          url:
            "https://images.unsplash.com/photo-1544592732-0a2d16c2a30f?w=800&auto=format&fit=crop",
        },
        {
          id: 6,
          title: "Quinceañera Moderna",
          description: "Celebración contemporánea",
          category: "Quinceañeras",
          url:
            "https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?w=800&auto=format&fit=crop",
        },
        {
          id: 7,
          title: "Summit Empresarial",
          description: "Conferencia internacional",
          category: "Eventos Corporativos",
          url:
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop",
        },
        {
          id: 8,
          title: "Fiesta de Graduación",
          description: "Celebración universitaria",
          category: "Fiestas",
          url:
            "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&auto=format&fit=crop",
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
  font-family: 'Comfortaa', sans-serif;
}

h1, h2, h3, p {
  font-family: 'Comfortaa', sans-serif;
}

/* Button styling */
button {
  font-family: 'Comfortaa', sans-serif;
}
</style>
