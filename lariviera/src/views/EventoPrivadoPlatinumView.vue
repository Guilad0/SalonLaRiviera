<template>
  <div class="m-5 p-2.5 font-serif text-2xl" style="font-family: 'Comfortaa', sans-serif;">
    <h1 class="font-bold" style="font-family: 'Mode G', sans-serif; font-size: 20px;">
      Detalles del Paquete Platinum: {{ paqueteId }}
    </h1>    
    <h2 class="text-justify italic text-xs sm:text-sm md:text-base">
      <p><b>"Estimados anfitriones y familia,</b></p>

      Es un honor para nosotros ser parte de este momento tan especial en sus vidas. En
      nombre del <b>Salón de Eventos La Riviera</b>, nos especializamos en crear
      celebraciones inolvidables, cuidando cada detalle para que disfruten de una fiesta
      mágica y sin preocupaciones. A continuación, les presentamos nuestra propuesta de
      cotización, diseñada para adaptarse a sus necesidades y hacer realidad la
      celebración de sus sueños. Quedamos atentos a cualquier consulta o ajuste que deseen
      realizar. Será un placer acompañarlos en este día tan especial."
    </h2>

    <h3 class="underline text-xs sm:text-sm md:text-base">
      A continuación, detallamos los servicios y opciones incluidas en nuestra cotización,
      diseñados para cubrir todas las necesidades de su celebración, ya sea un cumpleaños,
      aniversario u otro evento social, asegurando que sea una experiencia inolvidable.
    </h3>
    `
    <div class="overflow-x-auto">
      <table class="table-auto w-full border-collapse mt-4 text-xs sm:text-sm md:text-base">
    
        <tbody>
          <!-- Fila 1 -->
          <tr>
            <td class="border px-2 sm:px-3 md:px-4 py-2 text-left align-top">
              <p class="font-bold">Brindis</p>
              <p>• Cerezer</p>
              <p>• Galletas de Hojaldre</p>
            </td>
            <td class="border px-2 sm:px-3 md:px-4 py-2 text-left align-top">
              <p class="font-bold">Saladitos</p>
              <p>• Nachos c/palta</p>
            </td>
            <td class="border px-2 sm:px-3 md:px-4 py-2 text-left align-top">
              <p class="font-bold">Plato Servido</p>
              <p>• Cena tres tipos de carne a elección</p>
              <p>• Bufé de ensaladas y guarniciones</p>
              <p>• Una ensalada</p>
            </td>
          </tr>
          <!-- Fila 2 -->
          <tr>
            <td class="border px-2 sm:px-3 md:px-4 py-2 text-left align-top">
              <p class="font-bold">Incluye</p>
              <p>• Amplificación</p>
              <p>• Luces LED</p>
            </td>
            <td class="border px-2 sm:px-3 md:px-4 py-2 text-left align-top">
              <p class="font-bold">Luminotecnia</p>
              <p>• 25 puntos de luces LED</p>
              <p>• Instalación y desinstalación de luces</p>
              <p>• Controlador digital de luces</p>
            </td>
            <td class="border px-2 sm:px-3 md:px-4 py-2 text-left align-top">
              <p class="font-bold">
                Bebidas en mesa con alcohol (2 TRAGOS)
              </p>
              <p>• Whisky J.W/Old etq. negro</p>
              <p>• Ron o/ Fernet</p>
              <p>• Singani / casa resal negro</p>
            </td>
          </tr>
          <!-- Fila 3 -->
          <tr>
            <td class="border px-2 sm:px-3 md:px-4 py-2 text-left align-top">
              <p class="font-bold">
                Bebidas sin alcohol (canilla libre)
              </p>
              <p>• Gaseosas / agua/jugos</p>
              <p>• Jugos Naturales</p>
            </td>
            <td class="border px-2 sm:px-3 md:px-4 py-2 text-left align-top">
              <p class="font-bold">Montaje</p>
              <p>• Mesas, sillas vestidas.</p>
              <p>• Vajilla, cristalería.</p>
              <p>• Cubertería.</p>
            </td>
            <td class="border px-2 sm:px-3 md:px-4 py-2 text-left align-top">
              <p class="font-bold">Personal de Atención</p>
              <p>• Coordinador de Eventos</p>
              <p>Garzones</p>
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
            <td class="border px-2 sm:px-3 md:px-4 py-2">Paquete Platinum</td>
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
      precioUnitario: 210, // Precio de ejemplo
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
