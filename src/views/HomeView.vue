<template>
  <div class="mx-auto max-w-screen-lg">
    <ProductContainerHeader />
    <ProductDetails />
    <main
      class="grid grid-cols-1 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-2 sm:px-8 lg:mt-16 lg:grid-cols-3 lg:gap-x-4 lg:px-0"
    >
      <ProductCard v-for="product in store.products" :key="product.id" :product="product" />
    </main>
  </div>
</template>

<script setup>
import { useProductStore } from '@/stores/product'
const store = useProductStore()
</script>
