<template>
   <div class="m-5 p-2.5 font-serif text-2xl" style="font-family: 'Comfortaa', sans-serif;">
    <h1 class="text-1xl font-[Mode G]">Detalles del Paquete Estándar: {{ paqueteId }}</h1>

    <h2 class="text-justify italic carta">
      "Estimados novios, Es un placer para nosotros ser parte de este momento tan especial
      en sus vidas. En nombre del <b>Salón de Eventos La Riviera</b>, nos especializamos
      en hacer de cada boda un evento único e inolvidable, cuidando cada detalle para que
      disfruten de una celebración mágica y sin preocupaciones. A continuación, les
      presentamos nuestra propuesta de cotización, diseñada para adaptarse a sus
      necesidades y hacer realidad la boda de sus sueños. Quedamos atentos a cualquier
      consulta o ajuste que deseen realizar. Será un honor acompañarlos en este gran día."
    </h2>

    <h3 class="underline">
      A continuación, detallamos los servicios y opciones incluidas en nuestra cotización,
      diseñados para cubrir todas las necesidades de su boda y asegurar que sea un evento
      memorable.
    </h3>

    <div>
      <table class="table-auto w-full border-collapse mt-4">
        <tbody >
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
              <p class="text-justify italic font-bold">Montaje</p>
              <p class="text-justify italic">• Cena un tipo de carne a elección</p>
              <p class="text-justify italic">• Vajilla, cristalería.</p>
              <p class="text-justify italic">• Cubertería.</p>
            </td>
          </tr>
          <!-- Fila 2 -->
          <tr>
            <td class="border px-4 py-2 text-left align-top">
              <p class="text-justify italic font-bold">Bebidas en mesa con alcohol (2)</p>
              <p class="text-justify italic">• Singani Casa Real</p>
              <p class="text-justify italic">• Ron Carta Vieja - Abuelo</p>
              <p class="text-justify italic">• Ron Carta Vieja- Havana</p>
              <p class="text-justify italic">• Ron Solera</p>
            </td>
            <td class="border px-4 py-2 text-left align-top">
              <p class="text-justify italic font-bold">
                Bebidas sin alcohol (canilla libre)
              </p>
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
              <p class="text-justify italic">
                • Personal de limpieza durante todo el evento
              </p>
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
              <p class="text-justify italic">
                • Peceto relleno/medallón de pollo /filete de cerdo al vino
              </p>
              <p class="text-justify italic font-bold">Guarniciones:</p>
              <p class="text-justify italic">
                • Papa salteada al vino/croqueta de yuca/pastel de papa/arroz chifa
              </p>
              <p class="text-justify italic font-bold">Ensaladas</p>
              <p class="text-justify italic">
                • Salsa waldorf/salsa alemana con millo/salsa griega/ verduras al vapor
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br /><br />
    <h3 class="text-justify italic font-bold">
      Calcula el Costo Total según el Número de Invitados, previo reunión con el
      coordinador
    </h3>
    <br />

    <!-- Tabla de cotización -->
    <table class="table-auto w-full border-collapse mt-4">
      <thead>
        <tr>
          <th class="px-4 py-2 border">Descripción</th>
          <th class="px-4 py-2 border">Cantidad de Personas</th>
          <th class="px-4 py-2 border">Precio Unitario</th>
          <th class="px-4 py-2 border">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border px-4 py-2">Paquete Estándar</td>
          <td class="border px-4 py-2">
            <input type="number" v-model="cantidad" min="0" class="cantidad-personas" />
          </td>
          <td class="border px-4 py-2">{{ precioUnitario }} Bs</td>
          <td class="border px-4 py-2">{{ total }} Bs</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      cantidad: 0, // Comienza con 0
      precioUnitario: 185, // Precio de ejemplo
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
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:wght@400;700&family=Great+Vibes&display=swap');


/* El resto de los estilos */
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
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
}

/* Estilos para la tabla */
.table-auto {
  background: white;
  border-radius: 3px;
  border-collapse: collapse;
  margin: auto;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  animation: float 5s infinite;
}

th {
  background: #1b1e24;
  color: #D5DDE5;
  font-size: 20px;
  font-weight: 500;
  padding: 16px;
  text-align: left;
  text-transform: uppercase;
}

tr {
  border-top: 1px solid #C1C3D1;
  border-bottom: 1px solid #C1C3D1;
  color: #666B85;
  font-size: 16px;
}

tr:hover td {
  background: #4E5066;
  color: #FFFFFF;
}

tr:nth-child(odd) td {
  background: #EBEBEB;
}

tr:nth-child(odd):hover td {
  background: #4E5066;
}

td {
  background: #FFFFFF;
  padding: 16px;
  text-align: left;
  font-weight: 300;
  font-size: 16px;
  border-right: 1px solid #C1C3D1;
}

td:last-child {
  border-right: 0px;
}

td[colspan="3"] {
  background: #f9f9f9;
  font-weight: bold;
}

.cantidad-personas {
  color: red;
  font-weight: bold;
  border: 2px solid red;
  padding: 20px;
}

h1 {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 2px;
  font-size: 3rem;
}

h2 {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 2px;
}

h3 {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 2px;
  font-size: 1.5rem;
}

p, td {
  font-family: 'Lora', serif;
}

.carta {
  font-family: 'Great Vibes', cursive;
  font-size: 2rem;
}
</style>