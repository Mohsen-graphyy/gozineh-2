<template>
  <div
    class="mt-10 flex flex-col items-start md:items-center justify-center space-y-4 py-8 px-4 sm:flex-row sm:space-y-0 md:justify-between lg:px-0"
  >
    <div class="max-w-lg">
      <h1 class="text-2xl font-bold text-gray-800">کتاب‌های کنکور</h1>
      <p class="mt-2 text-gray-600">
        در این صفحه می‌توانید پس از مشاهده کتاب ها . کتاب مورد علاقه خود را به سبد خرید اضافه کرده و
        آنها را خریداری کنید.
      </p>
    </div>
    <button
      class="text-white p-2 rounded-md flex items-center transition duration-150"
      :class="
        store.checkoutSum > 0
          ? 'bg-blue-500 hover:bg-blue-600 cursor-pointer'
          : 'bg-gray-500 cursor-not-allowed'
      "
      @click="openModal"
    >
      <BaseIcon class="w-6 h-6 ml-2" icon-path="Checkout" />
      مشاهده سبد خرید
    </button>
  </div>
  <Transition name="fade">
    <BaseModal v-if="isShowModal" closeable @close-modal="isShowModal = false">
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
                  alt=""
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
            <p>مبلغ قابل پراخت : {{ store.checkoutSum.toLocaleString('en-US') }}</p>
            <button
              class="bg-orange-400 text-white p-2 rounded-md w-full basis-1/2"
              @click="isShowModal = false"
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
  </Transition>
</template>
<script setup>
import { ref } from 'vue'
import { useProductStore } from '@/stores/product'
const store = useProductStore()
const isShowModal = ref(false)
function openModal() {
  if (store.checkoutSum > 0) {
    isShowModal.value = true
  }
}
</script>
