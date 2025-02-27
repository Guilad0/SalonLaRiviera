<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import ChatBot from "@/components/ChatBot.vue";
import Carrusel from "@/components/Carrusel.vue";
import CardPaquetes from "@/components/CardPaquetes.vue";
import CardEventos from "@/components/CardEventos.vue";
import CardConferencias from "@/components/CardConferencias.vue";
import WhatsAppComponent from "@/components/WhatsAppComponent.vue";
</script>

<template>
  <div class="font-sans">
    <Navbar />
    <section class="relative w-full h-screen flex items-center justify-center">
      <div class="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="https://res.cloudinary.com/dughcx6qb/image/upload/v1738349297/EPPlatinum_rajo51.jpg"
          alt="home"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50"></div>
      </div>

      <div class="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 class="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
          SALÓN DE EVENTOS <span class="text-amber-400">LA RIVIERA</span>
        </h1>
        <p class="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
          El lugar perfecto para celebrar tus momentos más importantes con elegancia y
          distinción
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a
            href="#paquetes"
            class="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-medium rounded-lg transition-colors text-decoration-none"
          >
            Ver Paquetes
          </a>
          <a
            href="#contacto"
            class="px-8 py-3 bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium rounded-lg transition-colors text-decoration-none"
          >
            Contáctanos
          </a>
        </div>
      </div>

      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
    </section>

    <main class="bg-gradient-to-b from-stone-100 to-stone-200">
      <section id="paquetes" class="py-20 px-6">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              Nuestros Paquetes
            </h2>
            <div class="w-20 h-1 bg-amber-500 mx-auto"></div>
          </div>
          <CardPaquetes />
        </div>
      </section>
      <section id="galeria" class="py-20 px-6 bg-stone-800">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
              Galería de Eventos
            </h2>
            <div class="w-20 h-1 bg-amber-500 mx-auto"></div>
          </div>
          <Carrusel class="w-full rounded-xl overflow-hidden shadow-2xl" />
        </div>
      </section>
      <section id="eventos" class="py-20 px-6">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              Próximos Eventos
            </h2>
            <div class="w-20 h-1 bg-amber-500 mx-auto"></div>
          </div>
          <CardEventos />
        </div>
      </section>
      <section class="py-20 px-6 bg-gradient-to-b from-stone-200 to-stone-300">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              Conferencias
            </h2>
            <div class="w-20 h-1 bg-amber-500 mx-auto"></div>
          </div>
          <CardConferencias />
        </div>
      </section>
      <div>
        <ChatBot />
        <WhatsAppComponent />
      </div>
      <section id="contacto" class="py-20 px-6 bg-stone-900 text-white">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Contáctanos</h2>
            <div class="w-20 h-1 bg-amber-500 mx-auto"></div>
          </div>

          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="space-y-8">
              <div>
                <h3 class="text-xl font-semibold mb-2">Información de Contacto</h3>
                <p class="text-stone-300">
                  Estamos disponibles para responder cualquier pregunta sobre nuestros
                  servicios.
                </p>
              </div>

              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 text-amber-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <span>Av. Simon Lopez #123, Cochabamba, Cercado</span>
                </div>

                <div class="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 text-amber-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <span>+123 456 7890</span>
                </div>

                <div class="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 text-amber-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <span>gmail.@lariviera.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", sans-serif;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1e1e1e;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
