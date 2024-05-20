<script setup>
import { ref } from 'vue'
const closeBar = ref(false)
</script>

<template>
  <div
    :class="[
      'border-r',
      'shadow-lg',
      'h-screen',
      'border-slate-300',
      'p-5',
      closeBar ? 'w-28' : 'w-52'
    ]"
  >
    <span class="w-full flex flex-row items-center justify-center mr-3"
      ><img src="../assets/courseline.png" class="w-10 mr-3" @click="closeBar = !closeBar" />
      <p v-if="!closeBar" class="text-lg font-semibold">WebNotes</p></span
    >
    <nav :class="[closeBar ? 'w-28' : 'w-52', 'h-full', 'flex', 'flex-col', 'justify-start']">
      <RouterLink
        to="/"
        class="w-44 p-5 text-sm font-semibold hover:text-fuchsia-500 hover:font-bold"
        ><i class="fa-solid fa-house" v-if="closeBar"></i>
        <p v-else>Home</p></RouterLink
      >
      <RouterLink
        to="/writenotes"
        class="w-44 p-5 text-sm font-semibold hover:text-fuchsia-500 hover:font-bold"
        ><i class="fa-solid fa-pen" v-if="closeBar"></i>
        <p v-else>WriteNotes</p></RouterLink
      >
    </nav>
  </div>
  <RouterView />
</template>
