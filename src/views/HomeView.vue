<template>
  <div class="mx-auto max-w-screen-lg">
    <ProductContainerHeader />
    <ProductDetails />
    <main
      class="grid grid-cols-1 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-2 sm:px-8 lg:mt-16 lg:grid-cols-3 lg:gap-x-4 lg:px-0"
    >
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const products = ref([
  {
    id: 1,
    title: 'کتاب فارسی دوازدهم سری فرمول بیست',
    discountPercentage: 15,
    price: 229500,
    oldPrice: 270000,
    image: 'images/products/book1.webp',
    rate: 4.5
  },
  {
    id: 2,
    title: 'کتاب عربی دوازدهم سری فرمول بیست',
    discountPercentage: 15,
    price: 187000,
    oldPrice: 220000,
    image: 'images/products/book2.webp',
    rate: 3
  },
  {
    id: 3,
    title: 'کتاب زبان انگلیسی دوازدهم سری فرمول بیست',
    discountPercentage: 15,
    price: 238000,
    oldPrice: 280000,
    image: 'images/products/book3.webp',
    rate: 4.5
  },
  {
    id: 4,
    title: 'کتاب هندسه دوازدهم سری فرمول نوزده',
    discountPercentage: 15,
    price: 221000,
    oldPrice: 260000,
    image: 'images/products/book4.webp',
    rate: 4.5
  },
  {
    id: 5,
    title: 'کتاب شیمی دوازدهم سری فرمول بیست',
    discountPercentage: 0,
    price: 153000,
    oldPrice: 153000,
    image: 'images/products/book5.webp',
    rate: 4.5
  },
  {
    id: 6,
    title: 'کتاب سلامت و بهداشت دوازدهم سری فرمول بیست',
    discountPercentage: 15,
    price: 174250,
    oldPrice: 205000,
    image: 'images/products/book6.webp',
    rate: 4.5
  },
  {
    id: 7,
    title: 'کتاب هویت اجتماعی دوازدهم سری فرمول بیست',
    discountPercentage: 10,
    price: 486000,
    oldPrice: 540000,
    image: 'images/products/book7.webp',
    rate: 4.5
  },
  {
    id: 8,
    title: 'کتاب فیزیک دوازدهم سری فرمول بیست',
    discountPercentage: 15,
    price: 229500,
    oldPrice: 270000,
    image: 'images/products/book8.webp',
    rate: 4.5
  },
  {
    id: 9,
    title: 'کتاب ریاضیات گسسته دوازدهم سری فرمول بیست',
    discountPercentage: 0,
    price: 15300,
    oldPrice: 15300,
    image: 'images/products/book9.webp',
    rate: 4.5
  }
])
</script>
