<template>
  <div class="m-5 sm:m-2 p-2.5 sm:p-1 font-serif text-2xl" style="font-family: 'Comfortaa', sans-serif;">
    <h1 class="text-xl sm:text-lg md:text-2xl font-bold" style="font-family: 'Mode G', sans-serif;">Detalles del Paquete
      Estándar: {{ paqueteId }}</h1>

    <h2 class="text-justify italic text-xs sm:text-sm md:text-base">
      "Estimados novios, Es un placer para nosotros ser parte de este momento tan especial
      en sus vidas. En nombre del <b>Salón de Eventos La Riviera</b>, nos especializamos
      en hacer de cada boda un evento único e inolvidable, cuidando cada detalle para que
      disfruten de una celebración mágica y sin preocupaciones. A continuación, les
      presentamos nuestra propuesta de cotización, diseñada para adaptarse a sus
      necesidades y hacer realidad la boda de sus sueños. Quedamos atentos a cualquier
      consulta o ajuste que deseen realizar. Será un honor acompañarlos en este gran día."
    </h2>

    <h3 class="underline text-xs sm:text-sm md:text-base">
      A continuación, detallamos los servicios y opciones incluidas en nuestra cotización,
      diseñados para cubrir todas las necesidades de su boda y asegurar que sea un evento
      memorable.
    </h3>

    <div class="overflow-x-auto">
      <table class="table-auto w-full border-collapse mt-4 text-xs sm:text-sm md:text-base">
        <tbody>
          <!-- Fila 1 -->
          <tr>
            <td class="border px-2 sm:px-3 md:px-4 py-2 text-left align-top">
              <p class="font-bold">Brindis</p>
              <p>• Cerezer</p>
            </td>
            <td class="border px-2 sm:px-3 md:px-4 py-2 text-left align-top">
              <p class="font-bold">Saladitos</p>
              <p>• Nachos c/palta</p>
            </td>
            <td class="border px-2 sm:px-3 md:px-4 py-2 text-left align-top">
              <p class="font-bold">Montaje</p>
              <p>• Cena un tipo de carne a elección</p>
              <p>• Vajilla, cristalería.</p>
              <p>• Cubertería.</p>
            </td>
          </tr>
          <!-- Fila 2 -->
          <tr>
            <td class="border px-2 sm:px-3 md:px-4 py-2 text-left align-top">
              <p class="font-bold">Bebidas en mesa con alcohol (2)</p>
              <p>• Singani Casa Real</p>
              <p>• Ron Carta Vieja - Abuelo</p>
              <p>• Ron Carta Vieja- Havana</p>
              <p>• Ron Solera</p>
            </td>
            <td class="border px-2 sm:px-3 md:px-4 py-2 text-left align-top">
              <p class="font-bold">Bebidas sin alcohol (canilla libre)</p>
              <p>• Gaseosas /hielo/limón/agua</p>
            </td>
            <td class="border px-2 sm:px-3 md:px-4 py-2 text-left align-top">
              <p class="font-bold">Fondeu de chocolate</p>
              <p>• Frutas de temporada</p>
              <p>• Mashmelos</p>
            </td>
          </tr><!-- Fila 3 -->
          <tr>
            <td class="border px-2 sm:px-3 md:px-4 py-2 text-left align-top">
              <p class="font-bold">Montaje</p>
              <p>• Mesas, sillas tifany</p>
              <p>• Vajilla, cristalería</p>
              <p>• Cubertería.</p>
            </td>
            <td class="border px-2 sm:px-3 md:px-4 py-2 text-left align-top">
              <p class="font-bold">Personal de atención</p>
              <p>• Coordinador de Eventos</p>
              <p>• Garzones</p>
              <p>• Personal de seguridad</p>
              <p>• Personal de limpieza durante todo el evento</p>

            </td>
            <td class="border px-2 sm:px-3 md:px-4 py-2 text-left align-top">
              <p class="font-bold">Fondeu de chocolate</p>
              <p>• Frutas de temporada</p>
              <p>• Mashmelos</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-justify italic font-bold text-xs sm:text-sm md:text-base mt-4">
      Calcula el Costo Total según el Número de Invitados, previo reunión con el
      coordinador
    </h3>
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
            <td class="border px-2 sm:px-3 md:px-4 py-2">Paquete Estándar</td>
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
      cantidad: 0,
      precioUnitario: 185,
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
th,
td {
  text-align: center;
  border: 1px solid #ccc;
}

th {
  background-color: #f2f2f2;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}
</style>
