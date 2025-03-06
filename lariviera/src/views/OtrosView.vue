<template>
   <div
    class="overflow-x-auto w-full font-sans bg-[url('https://media.istockphoto.com/id/938870836/photo/gold-glittering-star-light-and-bokeh-magic-dust-abstract-background-element-for-your-product.jpg?s=2048x2048&w=is&k=20&c=V9Z6q3MNwW-KQxoZi4TW6gqMKW0uQgQZHGTKwoGzVjU=')] bg-cover">
    <div class="m-5 p-2.5 font-serif text-2xl" style="font-family: 'Comfortaa', sans-serif;">
      <h1 class="text-1xl font-[Mode G] text-center">Detalles del Evento de Empresa: {{ paqueteId }}</h1>

      <h2 class="text-justify  carta px-4">
        "Estimados organizadores y equipo, Es un honor para nosotros ser parte de su próximo evento. En nombre del
        <b>Salón de Eventos La Riviera</b>, nos especializamos en crear experiencias
        memorables, brindando un servicio impecable y cuidando cada detalle para garantizar
        el éxito de su reunión. A continuation, les presentamos nuestra propuesta de
        cotización, diseñada para adaptarse a sus necesidades y hacer de su evento
        corporativo, seminario o disertación una experiencia profesional y enriquecedora.
        Quedamos atentos a cualquier consulta o ajuste que deseen realizar. Será un placer
        acompañarlos en la organización de este importante encuentro."
      </h2>

      <h3 class="underline text-center carta1 px-4">
        A continuación, detallamos los servicios y opciones incluidas en nuestra cotización,
        diseñados para cubrir todas las necesidades de su evento empresarial, seminario o
        disertación, garantizando una experiencia profesional y exitosa.
      </h3>

      <div class="overflow-x-auto">
        <table class="table-auto w-full border-collapse mt-4">
          <tbody>
            <!-- Fila una -->
            <tr>
              <td colspan="3" class="border px-4 py-2 text-left align-top">
                <p class="text-justify italic font-bold">REQUERIMIENTO DE SALÓN</p>
                <ul>
                  <li class="text-justify italic">♦ SALÓN AMPLIO AIRE ACONDICIONADO</li>
                  <li class="text-justify italic">♦ 200 SILLAS TIFFANY</li>
                  <li class="text-justify italic">♦ MESAS DE APOYO</li>
                  <li class="text-justify italic">♦ ACCESO A BAÑOS EQUIPADOS</li>
                  <li class="text-justify italic">♦ ÁREAS DE JARDÍN PARA DESCANSO</li>
                </ul>

              </td>
            </tr>
            <tr>
              <td class="px-4 py-2 text-right align-top font-bold italic w-1/6 whitespace-nowrap">
                6000 Bs.
              </td>
            </tr>
            <!-- Fila 2 -->
            <tr>
              <td colspan="3" class="border px-4 py-2 text-left align-top">
                <p class="text-justify italic font-bold">HERRAMIENTAS AUDIOVISUALES</p>
                <ul>
                  <li class="text-justify italic">♦ PANTALLA LED</li>
                  <li class="text-justify italic">♦ SONIDO DOS MICRÓFONOS</li>
                </ul>

              </td>
            </tr>
            <tr>
              <td class="px-4 py-2 text-right align-top font-bold italic w-1/4">
                1800 Bs.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Sección Adicional -->

      <br /><br />
      <h3 class="text-center carta1 px-4">
        <p class="text-justify italic font-bold">ADICIONAL: </p>
        <ul>
          <li class="text-justify italic">♦ Servicio de catering para todo tipo de eventos Censa Gourmet: banquetes,
            servicios de brunch, mesas dulces, mesas saladas, etc. (según requerimiento).</li>

        </ul>
      </h3>

      <!-- Sección Extras -->

      <br /><br />
      <h3 class="text-center carta1 px-4">
        <p class="text-justify italic font-bold">EXTRAS: </p>
        <ul>
          <li class="text-justify italic">♦ Amplificación y sonido ambiental, ajustados según los requerimientos del
            evento.</li>
          <li class="text-justify italic">♦ Iluminación personalizada, adaptada a las necesidades del evento.</li>
          <li class="text-justify">
            ♦ Data display, disponible bajo planificación previa con el coordinador de sonido.
          </li>
        </ul>
      </h3>
      <br />







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
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:wght@400;700&family=Great+Vibes&display=swap');

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
  color: #D5DDE5;
  font-size: 20px;
  font-weight: 500;
}

tr:nth-child(even):hover td {
  background: rgb(78, 80, 102);
  /* Gris oscuro */
  color: #FFFFFF;
}

tr:nth-child(odd):hover td {
  background: rgb(251, 191, 36);
  /* Amber-400 */
  color: #000000;
  /* Para que el texto sea visible en amarillo */
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
    /* Ajuste adicional para pantallas muy pequeñas */
    font-size: 9px;
    padding: 2px;
  }
}


h1,
h2,
h3 {
  /* font-family: 'Playfair Display', serif; */
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
  /* font-family: 'Great Vibes', cursive; */
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

  .table-auto tbody tr {
    display: flex;
    flex-direction: column;
  }

  .table-auto tbody td {
    width: 100%;
    text-align: left;
  }

  .table-auto tbody td:before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
}

.recuadro {

  color: red;
  border: red 2px solid;
}
</style>