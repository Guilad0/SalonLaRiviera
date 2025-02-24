<template>
  <div class="container mx-auto py-12 px-6 flex justify-center">
    <div
      class="flex items-stretch bg-white border border-gray-200 rounded-lg shadow-md w-full max-w-5xl hover:bg-gray-100 transition dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      
      <!-- Imagen al lado izquierdo -->
      <div class="w-[30%]"> <!-- Cambiado a 30% -->
        <img 
          class="object-cover w-full h-full rounded-l-lg"
          :src="saludoImage"
          alt="Saludo de bienvenida"
        />
      </div>

      <!-- Contenido de la Card -->
      <div class="w-[70%] p-8"> <!-- Cambiado a 70% -->
        <h2 class="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          ¡Bienvenidos a Nuestro Salón de Eventos La Riviera!
        </h2>
        <p class="text-gray-700 text-lg mt-4 leading-relaxed">
          Con 32 años de experiencia, somos el lugar ideal para bodas, quinceaños, cumpleaños,
          graduaciones y más. También organizamos conciertos, ferias, fiestas temáticas y
          reuniones sociales, brindando momentos inolvidables con un servicio de excelencia.
        </p>
        <p class="text-gray-700 text-lg mt-4 leading-relaxed">
          Nuestro compromiso es ofrecer un <strong>servicio de excelencia, un ambiente elegante y acogedor</strong>,
          y un equipo altamente capacitado que hará que tu evento sea inolvidable.
          Ya sea una celebración íntima o un evento de gran escala, en <strong>La Riviera</strong> nos
          encargamos de cada detalle para que tú solo te preocupes por disfrutar.
        </p>
        <p class="text-gray-700 text-lg mt-4 leading-relaxed font-semibold">
          🎉 ¡Hagamos juntos que cada momento sea mágico e inolvidable! Contáctanos y descubre todo lo que podemos hacer
          por ti.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import saludoImage from '@/assets/img/Para-Saludo.jpeg';
</script>

<style scoped>
.container {
  max-width: 1400px;
}
</style>