<script setup>
import { ref } from 'vue'
import QuickNote from '../components/QuickNote.vue'

const noteCategory = ref('quickNote')
</script>

<template>
  <div class="p-10 w-full">
    <h1 class="mb-10 font-semibold">Write down your notes</h1>
    <div>
      <h1 class="mb-10">Pick a category</h1>
      <section class="mb-10">
        <label
          class="p-3 border border-solid rounded-md m-3"
          :class="{ 'border-purple-500': noteCategory === 'quickNote' }"
          ><input class="appearance-none" type="radio" value="quickNote" v-model="noteCategory" />
          Quick Notes</label
        >
        <label
          class="p-3 border border-solid rounded-md m-3"
          :class="{ 'border-purple-500': noteCategory === 'tasks' }"
          ><input class="appearance-none" type="radio" value="tasks" v-model="noteCategory" />
          Tasks</label
        >
        <label
          class="p-3 border border-solid rounded-md m-3"
          :class="{ 'border-purple-500': noteCategory === 'journal' }"
          ><input class="appearance-none" type="radio" value="journal" v-model="noteCategory" />
          Journal</label
        >
      </section>
    </div>
    <p class="font-semibold">Category: {{ noteCategory }}</p>

    <div v-if="noteCategory" class="w-full flex justify-center items-center">
      <QuickNote :category="noteCategory" :key="noteCategory" />
    </div>
  </div>
</template>
