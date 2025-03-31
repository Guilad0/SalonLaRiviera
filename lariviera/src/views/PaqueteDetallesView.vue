<template>
  <div
    class="font-sans bg-[url(https://res.cloudinary.com/dughcx6qb/image/upload/v1741331030/bglariviera_x530xy.jpg)] bg-cover min-h-screen bg-fixed"
  >
    <div class="container mx-auto px-4 pt-24 pb-16">
      <div
        class="mb-10 text-white bg-black bg-opacity-60 inline-block px-5 py-3 rounded-lg shadow-md"
      >
        <router-link
          to="/"
          class="hover:text-amber-400 transition-colors text-decoration-none text-gray-50"
          >Inicio</router-link
        >
        <span class="mx-2">/</span>
        <router-link
          to="/paquetes"
          class="hover:text-amber-400 transition-colors text-decoration-none text-gray-50"
          >Paquetes</router-link
        >
        <span class="mx-2">/</span>
        <span class="text-amber-400 text-decoration-none">{{
          paquete?.nombre || "Detalle"
        }}</span>
      </div>

      <div
        v-if="paquete"
        class="bg-white bg-opacity-95 rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
      >
        <div class="md:flex">
          <div class="md:w-2/5 relative group">
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"
            ></div>
            <img
              :src="paquete.image"
              :alt="paquete.nombre"
              class="w-full h-64 md:h-full object-cover"
            />

            <div class="absolute bottom-0 left-0 right-0 p-4 z-20 text-white">
              <div class="flex items-center mb-2">
                <div class="flex text-amber-400">
                  <span v-for="i in 5" :key="i" class="text-xl">★</span>
                </div>
                <span class="ml-2 text-white/90"
                  >({{ Math.floor(Math.random() * 50) + 50 }} reseñas)</span
                >
              </div>
              <p class="text-sm text-white/80 font-medium">{{ formatearFecha() }}</p>
            </div>
            <div
              class="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-full font-bold shadow-lg"
            >
              {{ paquete.precio }} por persona
            </div>

            <div
              class="absolute top-4 left-4 bg-amber-400 text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg"
            >
              Destacado
            </div>
          </div>
          <div class="p-8 md:w-3/5">
            <h1
              class="text-3xl font-bold mb-2 text-gray-800 border-b-2 border-amber-400 pb-2 inline-block"
            >
              {{ paquete.nombre }}
            </h1>

            <p class="text-gray-700 mb-6 leading-relaxed mt-4">
              {{ paquete.descripcion }}
            </p>

            <div class="border-t border-gray-200 pt-4 mt-6">
              <h2 class="text-xl font-semibold mb-3 flex items-center">
                <span class="text-amber-400 mr-2">✓</span> Incluye:
              </h2>

              <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                <li
                  v-for="(item, index) in serviciosIncluidos"
                  :key="index"
                  class="flex items-start"
                >
                  <span class="text-green-500 mr-2 mt-1">✓</span>
                  <span>{{ item }}</span>
                </li>
              </ul>

              <div class="mt-6">
                <h3 class="text-lg font-medium mb-3 text-gray-800">
                  Información Detallada
                </h3>

                <div class="hidden md:grid grid-cols-3 gap-4">
                  <InfoCard
                    v-for="(servicio, index) in serviciosDetallados"
                    :key="index"
                    :titulo="servicio.titulo"
                    :descripcion="servicio.descripcion"
                    :campoAdicionalNombre="servicio.campoClave"
                    :campoAdicionalValor="servicio.valorCampo"
                    class="transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  />
                </div>

                <div class="md:hidden space-y-4">
                  <InfoCard
                    v-for="(servicio, index) in serviciosDetallados"
                    :key="index"
                    :titulo="servicio.titulo"
                    :descripcion="servicio.descripcion"
                    :campoAdicionalNombre="servicio.campoClave"
                    :campoAdicionalValor="servicio.valorCampo"
                  />
                </div>
              </div>
            </div>
            <div
              class="bg-gradient-to-r from-amber-50 to-gray-50 p-5 rounded-lg border border-amber-200 my-6 shadow-sm"
            >
              <h2 class="text-xl font-semibold mb-4 text-center text-gray-800">
                Cotizador Aproximado
              </h2>

              <div class="mb-5">
                <label for="invitados" class="block text-gray-700 mb-2 font-medium"
                  >Número de invitados:</label
                >
                <div class="flex items-center">
                  <button
                    @click="decrementarInvitados"
                    class="bg-amber-100 hover:bg-amber-200 text-black px-4 py-2 rounded-l-lg font-bold transition-colors"
                  >
                    −
                  </button>
                  <input
                    id="invitados"
                    v-model="numeroInvitados"
                    type="number"
                    min="10"
                    max="300"
                    class="w-full border-amber-200 text-center py-2 border-y focus:ring-amber-400 focus:border-amber-400 text-lg"
                    @input="validarNumeroInvitados"
                  />
                  <button
                    @click="incrementarInvitados"
                    class="bg-amber-100 hover:bg-amber-200 text-black px-4 py-2 rounded-r-lg font-bold transition-colors"
                  >
                    +
                  </button>
                </div>
                <p v-if="errorMensaje" class="text-red-500 text-sm mt-1">
                  {{ errorMensaje }}
                </p>
              </div>

              <div class="rounded-lg border border-amber-200 shadow-sm">
                <div class="hidden md:block">
                  <table class="min-w-full divide-y divide-amber-100">
                    <thead class="bg-black text-white">
                      <tr>
                        <th class="px-4 py-3 text-left text-sm font-medium">Concepto</th>
                        <th class="px-4 py-3 text-right text-sm font-medium">Importe</th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-amber-50">
                      <tr>
                        <td class="px-4 py-3 text-sm">
                          Paquete {{ paquete.nombre }} ({{ numeroInvitados }} personas)
                        </td>
                        <td class="px-4 py-3 text-right font-medium text-gray-800">
                          {{ formatearPrecio(cotizacionBase) }}
                        </td>
                      </tr>
                      <tr class="bg-amber-50">
                        <td class="px-4 py-3 font-bold text-black">Total estimado</td>
                        <td class="px-4 py-3 text-right font-bold text-black text-lg">
                          {{ formatearPrecio(cotizacionTotal) }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="md:hidden">
                  <div class="bg-black text-white px-4 py-3 text-sm font-medium">
                    Resumen de Cotización
                  </div>

                  <div class="p-4 bg-white">
                    <div class="mb-4">
                      <div class="text-gray-600 text-sm mb-1">Concepto:</div>
                      <div>
                        Paquete {{ paquete.nombre }} ({{ numeroInvitados }} personas)
                      </div>
                      <div class="text-gray-600 text-sm mt-2 mb-1">Importe:</div>
                      <div class="font-medium text-gray-800">
                        {{ formatearPrecio(cotizacionBase) }}
                      </div>
                    </div>

                    <div
                      class="mt-4 pt-4 border-t border-amber-100 bg-amber-50 -mx-4 px-4 pb-4"
                    >
                      <div class="text-gray-600 text-sm mb-1">Total estimado:</div>
                      <div class="font-bold text-black text-lg">
                        {{ formatearPrecio(cotizacionTotal) }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p class="text-xs text-gray-500 mt-2 italic text-center">
                *El presupuesto es aproximado. Consulta con nuestros asesores para obtener
                un presupuesto detallado.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href="https://wa.me/59160765655?text=%F0%9F%98%81%22%21Hola%21%20Estoy%20interesado%20en%20su%20sal%C3%B3n%20para%20un%20evento.%20%F0%9F%8D%BE%F0%9F%8C%82%20%3FPodr%C3%ADan%20enviarme%20informaci%C3%B3n%20sobre%20disponibilidad%20%20%F0%9F%93%88%2C%20paquetes%20y%20precios%20%3F%20%21Muchas%20gracias%21%20%21Espero%20su%20respuesta%20pronto%21%20%F0%9F%8E%89%F0%9F%A5%B3%F0%9F%8E%89"
                target="_blank"
                class="text-decoration-none"
              >
                <button
                  class="bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center shadow-md"
                >
                  <span class="mr-2">Reservar Ahora</span>
                  <span>→</span>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div class="p-8 bg-gradient-to-b from-white to-gray-50">
          <h2 class="text-2xl font-bold mb-8 text-center text-gray-800 relative">
            <span class="inline-block pb-2 border-b-2 border-amber-400"
              >Información Adicional</span
            >
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border-t-4 border-amber-400"
            >
              <div class="flex items-center mb-3">
                <span class="text-amber-400 mr-2 text-xl">⏰</span>
                <h3 class="text-xl font-semibold text-black">Horarios</h3>
              </div>
              <p class="text-gray-700">
                Eventos disponibles de 12:00 PM a 2:00 AM. La duración estándar es de 6
                horas, hora adicional con cargo extra.
              </p>
            </div>

            <div
              class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border-t-4 border-amber-400"
            >
              <div class="flex items-center mb-3">
                <span class="text-amber-400 mr-2 text-xl">📝</span>
                <h3 class="text-xl font-semibold text-black">Políticas</h3>
              </div>
              <p class="text-gray-700">
                Reserva con 50% de anticipo. Cancelaciones con 30 días de anticipación
                reciben reembolso del 80%.
              </p>
            </div>

            <div
              class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border-t-4 border-amber-400"
            >
              <div class="flex items-center mb-3">
                <span class="text-amber-400 mr-2 text-xl">✨</span>
                <h3 class="text-xl font-semibold text-black">Personalización</h3>
              </div>
              <p class="text-gray-700">
                Posibilidad de personalizar decoración, menú y servicios adicionales.
                Consulta con nuestros asesores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { usePaquetes } from "@/utils/usePaquetes";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import InfoCard from "@/components/InfoCard.vue";

export default {
  components: { InfoCard },
  setup() {
    const route = useRoute();
    const { getPaqueteBySlug } = usePaquetes();

    const paquete = computed(() => {
      return getPaqueteBySlug(route.params.category, route.params.slug);
    });

    const serviciosPorTipo = {
      boda: [
        {
          titulo: "Plato Servido",
          descripcion:
            "Estandar(Cena un tipo de carne a elección) Gold(Cena dos tipos de carne a elección, Dos ensaladas) Platinum(Cena de tres tipos de carne a eleccion Tres guarniciones a eleccion Ensaladas variedad  ",
        },
        {
          titulo: "Bebidas en mesa con alcohol",
          descripcion:
            " Estandar(Singani Casa Real, Ron Carta Vieja Abuelo, Ron Carta Vieja Havana, Ron Solera) Gold(Whisky de litro J.W/Old etq, Ron Carta Vieja, Ron Solera, Casa Real Negro) Platinum(Whisky de litro. J.W/Old etq. - Ron Carta Vieja - Ron Solera - Vino)",
          duracion: "Evento completo",
        },
        {
          titulo: "Detalles de Plato Servido",
          descripcion:
            "Carnes: Peceto Relleno/Medallón de Pollo/ Filete de Cerdo al Vino  Guarniciones: Papa Salteada al vino/ Croqueta de Yuca/ Pastel de Papa/ Arroz Chaufa  Ensaladas: Salsa Waldorf/ Salsa Alemana con Millo/ Salsa Griega/ Verduras al Vapor",
        },
        {
          titulo: "Brindis",
          descripcion: `Cerezer - P/Platinium(Galletas de Hojaldre)`,
        },
        {
          titulo: "Saladitos",
          descripcion: "Nachos c/palta  P/Platinium(Papas fritas - mani)",
        },

        {
          titulo: "Bebidas sin alcohol (canilla libre)",
          descripcion: "Gaseosas / Hielo / Limon / Agua",
          duracion: "Evento completo",
        },
        {
          titulo: "Montaje",
          duracion: "Evento completo",
          descripcion: "Mesas/Sillas Tiffany -Cubeteria Vajilla y Cristaleria",
        },
        {
          titulo: "Personal de Atención",

          descripcion:
            "Coordinador de Eventos - Garzones - Personal de Seguridad - Personal de Limpieza",
        },

        {
          titulo: "Fondeu de Chocolate",
          descripcion: "Fondeu de chocolate con frutas y malvaviscos",
        },
      ],
      cumpleaños: [
        {
          titulo: "Brindis",
          descripcion: `Cerezer`,
        },
        {
          titulo: "Saladitos",
          descripcion:
            "Nachos c/palta - Pizzetas - Broquetas de cerdo - Tartaletas  - Albondigas",
        },

        {
          titulo: "Bebidas sin alcohol (canilla libre)",
          descripcion: "Gaseosas / Jugos/ Agua",
          duracion: "Evento completo",
        },
        {
          titulo: "Montaje",
          duracion: "Evento completo",
          descripcion: "Mesas/Sillas Vestidas - Cubeteria - Vajilla y Cristaleria",
        },
        {
          titulo: "Personal de Atención",

          descripcion:
            "Coordinador de Eventos - Garzones - Personal de Seguridad - Personal de Limpieza",
        },

        {
          titulo: "Gold-Platinium (Fondeu de Chocolate)",
          descripcion: "Fondeu de chocolate con frutas y malvaviscos",
        },

        {
          titulo: "Amplificación",
          descripcion: "Maestro de Ceremonia",
        },
        {
          titulo: "Platinium(Servicio de Barman)",
          descripcion: "Forzzens - Moctels",
        },
      ],
      corporativo: [
        {
          titulo: "Plato Servido",
          descripcion:
            "Cena un tipo de carne a elección - Dos Guardiciones a elección - Una ensalada ",
        },
        {
          titulo: "Bebidas en mesa con alcohol(1 Trago)",
          descripcion: " 1 Ron Carta Vieja - 1 Singani Casa Real Negro",
        },

        {
          titulo: "Brindis",
          descripcion: `Cerezer`,
        },
        {
          titulo: "Saladitos",
          descripcion: "Papas fritas - mani",
        },

        {
          titulo: "Bebidas sin alcohol (canilla libre)",
          descripcion: "Gaseosas / Jugos/ Agua",
          duracion: "Evento completo",
        },
        {
          titulo: "Montaje",
          duracion: "Evento completo",
          descripcion: "Mesas/Sillas Tiffany -Cubeteria Vajilla y Cristaleria",
        },
        {
          titulo: "Personal de Atención",

          descripcion: "Coordinador de Eventos - Garzones",
        },

        {
          titulo: "Luminotecnia",
          descripcion:
            "25 puntos Luces LED - Instalación de luces - Controlador Digital de Luces",
        },
        {
          titulo: "Detalles de Plato Servido",
          descripcion:
            "Carnes: Peceto Relleno/Medallón de Pollo/ Filete de Cerdo al Vino  Guarniciones: Papa Salteada al vino/ Croqueta de Yuca/ Pastel de Papa/ Arroz Chaufa  Ensaladas: Salsa Waldorf/ Salsa Alemana con Millo/ Salsa Griega/ Verduras al Vapor",
        },
      ],
      default: [
        {
          titulo: "Requerimientos del Salon",
          descripcion:
            "Salon amplio aire acondicionado - 200 Sillas Tiffany - Mesas de Apoyo - Acceso a Baños Equipados - Areas de Jardin Para Descanso : 6000 Bs",
        },
        {
          titulo: "Herramientas Audiovisuales ",
          descripcion: "Pantallas LED - Dos Microfonos : 1800Bs",
        },
        {
          titulo: "Adicional",
          descripcion:
            "Servicio de catering para todo tipo de eventos Censa Gourmet: banquetes, servicios de brunch, mesas dulces, mesas saladas, etc. (según requerimiento).",
        },
        {
          titulo: "Extras",
          descripcion:
            "Amplificación y sonido ambiental, ajustados según los requerimientos del evento - Iluminación personalizada, adaptada a las necesidades del evento - Data display, disponible bajo planificación previa con el coordinador de sonido -Todos los ítems del paquete pueden modificarse coordinando con el administrador del salón.",
        },
      ],
    };

    const serviciosDetallados = computed(() => {
      if (!paquete.value) return serviciosPorTipo["default"];

      const tipoEvento = paquete.value.tipo
        ? paquete.value.tipo.toLowerCase()
        : "default";

      const mapeoTipos = {
        wedding: "boda",
        birthday: "cumpleaños",
        corporate: "corporativo",
      };

      const tipoMapeado = mapeoTipos[tipoEvento] || tipoEvento;

      return serviciosPorTipo[tipoMapeado] || serviciosPorTipo["default"];
    });

    const serviciosIncluidos = [
      "Salón elegantemente decorado",
      "Mesas y sillas con decoración",
      "Música ambiental",
      "Coordinación del evento",
      "Personal de seguridad",
      "Estacionamiento para invitados",
    ];

    const numeroInvitados = ref(50);
    const errorMensaje = ref("");

    const cotizacionBase = computed(() => {
      if (!paquete.value) return 0;

      const precioPorPersona = parseFloat(paquete.value.precio.replace(/[^0-9.]/g, ""));
      return precioPorPersona * numeroInvitados.value;
    });

    const cotizacionTotal = computed(() => {
      return cotizacionBase.value;
    });

    const validarNumeroInvitados = () => {
      const num = parseInt(numeroInvitados.value);
      if (isNaN(num)) {
        numeroInvitados.value = 50;
        errorMensaje.value = "Por favor ingresa un número válido";
        return;
      }

      if (num < 10) {
        numeroInvitados.value = 10;
        errorMensaje.value = "El mínimo de invitados es 10";
      } else if (num > 300) {
        numeroInvitados.value = 300;
        errorMensaje.value = "El máximo de invitados es 300";
      } else {
        errorMensaje.value = "";
      }
    };

    const incrementarInvitados = () => {
      if (numeroInvitados.value < 300) {
        numeroInvitados.value++;
        errorMensaje.value = "";
      }
    };

    const decrementarInvitados = () => {
      if (numeroInvitados.value > 10) {
        numeroInvitados.value--;
        errorMensaje.value = "";
      }
    };

    const formatearPrecio = (valor) => {
      return `$${valor.toLocaleString("es-MX")}`;
    };

    const formatearFecha = () => {
      const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ];
    };

    const abrirModalContacto = () => {
      alert("Función de contacto: Esta funcionalidad se implementará próximamente");
    };

    return {
      paquete,
      serviciosIncluidos,
      numeroInvitados,
      errorMensaje,
      cotizacionBase,
      cotizacionTotal,
      validarNumeroInvitados,
      incrementarInvitados,
      decrementarInvitados,
      formatearPrecio,
      formatearFecha,
      abrirModalContacto,
      serviciosDetallados,
    };
  },
};
</script>
