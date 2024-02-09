<template>
  <div class="base-modal flex justify-center items-center fixed right-0 left-0 px-5">
    <div class="fixed inset-0 bg-gray-900 bg-opacity-50 z-50" @click="closeOutsideModal"></div>
    <div
      class="base-modal__box relative flex flex-col bg-white shadow-xl rounded-lg w-full p-6 mx-5 overflow-y-auto"
      :class="boxClasses"
    >
      <div
        class="flex items-center w-full"
        :class="[
          { 'flex-row-reverse': !$slots.title || isCloseRight },
          closeable && !isCloseRight ? 'justify-between' : 'justify-end'
        ]"
      >
        <div v-if="$slots.title" class="w-full">
          <slot name="title"></slot>
        </div>
        <button
          v-if="closeable"
          class="bg-transparent cursor-pointer"
          @click="$emit('close-modal')"
        >
          <base-icon icon-path="Close" svg-class="stroke-black w-5 h-5" />
        </button>
      </div>
      <slot name="bodyContent"></slot>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  closeable: {
    type: Boolean,
    default: false
  },
  isOutsideCloseable: {
    type: Boolean,
    default: true
  },
  isCloseRight: {
    type: Boolean,
    default: false
  },
  boxClasses: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['close-modal'])

function closeOutsideModal() {
  if (props.isOutsideCloseable) {
    emit('close-modal')
  }
}
</script>
<style scoped>
.base-modal {
  top: 18%;
  z-index: 99999;
}
.base-modal__box {
  max-height: 80vh;
  max-width: 500px;
  z-index: 101;
}
</style>
