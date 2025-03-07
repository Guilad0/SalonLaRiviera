<template>
  <div class="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
    <transition-group name="fade" tag="div" class="relative w-full h-96 bg-black">
      <div
        v-for="(image, index) in images"
        v-show="currentIndex === index"
        :key="index"
        class="absolute top-0 left-0 w-full h-full"
      >
        <img
          :src="image"
          :alt="`Imagen ${index + 1}`"
          class="w-full h-full object-cover"
        />
      </div>
    </transition-group>

    <button
      @click="prevSlide"
      class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 hover:bg-opacity-75"
    >
      &#10094;
    </button>
    <button
      @click="nextSlide"
      class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 hover:bg-opacity-75"
    >
      &#10095;
    </button>

    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <button
        v-for="(image, index) in images"
        :key="index"
        @click="goToSlide(index)"
        :class="[
          'w-3 h-3 rounded-full',
          currentIndex === index ? 'bg-white' : 'bg-gray-500',
        ]"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        "https://res.cloudinary.com/dughcx6qb/image/upload/v1738349297/EPPlatinum_rajo51.jpg",
        "https://res.cloudinary.com/dughcx6qb/image/upload/v1741362697/img1riviera_acojjc.jpg",
      ],
      interval: null,
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
    startAutoPlay() {
      this.interval = setInterval(() => {
        this.nextSlide();
      }, 4000);
    },
    stopAutoPlay() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    },
  },
  mounted() {
    this.startAutoPlay();
  },
  beforeUnmount() {
    this.stopAutoPlay();
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
