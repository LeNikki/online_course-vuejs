<script setup>
import { onMounted, ref } from 'vue'
import { notesDB } from '../assets/notesDB.ts'

const props = defineProps(['category'])
console.log('Props category: ', props.category)

const myNote = ref({
  title: '',
  body: '',
  category: props.category
})

const addThisNote = () => {
  notesDB.push({
    id: Math.random(),
    title: myNote.value.title,
    body: myNote.value.body,
    category: myNote.value.category
  })
  console.log(notesDB)
}

onMounted(() => console.log('This component has been mounted'))
</script>

<template>
  <form class="flex flex-col justify-center w-full">
    <input
      class="w-full text-center text-4xl p-2 outline-none focus:outline-none"
      type="text"
      name="title"
      placeholder="Title"
      v-model="myNote.title"
    />

    <textarea
      class="mt-10 p-3 h-full outline-none focus:outline-none text-center"
      rows="12"
      placeholder="write down your notes here"
      v-model="myNote.body"
    ></textarea>
    <div class="w-full flex justify-center">
      <button
        @click.prevent="addThisNote"
        class="border border-purple-500 p-3 w-44 hover:text-white hover:bg-purple-500"
      >
        Add this note
      </button>
    </div>
  </form>
</template>
