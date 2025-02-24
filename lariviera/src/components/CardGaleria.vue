<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div
      class="p-6 shadow-lg hover:scale-105 transition-transform duration-600 text-white border-4 border-stone-700"
    >
      <img src="@/assets/img/EpEstandar.jpeg" alt="" class="h-48 w-full" />
      <h3 class="text-xl font-bold text-gray-600 font-serif mt-2 bg-neutral-200">
        15 años
      </h3>
      <p class="text-gray-600 font-serif bg-neutral-100">190 Bs por persona</p>
      <p class="text-gray-600 font-serif bg-neutral-100">
        Querida quinceañera y familia, Es un honor para nosotros ser parte de este momento
        tan especial en sus vidas.
        <router-link to="/paquetes" class="text-sky-600 hover:text-black"
          >Ver a Detalle...</router-link
        >
      </p>
    </div>
    <div
      class="p-6 shadow-lg hover:scale-105 transition-transform duration-600 text-white border-4 border-stone-700"
    >
      <img
        alt=""
        src="https://res.cloudinary.com/dughcx6qb/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1738349302/BodaEstandar_my9r6v.jpg"
        class="h-48 w-full"
      />
      <h3 class="text-xl font-serif font-bold text-gray-600 mt-2 bg-neutral-200">
        Matrimonios
      </h3>
      <p class="text-gray-600 font-serif bg-neutral-100">190 Bs por persona</p>
      <p class="text-gray-600 font-serif bg-neutral-100">
        Estimados novios, Es un placer para nosotros ser parte de este momento tan
        especial en sus vidas.
        <router-link to="/paquetes" class="text-sky-600 hover:text-black"
          >Ver a Detalle...</router-link
        >
      </p>
    </div>
    <div
      class="p-6 shadow-lg hover:scale-105 transition-transform duration-600 text-white border-4 border-stone-700"
    >
      <img src="@/assets/img/EPPlatinum.jpeg" alt="" class="h-48 w-full" />
      <h3 class="text-xl font-bold font-serif mt-2 text-gray-600 bg-neutral-200">
        Varios
      </h3>
      <p class="text-gray-600 font-serif bg-neutral-100">190 Bs por persona</p>
      <p class="text-gray-600 font-serif bg-neutral-100">
        Estimados anfitriones y familia, Es un honor para nosotros ser parte de este
        momento tan especial en sus vidas.
        <router-link to="/paquetes" class="text-sky-600 hover:text-black"
          >Ver a Detalle...</router-link
        >
      </p>
    </div>
  </div>
</template>

