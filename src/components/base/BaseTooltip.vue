<template>
  <div class="group relative inline-block">
    <slot name="content"></slot>
    <div
      class="hidden md:block shadow-gray-200 absolute shadow-md scale-0 pointer-events-none opacity-0 group-hover:scale-100 group-hover:pointer-events-auto group-hover:opacity-100 transition duration-200"
      :class="[placement.includes('top') ? 'bottom-full' : 'top-full']"
    >
      <div
        class="w-0 h-0 border-x-8 border-x-transparent border-solid border-b-8 border-b-hawkes-blue absolute"
        :class="[placement.includes('top') ? 'bottom-full rotate-180' : 'top-full']"
      ></div>
      <div
        class="tooltip-container text-dark rounded-sm text-tiny absolute w-max bg-hawkes-blue p-2.5 z-50"
        :class="[
          placement,
          {
            'overflow-x-auto': hasOverflowXAuto,
            'overflow-y-auto': hasOverflowYAuto
          }
        ]"
      >
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>
<script setup>
import { toRef } from 'vue'

defineOptions({ name: 'BaseTooltip' })

const props = defineProps({
  placement: {
    type: String,
    default: 'bottom-left',
    validator(value) {
      return ['bottom-right', 'bottom-left', 'top-right', 'top-left'].includes(value)
    }
  },
  hasOverflowXAuto: {
    type: Boolean,
    default: false
  },
  hasOverflowYAuto: {
    type: Boolean,
    default: true
  },
  containerWidth: {
    type: String,
    default: 'max-content'
  },
  containerMaxHeight: {
    type: String,
    default: '115px'
  }
})
const containerWidth = toRef(props.containerWidth)
const containerHeight = toRef(props.containerMaxHeight)
</script>
<style scoped>
.tooltip-container {
  width: v-bind(containerWidth);
  max-height: v-bind(containerHeight);
}
.top-right {
  bottom: calc(100% - 2px);
  top: unset;
  left: calc(100% - 30px);
}
.top-left {
  bottom: calc(100% - 2px);
  top: unset;
  right: -15px;
}
.bottom-right {
  top: calc(100% - 2px);
  bottom: unset;
  left: calc(100% - 30px);
}
.bottom-left {
  top: calc(100% - 2px);
  bottom: unset;
  right: -15px;
}
</style>
