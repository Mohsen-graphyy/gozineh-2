<template>
  <div class="flex items-center justify-between w-full gap-4">
    <button
      class="bg-green-100 hover:bg-green-200 w-full flex justify-center p-3 rounded-md transition duration-200"
      @click="store.changeCheckoutMount(product, 1)"
    >
      <BaseIcon class="w-5 h-5 text-green-400" icon-path="Plus" />
    </button>
    <p class="p-2 border border-solid border-orange-300 rounded-md">
      {{ product.checkoutMount }}
    </p>
    <button
      class="bg-red-100 hover:bg-red-200 w-full flex justify-center p-3 rounded-md transition duration-200"
      @click="store.changeCheckoutMount(product, -1)"
    >
      <BaseIcon class="w-5 h-5 text-red-400" icon-path="Minus" />
    </button>
    <BaseTooltip placement="top-right" @click="store.makeEmptyCheckout(product)">
      <template v-slot:content>
        <BaseIcon
          class="w-5 h-5 text-red-400 hover:scale-110 transition duration-200"
          icon-path="Trash"
        />
      </template>
      <template v-slot:body>
        <p class="bg-gray-200 p-2 rounded-md">حذف محصول از سبد خرید</p>
      </template>
    </BaseTooltip>
  </div>
</template>
<script setup>
import { useProductStore } from '@/stores/product'
const store = useProductStore()
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>
