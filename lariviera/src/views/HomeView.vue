<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import ChatBot from "@/components/ChatBot.vue";
import Carrusel from "@/components/Carrusel.vue";
import CardPaquetes from "@/components/CardPaquetes.vue";
import CardEventos from "@/components/CardEventos.vue";
import CardConferencias from "@/components/CardConferencias.vue";
import WhatsAppComponent from "@/components/WhatsAppComponent.vue";
import Bot from "@/components/Bot.vue";
</script>

<template>
  <div class="font-sans">
    <Navbar />
    <section class="relative w-full h-screen flex items-center justify-center">
      <div class="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref="videoPlayer"
          class="w-full h-full object-cover"
          autoplay
          loop
          controls
        >
          <source
            src="https://res.cloudinary.com/dughcx6qb/video/upload/v1741611241/rivieravideo_w7e5hc.mp4"
            type="video/mp4"
          />
        </video>
        <!-- <div class="absolute inset-0 bg-black/50"></div> -->
      </div>

      <!-- //fondoimagen -->
      <!-- <div class="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="https://res.cloudinary.com/dughcx6qb/image/upload/v1738349297/EPPlatinum_rajo51.jpg"
          alt="home"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50"></div>
      </div>
 -->

      <img
        src="https://res.cloudinary.com/dughcx6qb/image/upload/v1738605755/IMG-20180802-WA0002_nxqo8w.jpg"
        alt="logo"
        class="h-48 w-48 sm:h-60 sm:w-60 hidden rounded-full absolute left-60 bottom-20 opacity-80 animate-fadeInDrop"
      />
      <div
        class="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center z-10 w-full flex justify-center"
      >
        <img
          src="https://res.cloudinary.com/dughcx6qb/image/upload/v1738605755/IMG-20180802-WA0002_nxqo8w.jpg"
          alt=""
          class="h-40 sm:h-40 rounded-full shadow-lg opacity-70"
        />
      </div>

      <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
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
      <section id="galeria" class="py-20 px-6 bg-stone-900">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
              Galería de Eventos
            </h2>
            <div class="w-20 h-1 bg-amber-500 mx-auto"></div>
          </div>
          <button
            class="px-3 py-2 bg-amber-500 hover:bg-amber-600 text-black font-medium rounded-lg transition-colors m-4"
          >
            <router-link to="/galeria" class="text-decoration-none text-black">
              Revisar Galeria
            </router-link>
          </button>
          <Carrusel class="w-full rounded-xl overflow-hidden shadow-2xl" />
        </div>
      </section>
      <section
        id="paquetes"
        class="py-20 px-6 bg-[url('https://res.cloudinary.com/dughcx6qb/image/upload/v1741331030/bglariviera_x530xy.jpg')]"
      >
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
              Nuestros Paquetes
            </h2>
            <div class="w-20 h-1 bg-amber-500 mx-auto"></div>
          </div>
          <CardPaquetes />
        </div>
      </section>

      <section class="py-20 px-6 bg-stone-900" id="conferencias">
        <div class="max-w-7xl mx-auto">
          <div class="text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Conferencias</h2>
            <div class="w-20 h-1 bg-amber-500 mx-auto"></div>
          </div>
          <CardConferencias />
        </div>
      </section>
      <section
        id="eventos"
        class="py-20 px-6 bg-[url('https://res.cloudinary.com/dughcx6qb/image/upload/v1741331030/bglariviera_x530xy.jpg')]"
      >
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
              Nuestros Eventos
            </h2>
            <div class="w-20 h-1 bg-amber-500 mx-auto"></div>
          </div>
          <CardEventos />
        </div>
      </section>
      <div>
        <!-- <ChatBot /> -->
        <Bot />
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
                  <a
                    href="https://www.google.com/maps/place/Salon+De+Eventos+La+Riviera/@-17.3667954,-66.1665446,18.65z/data=!4m6!3m5!1s0x93e37440844bb993:0x8d292c6a03d3a3b6!8m2!3d-17.3665926!4d-66.1658639!16s%2Fg%2F11b77v9jth?entry=ttu&g_ep=EgoyMDI1MDMwMy4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                    class="hover:text-amber-500 transition-colors text-white text-decoration-none"
                    target="_blank"
                    >Av. Simon Lopez, Cochabamba, Cercado <br />Frente a Tribunal
                    Electoral Departamental Cochabamba</a
                  >
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
                  <a
                    href="https://wa.me/59160765655?text=%F0%9F%98%81%22%21Hola%21%20Estoy%20interesado%20en%20su%20sal%C3%B3n%20para%20un%20evento.%20%F0%9F%8D%BE%F0%9F%8C%82%20%3FPodr%C3%ADan%20enviarme%20informaci%C3%B3n%20sobre%20disponibilidad%20%20%F0%9F%93%88%2C%20paquetes%20y%20precios%20%3F%20%21Muchas%20gracias%21%20%21Espero%20su%20respuesta%20pronto%21%20%F0%9F%8E%89%F0%9F%A5%B3%F0%9F%8E%89"
                    target="_blank"
                    class="hover:text-amber-500 transition-colors text-white text-decoration-none"
                    >+591 60765655</a
                  >
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
                  <span>salon.de.eventos.la.riviera@gmail.com</span>
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
  background: #000000;
}
@keyframes fadeInDrop {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInDrop {
  animation: fadeInDrop 2.5s ease-out;
}
</style>
