<template>
  <div
    class="overflow-x-auto w-full font-sans bg-[url('https://media.istockphoto.com/id/938870836/photo/gold-glittering-star-light-and-bokeh-magic-dust-abstract-background-element-for-your-product.jpg?s=2048x2048&w=is&k=20&c=V9Z6q3MNwW-KQxoZi4TW6gqMKW0uQgQZHGTKwoGzVjU=')] bg-cover"
  >
    <div class="m-5 p-2.5 font-serif text-2xl" style="font-family: 'Comfortaa', sans-serif;">
      <h1 class="text-1xl font-[Mode G] text-center">Detalles del Paquete Estándar: {{ paqueteId }}</h1>

      <h2 class="text-justify carta px-4">
        "Estimados novios, Es un placer para nosotros ser parte de este momento tan especial en sus vidas. En
        nombre del <b>Salón de Eventos La Riviera</b>, nos especializamos en hacer de cada boda un evento único
        e inolvidable, cuidando cada detalle para que disfruten de una celebración mágica y sin preocupaciones.
        A continuación, les presentamos nuestra propuesta de cotización, diseñada para adaptarse a sus
        necesidades y hacer realidad la boda de sus sueños. Quedamos atentos a cualquier consulta o ajuste que
        deseen realizar. Será un honor acompañarlos en este gran día."
      </h2>

      <h3 class="underline text-center carta1 px-4">
        A continuación, detallamos los servicios y opciones incluidas en nuestra cotización, diseñados para
        cubrir todas las necesidades de su boda y asegurar que sea un evento memorable.
      </h3>

      <div class="overflow-x-auto">
        <table class="table-auto min-w-full border-collapse mt-4">
          <tbody>
            <tr>
              <td class="border px-4 py-2 text-left align-top min-w-[200px]">
                <p class="text-justify italic font-bold">Brindis</p>
                <p class="text-justify italic">• Cerezer</p>
              </td>
              <td class="border px-4 py-2 text-left align-top min-w-[200px]">
                <p class="text-justify italic font-bold">Saladitos</p>
                <p class="text-justify italic">• Nachos c/palta</p>
              </td>
              <td class="border px-4 py-2 text-left align-top min-w-[200px]">
                <p class="text-justify italic font-bold">Plato Sevido</p>
                <p class="text-justify italic">• Cena un tipo de carne a elección</p>
                <p class="text-justify italic">• Vajilla, cristalería.</p>
                <p class="text-justify italic">• Cubertería.</p>
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2 text-left align-top min-w-[200px]">
                <p class="text-justify italic font-bold">Bebidas en mesa con alcohol (2)</p>
                <p class="text-justify italic">• Singani Casa Real</p>
                <p class="text-justify italic">• Ron Carta Vieja - Abuelo</p>
                <p class="text-justify italic">• Ron Carta Vieja- Havana</p>
                <p class="text-justify italic">• Ron Solera</p>
              </td>
              <td class="border px-4 py-2 text-left align-top min-w-[200px]">
                <p class="text-justify italic font-bold">Bebidas sin alcohol (canilla libre)</p>
                <p class="text-justify italic">• Gaseosas /hielo/limón/agua</p>
              </td>
              <td class="border px-4 py-2 text-left align-top min-w-[200px]">
                <p class="text-justify italic font-bold">Fondeu de chocolate</p>
                <p class="text-justify italic">• Frutas de temporada</p>
                <p class="text-justify italic">• Mashmelos</p>
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2 text-left align-top min-w-[200px]">
                <p class="text-justify italic font-bold">Montaje</p>
                <p class="text-justify italic">• Mesas, sillas tifany</p>
                <p class="text-justify italic">• Vajilla, cristalería</p>
                <p class="text-justify italic">• Cubertería</p>
              </td>
              <td class="border px-4 py-2 text-left align-top min-w-[200px]">
                <p class="text-justify italic font-bold">Saladitos</p>
                <p class="text-justify italic">• Vajilla, cristalería.</p>
                <p class="text-justify italic">• Cubertería.</p>
              </td>
              <td class="border px-4 py-2 text-left align-top min-w-[200px] personal-atencion">
                <p class="text-justify italic font-bold">Personal de atención</p>
                <p class="text-justify italic">• Coordinador de Eventos</p>
                <p class="text-justify italic">• Garzones</p>
                <p class="text-justify italic">• Personal de seguridad</p>
                <p class="text-justify italic">• Personal de limpieza durante todo el evento</p>
              </td>
            </tr>
            <tr>
              <td colspan="3" class="border px-4 py-2 text-left align-top detalles-plato">
                <p class="text-justify italic font-bold">Detalles del plato servido</p>
                <p class="text-justify italic font-bold">Saladitos</p>
                <p class="text-justify italic">Carnes:</p>
                <p class="text-justify italic">• Peceto relleno/medallón de pollo /filete de cerdo al vino</p>
                <p class="text-justify italic font-bold">Guarniciones:</p>
                <p class="text-justify italic">• Papa salteada al vino/croqueta de yuca/pastel de papa/arroz chifa</p>
                <p class="text-justify italic">Ensaladas</p>
                <p class="text-justify italic">
                  • Salsa waldorf/salsa alemana con millo/salsa griega/ verduras al vapor
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <br /><br />
      <h3 class="text-justify italic font-bold text-center px-4">
        Calcula el Costo Total según el Número de Invitados, previo reunión con el coordinador
      </h3>
      <br />

      <div class="w-full max-w-2xl mx-auto px-4">
        <div class="overflow-x-auto">
          <table class="w-full border-collapse mt-4">
            <thead>
              <tr class="bg-gray-100">
                <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">Detalle</th>
                <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="px-4 py-2 text-base text-white">Cantidad de personas</td>
                <td class="px-4 py-2 text-base text-black font-bold text-600 recuadro">
                  <input
                    type="number"
                    v-model="cantidad"
                    min="0"
                    class="w-full border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </td>
              </tr>
              <tr class="border-b">
                <td class="px-4 py-2 text-sm text-white">Precio Unitario</td>
                <td class="px-4 py-2 text-sm text-white">{{ precioUnitario }} Bs</td>
              </tr>
              <tr>
                <td class="px-4 py-2 text-base text-white">Total</td>
                <td class="px-4 py-2 text-base font-semibold text-white">{{ total }} Bs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
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
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:wght@400;700&family=Great+Vibes&display=swap");

.font-sans {
  font-family: sans-serif;
}

.table-auto {
  max-width: 100%;
  overflow-x: auto;
  background: white;
}

th,
td {
  padding: 10px;
  text-align: center;
  border: 1px solid #ccc;
}

th {
  background-color: #1b1e24;
  color: #d5dde5;
  font-size: 20px;
  font-weight: 500;
}

tr:nth-child(even):hover td {
  background: rgb(78, 80, 102);
  color: #ffffff;
}

tr:nth-child(odd):hover td {
  background: rgb(251, 191, 36);
  color: #000000;
}

.cantidad-personas {
  width: 100%;
  text-align: center;
  border: 2px solid red;
  padding: 5px;
}

@media (max-width: 480px) {
  .responsive-th,
  .responsive-td {
    font-size: 10px;
    padding: 4px;
  }

  .responsive-input {
    width: 40px;
    font-size: 9px;
    padding: 2px;
  }
}

h1,
h2,
h3 {
  font-weight: 700;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 2px;
}

h1 {
  font-size: 2.5rem;
}

.carta1 {
  font-size: 1.5rem;
}

.carta {
  font-size: 1.5rem;
  text-align: center;
}

@media (max-width: 768px) {
  .table-auto {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  th,
  td {
    font-size: 14px;
    padding: 8px;
  }

  h1 {
    font-size: 1.5rem;
  }

  .carta {
    font-size: 1.2rem;
  }

  /* Mantener el diseño original para la mayoría de las celdas */
  .table-auto tbody tr {
    display: flex;
    flex-direction: column;
  }

  .table-auto tbody td {
    width: 100%;
    text-align: left;
  }

  /* Ajuste específico para "Personal de atención" */
  .personal-atencion {
    white-space: normal; /* Permitir que el texto se envuelva */
    min-width: 0; /* Evitar que fuerce un ancho excesivo */
    max-width: 100%; /* Limitar al ancho del contenedor */
  }

  /* Ajuste específico para "Detalles del plato servido" */
  .detalles-plato {
    display: block;
    width: 100%;
    white-space: normal; /* Permitir que el texto se envuelva */
    min-width: 0;
    max-width: 100%;
  }
}

.recuadro {
  color: red;
  border: red 2px solid;
}
</style>