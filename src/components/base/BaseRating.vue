<template>
  <div class="flex flex-row-reverse w-max items-center">
    <BaseIcon
      v-for="n in quantity"
      :key="n"
      icon-path="Star"
      :class="n <= activeStars ? 'h-5 w-5 text-yellow-300' : 'h-5 w-5 text-gray-300'"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
defineOptions({ name: 'CourseRating' })

const props = defineProps({
  rate: { type: Number, default: 0 },
  quantity: { type: Number, default: 5 }
})

const activeStars = computed(() => Math.round(props.rate))
</script>
