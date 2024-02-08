<template>
  <div class="relative flex w-full flex-col rounded-lg border border-gray-100 bg-white shadow-md">
    <div class="relative mx-3 mt-3 flex h-60 rounded-xl">
      <div class="flex justify-center items-center w-full">
        <img class="w-40 h-40" :src="product.image" alt="product image" />
      </div>
      <span
        class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white"
        >39% تخفیف</span
      >
    </div>
    <div class="mt-4 px-5 pb-5">
      <h5 class="text-xl tracking-tight text-slate-900">{{ product.title }}</h5>
      <div class="mt-2 mb-5 flex items-center justify-between">
        <div class="flex items-center">
          <BaseRating :rate="product.rate" />
          <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold"
            >5.0</span
          >
        </div>
        <p>
          <span class="text-3xl font-bold text-slate-900">200000</span>
          <span class="text-sm text-slate-900 line-through">$699</span>
        </p>
      </div>
      <a
        href="#"
        class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="mr-2 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        افزودن به سبد خرید</a
      >
    </div>
  </div>
</template>
<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>
