<script setup lang="ts">
const emits = defineEmits(['counterBy2', 'decrementBy2'])

const emitFunction = () => {
  emits('counterBy2', 2)
}
</script>

<template>
  <button @click="emitFunction" class="p-3 bg-purple-500 text-white">Increment by 2</button>
</template>
