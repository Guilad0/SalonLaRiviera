<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 font-serif">
    <!-- Título -->
    <h1 class="text-xl sm:text-2xl lg:text-3xl font-bold mb-4" style="font-family: 'Mode G', sans-serif;">
      Detalles del Evento de Empresa: {{ paqueteId }}
    </h1>

    <!-- Introducción -->
    <div class="text-sm sm:text-base text-justify italic mb-6 space-y-4">
      <p><b>"Estimados organizadores y equipo,</b></p>
      <p>
        Es un honor para nosotros ser parte de su próximo evento. En nombre del
        <b>Salón de Eventos La Riviera</b>, nos especializamos en crear experiencias
        memorables, brindando un servicio impecable y cuidando cada detalle para garantizar
        el éxito de su reunión. A continuation, les presentamos nuestra propuesta de
        cotización, diseñada para adaptarse a sus necesidades y hacer de su evento
        corporativo, seminario o disertación una experiencia profesional y enriquecedora.
        Quedamos atentos a cualquier consulta o ajuste que deseen realizar. Será un placer
        acompañarlos en la organización de este importante encuentro."
      </p>
    </div>

    <!-- Subtítulo -->
    <h3 class="text-base sm:text-lg underline mb-6">
      A continuación, detallamos los servicios y opciones incluidas en nuestra cotización,
      diseñados para cubrir todas las necesidades de su evento empresarial, seminario o
      disertación, garantizando una experiencia profesional y exitosa.
    </h3>

    <!-- Tabla de servicios -->
    <div class="overflow-x-auto">
      <table class="w-full border-collapse mt-4 text-sm sm:text-base">
        <tbody>
          <!-- Fila 1 -->
          <tr class="border-b">
            <td class="px-4 py-3 text-left align-top">
              <p class="text-justify italic font-bold">REQUERIMIENTO DE SALÓN</p>
              <ul class="list-none space-y-1 mt-1">
                <li class="text-justify italic">♦ SALÓN AMPLIO AIRE ACONDICIONADO</li>
                <li class="text-justify italic">♦ 200 SILLAS TIFFANY</li>
                <li class="text-justify italic">♦ MESAS DE APOYO</li>
                <li class="text-justify italic">♦ ACCESO A BAÑOS EQUIPADOS</li>
                <li class="text-justify italic">♦ ÁREAS DE JARDÍN PARA DESCANSO</li>
              </ul>
            </td>
            <td class="px-4 py-3 text-left align-top font-bold italic w-28 sm:w-32">
              Bs 6000
            </td>
          </tr>
          <!-- Fila 2 -->
          <tr class="border-b">
            <td class="px-4 py-3 text-left align-top">
              <p class="text-justify italic font-bold">HERRAMIENTAS AUDIOVISUALES</p>
              <ul class="list-none space-y-1 mt-1">
                <li class="text-justify italic">♦ PANTALLA LED</li>
                <li class="text-justify italic">♦ SONIDO DOS MICRÓFONOS</li>
              </ul>
            </td>
            <td class="px-4 py-3 text-left align-top font-bold italic w-28 sm:w-32">
              Bs 1800
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Sección Adicional -->
    <div class="mt-8">
      <h2 class="text-xl sm:text-2xl font-bold italic mb-4">ADICIONAL:</h2>
      <ul class="list-disc list-inside space-y-2 text-sm sm:text-base">
        <li class="text-justify">
          Servicio de catering para todo tipo de eventos Censa Gourmet: banquetes,
          servicios de brunch, mesas dulces, mesas saladas, etc. (según requerimiento).
        </li>
      </ul>

      <!-- Sección Extras -->
      <h2 class="text-xl sm:text-2xl font-bold italic mt-6 mb-4">EXTRAS:</h2>
      <ul class="list-disc list-inside space-y-2 text-sm sm:text-base">
        <li class="text-justify">
          Amplificación y sonido ambiental, ajustados según los requerimientos del evento.
        </li>
        <li class="text-justify">
          Iluminación personalizada, adaptada a las necesidades del evento.
        </li>
        <li class="text-justify">
          Data display, disponible bajo planificación previa con el coordinador de sonido.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      cantidad: 0,
      precioUnitario: 190,
    };
  },
  computed: {
    paqueteId() {
      return this.id;
    },
    total() {
      return this.cantidad * this.precioUnitario;
    },
  },
};
</script>

<style scoped>
/* Solo estilos específicos que no cubre Tailwind */
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');

body {
  font-family: 'Comfortaa', sans-serif;
}
</style>