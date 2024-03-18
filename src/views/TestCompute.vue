<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
const customerName = ref('Jane')
const awesome = ref(true)
const notes = ref([
  { id: 1, title: 'Pinocchio', note: 'His nose grew more everytime he answered her questions!' },
  {
    id: 2,
    title: 'Weekend',
    note: 'Things to do: wash laundry, clean room, cook lunch, feed dog.'
  },
  {
    id: 3,
    title: 'Today',
    note: 'Process documents, submit application, revise resume, check emails.'
  }
])

function increment() {
  count.value++
}
function decrement() {
  count.value--
}

const displayGreeting = () => {
  let greeting = 'This is a simple greeting'
  return greeting
}
</script>

<template>
  <div>
    <p class="text-red-400">Hello</p>

    <button @click="increment">+</button>
    <p>{{ count }}</p>
    <button @click="decrement">-</button>

    <div class="w-1/2 bg-slate-300 rounded-lg p-10">
      <p>To-do notes:</p>
      <section>
        <label htmlFor="title">Title: </label>
        <input id="title" class="p-1" />

        <label htmlFor="note">Note: </label>
        <input id="note" type="textarea" class="p-1" />

        <button>Add Note</button>
      </section>
    </div>

    <div class="w-1/2 bg-slate-300 rounded-lg p-10 mt-20">
      <p>Display all notes</p>
      <div :key="note.id" v-for="note in notes">{{ note.title }}</div>
    </div>

    <div>
      <button @click="awesome = !awesome">Toggle</button>

      <h1 v-if="awesome">Vue is awesome!</h1>
      <h1 v-else>Oh no 😢</h1>
    </div>

    <div class="w-1/4 bg-green-300">
      <input v-model="customerName" placeholder="Enter New Name" />
      <button @click="displayGreeting">Display Greeting!</button>
      <p>Hello new member!{{ customerName }}</p>
    </div>
  </div>
</template>
