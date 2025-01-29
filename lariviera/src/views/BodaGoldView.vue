<template>
    <div>
      <h1>Detalles del Paquete Goldsssssssssss: {{ paqueteId }}</h1>
      <!-- Aquí puedes cargar la información del paquete usando el id -->
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'], // Recibe el id como prop
    computed: {
      paqueteId() {
        return this.id;
      }
    },
    // Aquí podrías hacer una llamada a una API o cargar los datos de la imagen, precio, etc.
  };
  </script>
  