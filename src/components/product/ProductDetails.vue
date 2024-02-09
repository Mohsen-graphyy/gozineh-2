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
    <ProductCheckoutModal v-if="isShowModal" @close-modal="isShowModal = false" />
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
