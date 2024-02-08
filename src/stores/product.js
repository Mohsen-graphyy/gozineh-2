import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    {
      id: 1,
      title: 'کتاب فارسی دوازدهم سری فرمول بیست',
      discountPercentage: 15,
      price: 229500,
      oldPrice: 270000,
      image: 'images/products/book1.webp',
      rate: 4,
      checkoutMount: 1
    },
    {
      id: 2,
      title: 'کتاب عربی دوازدهم سری فرمول بیست',
      discountPercentage: 15,
      price: 187000,
      oldPrice: 220000,
      image: 'images/products/book2.webp',
      rate: 3.0,
      checkoutMount: 0
    },
    {
      id: 3,
      title: 'کتاب زبان انگلیسی دوازدهم سری فرمول بیست',
      discountPercentage: 15,
      price: 238000,
      oldPrice: 280000,
      image: 'images/products/book3.webp',
      rate: 4.0,
      checkoutMount: 0
    },
    {
      id: 4,
      title: 'کتاب هندسه دوازدهم سری فرمول نوزده',
      discountPercentage: 15,
      price: 221000,
      oldPrice: 260000,
      image: 'images/products/book4.webp',
      rate: 2.0,
      checkoutMount: 0
    },
    {
      id: 5,
      title: 'کتاب شیمی دوازدهم سری فرمول بیست',
      discountPercentage: 0,
      price: 153000,
      oldPrice: 153000,
      image: 'images/products/book5.webp',
      rate: 5.0,
      checkoutMount: 0
    },
    {
      id: 6,
      title: 'کتاب سلامت و بهداشت دوازدهم سری فرمول بیست',
      discountPercentage: 15,
      price: 174250,
      oldPrice: 205000,
      image: 'images/products/book6.webp',
      rate: 4.0,
      checkoutMount: 0
    },
    {
      id: 7,
      title: 'کتاب هویت اجتماعی دوازدهم سری فرمول بیست',
      discountPercentage: 10,
      price: 486000,
      oldPrice: 540000,
      image: 'images/products/book7.webp',
      rate: 5.0,
      checkoutMount: 0
    },
    {
      id: 8,
      title: 'کتاب فیزیک دوازدهم سری فرمول بیست',
      discountPercentage: 15,
      price: 229500,
      oldPrice: 270000,
      image: 'images/products/book8.webp',
      rate: 1.0,
      checkoutMount: 0
    },
    {
      id: 9,
      title: 'کتاب ریاضیات گسسته دوازدهم سری فرمول بیست',
      discountPercentage: 0,
      price: 15300,
      oldPrice: 15300,
      image: 'images/products/book9.webp',
      rate: 3.0,
      checkoutMount: 0
    }
  ])
  const doubleCount = computed(() => products.value * 2)
  function increment() {
    products.value++
  }

  return { products, doubleCount, increment }
})
