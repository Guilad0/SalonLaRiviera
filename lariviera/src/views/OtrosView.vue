<template>
  <div class="m-5 p-2.5 font-serif text-2xl" style="font-family: 'Comfortaa', sans-serif;">
    <h1 class="font-bold" style="font-family: 'Mode G', sans-serif; font-size: 20px;">
      Detalles del Evento de Empresa: {{ paqueteId }}
    </h1>    
    <h2 class="text-justify italic text-xs sm:text-sm md:text-base">
      <p><b>"Estimados organizadores y equipo,</b></p>

      Es un honor para nosotros ser parte de su próximo evento. En nombre del
      <b>Salón de Eventos La Riviera</b>, nos especializamos en crear experiencias
      memorables, brindando un servicio impecable y cuidando cada detalle para garantizar
      el éxito de su reunión. A continuación, les presentamos nuestra propuesta de
      cotización, diseñada para adaptarse a sus necesidades y hacer de su evento
      corporativo, seminario o disertación una experiencia profesional y enriquecedora.
      Quedamos atentos a cualquier consulta o ajuste que deseen realizar. Será un placer
      acompañarlos en la organización de este importante encuentro."
    </h2>

    <h3 class="underline text-xs sm:text-sm md:text-base">
      A continuación, detallamos los servicios y opciones incluidas en nuestra cotización,
      diseñados para cubrir todas las necesidades de su evento empresarial, seminario o
      disertación, garantizando una experiencia profesional y exitosa.
    </h3>
    `
    <div class="overflow-x-auto">
      <table class="table-auto w-full border-collapse mt-4 text-xs sm:text-sm md:text-base">
       
        <tbody>
          <!-- Fila 1 -->
          <tr>
            <td class="border px-2 sm:px-3 md:px-4 py-2 text-left align-top">
              <p class="font-bold">REQURIMENTO DE SALÓN</p>
              <p>♦ SALÓN AMPLIO AIRE ACONDICIONADO</p>
              <p>♦ 500 SILLAS TIFFANY</p>
              <p>♦ MESAS DE APOYO</p>
              <p>♦ ACCESO A BAÑOS EQUIPADOS</p>
              <p>♦ AREAS DE JARDIN PARA DESCANSO</p>
            </td>

            <td class="border px-2 sm:px-3 md:px-4 py-2 text-left align-top">
              <p class="font-bold">Bs 6000</p>
            </td>
          </tr>
          <!-- Fila 2 -->
          <tr>
            <td class="border px-2 sm:px-3 md:px-4 py-2 text-left align-top">
              <p class="font-bold">HERRAMIENTAS AUDIOVISUALES</p>
              <p>♦ PANTALLA LED</p>
              <p>♦ SONIDO DOS MICRÓFONOS</p>
              <p>♦ SONIDO DOS MICRÓFONOS</p>
            </td>

            <td class="border px-2 sm:px-3 md:px-4 py-2 text-left align-top">
              <p class="font-bold">Bs 1800</p>
            </td>
          </tr>
          


        </tbody>
      </table>
      <br><br>
      <h2 class="text-justify italic text-xs sm:text-sm md:text-base">
        <b>ADICIONAL:</b></h2>
      <ul class="text-justify italic text-xs sm:text-sm md:text-base">
        <li class="text-justify">
          Servicio de catering para todo tipo de eventos Censa Gourmet: banquetes,
          servicios de brunch, mesas dulces, mesas saladas, etc. (según requerimiento).
        </li>
      </ul>

      <h2 class="text-justify italic text-xs sm:text-sm md:text-base"><b>EXTRAS:</b></h2>
      <ul class="text-justify italic text-xs sm:text-sm md:text-base">
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
    <br /><br />
    <!-- <h3 class="text-justify italic font-bold">
      Calcula el Costo Total según el Número de Invitados, previo reunion con el
      coordinador
    </h3> -->
    <br />

    <!-- Tabla de cotización -->
    <!-- <table>
      <thead>
        <tr>
          <th>Descripción</th>
          <th>Cantidad de Personas</th>
          <th>Precio Unitario</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Eventos de Empresa</td>
          <td>
            <input type="number" v-model="cantidad" min="0" class="input-cantidad" />
          </td>
          <td>{{ precioUnitario }} Bs</td>
          <td>{{ total }} Bs</td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      cantidad: 0, // Comienza con 0
      precioUnitario: 190, // Precio de ejemplo
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
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  text-align: center;
  border: 1px solid #ccc;
}

th {
  background-color: #f2f2f2;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

.input-cantidad {
  width: 60px;
  text-align: center;
  border: 2px solid #ccc;
  padding: 5px;
  font-size: 16px;
  background-color: white;
  /* Asegura que el fondo siempre sea visible */
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
  /* Le da un ligero relieve */
}

h1 {
  font-family: 'Mode G', serif;
  font-size: 2.3rem;
}
</style>
