<template>
  <div class="p-4 border rounded-lg bg-white shadow-sm">
    <div class="font-medium text-gray-900 mb-1">{{ titulo }}</div>
    <div class="text-sm text-gray-500 mb-2">Descripción:</div>
    <div class="text-sm text-gray-700 mb-2">{{ descripcion }}</div>
  </div>
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    titulo: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    campoAdicionalNombre: {
      type: String,
      default: "Duración",
    },
    campoAdicionalValor: {
      type: String,
      required: true,
    },
  },
};
</script>
