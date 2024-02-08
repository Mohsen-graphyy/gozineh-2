<template>
  <div
    class="relative flex w-full flex-col rounded-lg cursor-pointer border border-gray-100 bg-white shadow-md"
  >
    <div class="relative mx-3 mt-3 flex h-60 rounded-xl">
      <div class="flex justify-center items-center w-full">
        <img class="w-40 h-40" :src="product.image" alt="product image" />
      </div>
      <span
        v-if="product.discountPercentage > 0"
        class="absolute top-0 left-0 m-2 rounded-full bg-amber-600 px-2 text-center text-sm font-medium text-white"
        >{{ product.discountPercentage }}% تخفیف</span
      >
    </div>
    <div class="mt-4 px-5 pb-5">
      <h5 class="text-xl tracking-tight text-slate-900">{{ product.title }}</h5>
      <div class="mt-2 mb-5 flex items-center justify-between">
        <div class="flex items-center">
          <BaseRating :rate="product.rate" />
          <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{{
            product.rate
          }}</span>
        </div>
        <div class="flex flex-col items-end">
          <p class="text-3xl font-bold text-slate-900 flex">
            {{ product.price.toLocaleString('en-US') }}
          </p>

          <div class="flex">
            <p
              v-if="product.discountPercentage > 0"
              class="text-sm text-slate-900 line-through ml-1"
            >
              {{ product.oldPrice.toLocaleString('en-US') }}
            </p>
            <span class="text-sm">تومان</span>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <button
          v-if="product.checkoutMount === 0"
          class="flex items-center justify-center w-full rounded-md bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 transition duration-200"
        >
          <BaseIcon class="w-6 h-6 ml-2" icon-path="Checkout" />
          افزودن به سبد خرید
        </button>
        <div v-else class="flex items-center justify-between w-full gap-4">
          <button
            class="bg-green-100 hover:bg-green-200 w-full flex justify-center p-3 rounded-md transition duration-200"
          >
            <BaseIcon class="w-5 h-5 text-green-400" icon-path="Plus" />
          </button>
          <p class="p-2 border border-solid border-orange-300 rounded-md">
            {{ product.checkoutMount }}
          </p>
          <button
            class="bg-red-100 hover:bg-red-200 w-full flex justify-center p-3 rounded-md transition duration-200"
          >
            <BaseIcon class="w-5 h-5 text-red-400" icon-path="Minus" />
          </button>
          <BaseTooltip placement="top-right">
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
      </div>
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
