<template>
  <div class="m-5 p-2.5">
    <h1>Detalles del Paquete Gold: {{ paqueteId }}</h1>
    <h2 class="text-justify italic">
      "Estimados novios,

      Es un placer para nosotros ser parte de este momento tan especial en sus vidas. En nombre del <b>Salón de Eventos
        La Riviera</b>, nos especializamos en hacer de cada boda un evento único e inolvidable, cuidando cada detalle
      para que disfruten de una celebración mágica y sin preocupaciones.

      A continuación, les presentamos nuestra propuesta de cotización, diseñada para adaptarse a sus necesidades y hacer
      realidad la boda de sus sueños.

      Quedamos atentos a cualquier consulta o ajuste que deseen realizar. Será un honor acompañarlos en este gran día."
    </h2>

    <h3 class="underline">
      A continuación, detallamos los servicios y opciones incluidas en nuestra cotización, diseñados para cubrir todas
      las necesidades de su boda y asegurar que sea un evento memorable.
    </h3>`
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
              <p class="text-justify italic font-bold">Brindis</p>
              <p class="text-justify italic">• Cerezer</p>
            </td>
            <td class="border px-4 py-2 text-left align-top">
              <p class="text-justify italic font-bold">Saladitos</p>
              <p class="text-justify italic">• Nachos c/palta</p>
            </td>
            <td class="border px-4 py-2 text-left align-top">
              <p class="text-justify italic font-bold">Plato Servido</p>
              <p class="text-justify italic">• Cena dos tipos de carne a elección</p>
              <p class="text-justify italic">• Dos guarniciones  a elección</p>
              <p class="text-justify italic">• Dos ensaladas</p>
            </td>
          </tr>
          <!-- Fila 2 -->
          <tr>
            <td class="border px-4 py-2 text-left align-top">
              <p class="text-justify italic font-bold">Bebidas en mesa con alcohol (2)</p>
              <p class="text-justify italic">• Whisky de litro. J.W/Old etq. Roja BALLANTAI</p>
              <p class="text-justify italic">• Ron Catra Vieja</p>
              <p class="text-justify italic">• Ron Solera</p>
              <p class="text-justify italic">• Casa real negro	</p>
            </td>
            <td class="border px-4 py-2 text-left align-top">
              <p class="text-justify italic font-bold">Bebidas sin alcohol (canilla libre)</p>
              <p class="text-justify italic">• Gaseosas /hielo/limón/agua</p>
            </td>
            <td class="border px-4 py-2 text-left align-top">
              <p class="text-justify italic font-bold">Fondeu de chocolate</p>
              <p class="text-justify italic">• Frutas de temporada</p>
              <p class="text-justify italic">• Mashmelos</p>
            </td>
          </tr>
          <!-- Fila 3 -->
          <tr>
            <td class="border px-4 py-2 text-left align-top">
              <p class="text-justify italic font-bold">Montaje</p>
              <p class="text-justify italic">• Mesas, sillas tifany</p>
              <p class="text-justify italic">• Vajilla, cristalería.</p>
              <p class="text-justify italic">• Cubertería.</p>
            </td>
            <td class="border px-4 py-2 text-left align-top">
              <p class="text-justify italic font-bold">Personal de atención</p>
              <p class="text-justify italic">• Coordinador de Eventos.</p>
              <p class="text-justify italic">• Garzones</p>
              <p class="text-justify italic">• Personal de seguridad</p>
              <p class="text-justify italic">• Personal de limpieza durante todo el evento</p>
            </td>
            <td class="border px-4 py-2 text-left align-top">
              <p class="text-justify italic font-bold">Propuesta de servicio</p>
              <p class="text-justify italic">• Cronograma de actividades</p>
              <p class="text-justify italic">• Ambiente para descanso novios.</p>
            </td>
          </tr>
          <!-- Fila larga (una sola columna que cubre tres columnas) -->
          <tr>
            <td colspan="3" class="border px-4 py-2 text-left align-top">
              <p class="text-justify italic font-bold">Detalles del plato servido</p>
              <p class="text-justify italic font-bold">Carnes:</p>
              <p class="text-justify italic">• Peceto relleno/medallón de pollo /filete de cerdo al vino</p>
              <p class="text-justify italic font-bold">Guarniciones:</p>
              <p class="text-justify italic">• Papa salteada al vino/croqueta de yuca/pastel de papa/arroz chifa</p>
              <p class="text-justify italic font-bold">Ensaladas</p>
              <p class="text-justify italic">• Salsa waldorf/salsa alemana con millo/salsa griega/ verduras al vapor</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br><br>
    <h3 class="text-justify italic font-bold">Calcula el Costo Total según el Número de Invitados, previo reunion con el
      coordinador</h3>
      <br>
    <!-- Tabla de cotización -->
    <table>
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
          <td>Paquete Gold</td>
          <td>
            <input type="number" v-model="cantidad" min="0" class="input-cantidad" />
          </td>
          <td>{{ precioUnitario }} Bs</td>
          <td>{{ total }} Bs</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      cantidad: 0, // Comienza con 0
      precioUnitario: 190 // Precio de ejemplo
    };
  },
  computed: {
    paqueteId() {
      return this.id;
    },
    total() {
      return this.cantidad * this.precioUnitario;
    }
  }
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
</style>
