<template>
  <div class="m-5 sm:m-2 p-2.5 sm:p-1 font-serif text-2xl" style="font-family: 'Comfortaa', sans-serif;">
    <h1 class="font-bold" style="font-family: 'Mode G', sans-serif; font-size: 20px;">
      Detalles del Paquete Gold: {{ paqueteId }}
    </h1>
    <h2 class="text-justify italic text-xs sm:text-sm md:text-base">
      "Querida quinceañera y familia, Es un honor para nosotros ser parte de este momento
      tan especial en sus vidas. En nombre del <b>Salón de Eventos La Riviera</b>, nos
      especializamos en crear celebraciones inolvidables, cuidando cada detalle para que
      disfruten de una fiesta mágica y sin preocupaciones. A continuación, les presentamos
      nuestra propuesta de cotización, diseñada para adaptarse a sus necesidades y hacer
      realidad la fiesta de quince años de sus sueños. Quedamos atentos a cualquier
      consulta o ajuste que deseen realizar. Será un honor acompañarlos en este día tan
      especial."
    </h2>

    <h3 class="underline text-xs sm:text-sm md:text-base">
      A continuación, detallamos los servicios y opciones incluidas en nuestra cotización,
      diseñados para cubrir todas las necesidades de su fiesta de quince años y asegurar
      que sea un evento memorable.
    </h3>
    `
    <div class="overflow-x-auto">
      <table class="table-auto w-full border-collapse mt-4 text-xs sm:text-sm md:text-base">
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
            <td class="border px-2 sm:px-3 md:px-4 py-2 text-left align-top">
              <p class="font-bold">Brindis</p>
              <p>• Cerezer</p>
            </td>
            <td class="border px-2 sm:px-3 md:px-4 py-2 text-left align-top">
              <p class="font-bold">Saladitos</p>
              <p>• Pizzetas</p>
              <p>• Brochetas de cerdo</p>
              <p>• Tartaletas</p>
              <p>• Albondigas</p>
            </td>
            <td class="border px-2 sm:px-3 md:px-4 py-2 text-left align-top">
              <p class="font-bold">
                Bebidas sin alcohol (canilla libre)
              </p>
              <p>• Gaseosas / agua/jugos</p>
            </td>
          </tr>
          <!-- Fila 2 -->
          <tr>
            <td class="border px-2 sm:px-3 md:px-4 py-2 text-left align-top">
              <p class="font-bold">Montaje</p>
              <p>• Mesas, sillas vestidas.</p>
              <p>• Vajilla, cristalería.</p>
              <p>• Cubertería.</p>
            </td>
            <td class="border px-2 sm:px-3 md:px-4 py-2 text-left align-top">
              <p class="font-bold">Amplificación</p>
              <p>• 4 tipos de luces.</p>
              <p>• Maestro de ceremonia</p>
            </td>
            <td class="border px-2 sm:px-3 md:px-4 py-2 text-left align-top">
              <p class="font-bold">Personal de atención</p>
              <p>• Coordinador de Eventos.</p>
              <p>• Garzones</p>
              <p>• Personal de seguridad</p>
              <p>
                • Personal de limpieza durante todo el evento
              </p>
            </td>
          </tr>
          <!-- Fila 3 -->
          <tr>
            <td class="border px-2 sm:px-3 md:px-4 py-2 text-left align-top">
              <p class="font-bold">Fondeu de chocolate</p>
              <p>• Frutas de temporada</p>
              <p>• Mashmelos</p>
              <p>• Detalles de chocolate</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br /><br />
    <h3 class="text-justify italic font-bold text-xs sm:text-sm md:text-base mt-4">
      Calcula el Costo Total según el Número de Invitados, previo reunion con el
      coordinador
    </h3>
    <br />

    <!-- Tabla de cotización -->
    <div class="overflow-x-auto">
      <table class="table-auto w-full border-collapse mt-4 text-xs sm:text-sm md:text-base">
        <thead>
          <tr>
            <th class="px-2 sm:px-3 md:px-4 py-2 border">Descripción</th>
            <th class="px-2 sm:px-3 md:px-4 py-2 border">Cantidad</th>
            <th class="px-2 sm:px-3 md:px-4 py-2 border">Precio Unitario</th>
            <th class="px-2 sm:px-3 md:px-4 py-2 border">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border px-2 sm:px-3 md:px-4 py-2">Paquete Gold</td>
            <td class="border px-2 sm:px-3 md:px-4 py-2">
              <input type="number" v-model="cantidad" min="0"
                class="w-16 sm:w-20 md:w-24 text-center border p-1 text-xs sm:text-sm md:text-base" />
            </td>
            <td class="border px-2 sm:px-3 md:px-4 py-2">{{ precioUnitario }} Bs</td>
            <td class="border px-2 sm:px-3 md:px-4 py-2">{{ total }} Bs</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      cantidad: 0, // Comienza con 0
      precioUnitario: 170, // Precio de ejemplo
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
