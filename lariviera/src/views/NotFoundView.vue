<template>
  <div class="font-sans bg-black min-h-screen flex items-center justify-center">
    <div class="relative w-full max-w-lg mx-4">
      <div
        class="absolute -top-10 -left-10 w-20 h-20 bg-amber-400 rounded-full blur-xl opacity-30"
      ></div>
      <div
        class="absolute -bottom-10 -right-10 w-20 h-20 bg-amber-400 rounded-full blur-xl opacity-30"
      ></div>

      <div
        class="bg-black border border-amber-400/30 backdrop-blur-sm p-8 rounded-lg shadow-2xl z-10 relative"
      >
        <div class="text-center">
          <div class="relative mb-6">
            <h1 class="text-9xl font-black text-black relative z-10">
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200"
                >404</span
              >
            </h1>
            <div
              class="absolute top-0 left-0 w-full h-full flex items-center justify-center -mt-2 -ml-2"
            >
              <span class="text-9xl font-black text-white/5">404</span>
            </div>
          </div>

          <h2 class="text-2xl font-semibold text-white mb-4">Página no encontrada</h2>
          <p class="text-gray-400 mb-8">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>

          <router-link
            to="/"
            class="bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 px-8 rounded-full inline-block transition-all duration-300 shadow-lg hover:shadow-amber-400/30 text-decoration-none"
          >
            Volver al inicio
          </router-link>
        </div>
      </div>

      <div
        class="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"
      ></div>
      <div
        class="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-amber-400/30 to-transparent"
      ></div>
    </div>
  </div>
</template>
