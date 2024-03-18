<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
const close = ref(false)
</script>

<template>
  <div :class="['h-screen', 'p-5', 'bg-violet-200', close ? 'w-28' : 'w-52']">
    <span class="flex flex-row items-center justify-center mr-3"
      ><i class="fa-solid fa-bars text-xl hover:text-violet-900" @click="close = !close"></i>
      <p v-if="!close" class="text-lg">Online Course</p></span
    >
    <nav class="w-52 h-full flex flex-col justify-start">
      <RouterLink to="/" class="w-44 p-5 text-lg hover:text-violet-900 hover:font-bold"
        ><i class="fa-solid fa-house" v-if="close"></i>
        <p v-else>Home</p></RouterLink
      >
      <RouterLink to="/about" class="w-44 p-5 text-lg hover:text-violet-900 hover:font-bold"
        ><i class="fa-solid fa-address-card" v-if="close"></i>
        <p v-else>About</p></RouterLink
      >
      <RouterLink to="/test-compute" class="w-44 p-5 text-lg hover:text-violet-900 hover:font-bold"
        ><i class="fa-solid fa-newspaper" v-if="close"></i>
        <p v-else>Form</p>
      </RouterLink>
    </nav>
  </div>
  <RouterView />
</template>
