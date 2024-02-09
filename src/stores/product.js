import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = reactive([
    {
      id: 0,
      title: 'کتاب فارسی دوازدهم سری فرمول بیست',
      discountPercentage: 15,
      price: 229500,
      oldPrice: 270000,
      image: 'images/products/book1.webp',
      rate: 4,
      checkoutMount: 0
    },
    {
      id: 1,
      title: 'کتاب عربی دوازدهم سری فرمول بیست',
      discountPercentage: 15,
      price: 187000,
      oldPrice: 220000,
      image: 'images/products/book2.webp',
      rate: 3.0,
      checkoutMount: 0
    },
    {
      id: 2,
      title: 'کتاب زبان انگلیسی دوازدهم سری فرمول بیست',
      discountPercentage: 15,
      price: 238000,
      oldPrice: 280000,
      image: 'images/products/book3.webp',
      rate: 4.0,
      checkoutMount: 0
    },
    {
      id: 3,
      title: 'کتاب هندسه دوازدهم سری فرمول نوزده',
      discountPercentage: 15,
      price: 221000,
      oldPrice: 260000,
      image: 'images/products/book4.webp',
      rate: 2.0,
      checkoutMount: 0
    },
    {
      id: 4,
      title: 'کتاب شیمی دوازدهم سری فرمول بیست',
      discountPercentage: 0,
      price: 153000,
      oldPrice: 153000,
      image: 'images/products/book5.webp',
      rate: 5.0,
      checkoutMount: 0
    },
    {
      id: 5,
      title: 'کتاب سلامت و بهداشت دوازدهم سری فرمول بیست',
      discountPercentage: 15,
      price: 174250,
      oldPrice: 205000,
      image: 'images/products/book6.webp',
      rate: 4.0,
      checkoutMount: 0
    },
    {
      id: 6,
      title: 'کتاب هویت اجتماعی دوازدهم سری فرمول بیست',
      discountPercentage: 10,
      price: 486000,
      oldPrice: 540000,
      image: 'images/products/book7.webp',
      rate: 5.0,
      checkoutMount: 0
    },
    {
      id: 7,
      title: 'کتاب فیزیک دوازدهم سری فرمول بیست',
      discountPercentage: 15,
      price: 229500,
      oldPrice: 270000,
      image: 'images/products/book8.webp',
      rate: 1.0,
      checkoutMount: 0
    },
    {
      id: 8,
      title: 'کتاب ریاضیات گسسته دوازدهم سری فرمول بیست',
      discountPercentage: 0,
      price: 15300,
      oldPrice: 15300,
      image: 'images/products/book9.webp',
      rate: 3.0,
      checkoutMount: 0
    }
  ])
  const checkoutSum = computed(() => {
    return products.reduce((sum, product) => sum + product.price * product.checkoutMount, 0)
  })
  const checkoutProducts = computed(() => {
    return products.filter((product) => product.checkoutMount > 0)
  })
  function changeCheckoutMount(selectedProduct, changeMode) {
    const product = findProduct(selectedProduct)
    if (product) {
      products[product.id].checkoutMount += 1 * changeMode
    }
  }
  function makeEmptyCheckout(selectedProduct) {
    const product = findProduct(selectedProduct)
    if (product) {
      products[product.id].checkoutMount = 0
    }
  }
  function findProduct(selectedProduct) {
    return products.find((product) => product.id === selectedProduct.id)
  }

  return { products, checkoutSum, checkoutProducts, changeCheckoutMount, makeEmptyCheckout }
})
