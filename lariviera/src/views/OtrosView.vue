<template>
  <div class="m-5 p-2.5 font-serif text-2xl" style="font-family: 'Comfortaa', sans-serif;">
    <h1 class="text-1xl font-[Mode G]">Detalles del Evento de Empresa: {{ paqueteId }}</h1>
    <h2 class="text-justify italic">
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

    <h3 class="underline">
      A continuación, detallamos los servicios y opciones incluidas en nuestra cotización,
      diseñados para cubrir todas las necesidades de su evento empresarial, seminario o
      disertación, garantizando una experiencia profesional y exitosa.
    </h3>
    `
    <div>
      <table class="table-auto w-full border-collapse mt-4">
        <!-- <thead>
    <tr>
      <th class="border px-4 py-2">Columna 1</th>
      <th class="border px-4 py-2">Columna 2</th>
      <th class="border px-4 py-2">Columna 3</th>
    </tr>
  </thead> -->
        <tbody>
          <!-- Fila 1 -->
          <tr>
            <td class="border px-4 py-2 text-left align-top">
              <p class="text-justify italic font-bold">REQURIMENTO DE SALÓN</p>
              <p class="text-justify italic">♦ SALÓN AMPLIO AIRE ACONDICIONADO</p>
              <p class="text-justify italic">♦ 500 SILLAS TIFFANY</p>
              <p class="text-justify italic">♦ MESAS DE APOYO</p>
              <p class="text-justify italic">♦ ACCESO A BAÑOS EQUIPADOS</p>
              <p class="text-justify italic">♦ AREAS DE JARDIN PARA DESCANSO</p>
            </td>

            <td class="border px-4 py-2 text-left align-top">
              <p class="text-justify italic font-bold">Bs 6000</p>
            </td>
          </tr>
          <!-- Fila 2 -->
          <tr>
            <td class="border px-4 py-2 text-left align-top">
              <p class="text-justify italic font-bold">HERRAMIENTAS AUDIOVISUALES</p>
              <p class="text-justify italic">♦ PANTALLA LED</p>
              <p class="text-justify italic">♦ SONIDO DOS MICRÓFONOS</p>
              <p class="text-justify italic">♦ SONIDO DOS MICRÓFONOS</p>
            </td>

            <td class="border px-4 py-2 text-left align-top">
              <p class="text-justify italic font-bold">Bs 1800</p>
            </td>
          </tr>
          <!-- Fila 3 -->


        </tbody>
      </table>
      <br><br>
      <h2 class="text-2xl font-bold italic">ADICIONAL:</h2>
      <ul class="list-disc list-inside space-y-2 mt-2">
        <li class="text-justify">
          Servicio de catering para todo tipo de eventos Censa Gourmet: banquetes,
          servicios de brunch, mesas dulces, mesas saladas, etc. (según requerimiento).
        </li>
      </ul>

      <h2 class="text-2xl font-bold italic mt-4">EXTRAS:</h2>
      <ul class="list-disc list-inside space-y-2 mt-2">
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
