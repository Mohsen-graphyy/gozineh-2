<template>
  <BaseModal closeable @close-modal="$emit('close-modal')">
    <template v-slot:title>
      <p>تکمیل سبد خرید</p>
    </template>
    <template v-slot:bodyContent>
      <div v-if="store.checkoutSum > 0">
        <div class="flex flex-col gap-4 mt-8 text-right">
          <div
            v-for="checkoutProduct in store.checkoutProducts"
            :key="checkoutProduct.id"
            class="p-2 rounded-md border border-solid"
          >
            <div class="flex flex-col gap-2 md:gap-0 md:flex-row md:items-center">
              <img
                :src="checkoutProduct.image"
                :alt="checkoutProduct.title"
                class="w-20 h-20 rounded-md border border-solid ml-2"
              />
              <p>{{ checkoutProduct.title }}</p>
              <ProductCheckoutBox class="md:w-1/2" :product="checkoutProduct" />
            </div>
          </div>
        </div>
        <div
          class="sticky -bottom-6 mt-2 border-t border-solid bg-white py-2 flex justify-between items-center"
        >
          <p>مبلغ قابل پراخت : {{ store.checkoutSum.toLocaleString('en-US') }} تومان</p>
          <button
            class="bg-orange-400 text-white p-2 rounded-md w-full basis-1/2"
            @click="$emit('close-modal')"
          >
            پرداخت
          </button>
        </div>
      </div>
      <div
        v-else
        class="flex mt-8 justify-center items-center bg-orange-100 text-orange-400 p-10 rounded-md"
      >
        سبد خرید شما عین جیب ما خالیست :(
      </div>
    </template>
  </BaseModal>
</template>
<script setup>
import { useProductStore } from '@/stores/product'
const store = useProductStore()
defineEmits(['close-modal'])
</script>
