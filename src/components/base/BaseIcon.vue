<template>
  <component :is="icon"></component>
</template>

<script setup>
import { defineAsyncComponent, shallowRef, watchEffect } from 'vue'

defineOptions({
  name: 'BaseIcon'
})

const props = defineProps({
  iconPath: {
    type: String,
    required: true
  }
})

const icon = shallowRef(null)
watchEffect(() => {
  icon.value = defineAsyncComponent(() => import(`@/components/icons/Icon${props.iconPath}.vue`))
})
</script>
