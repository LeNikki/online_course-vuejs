<script setup>
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import { notesDB } from '../assets/notesDB'
const router = useRoute()
const dataID = router.query.currentDataID

const currentData = notesDB.find((data) => data.id == dataID)
console.log('CurrentData: ', currentData)
const newData = reactive({
  id: currentData.id,
  title: currentData.title,
  content: currentData.content
})
</script>

<template>
  <div class="w-full pt-10">
    <form class="flex flex-col justify-center w-full">
      <input
        class="w-full text-center text-4xl p-2 outline-none focus:outline-none"
        type="text"
        name="title"
        placeholder="Title"
        v-model="newData.title"
      />

      <textarea
        class="mt-10 p-3 h-full outline-none focus:outline-none text-center"
        rows="12"
        placeholder="write down your notes here"
        v-model="newData.content"
      ></textarea>
      <div class="w-full flex justify-center">
        <button class="border border-purple-500 p-3 w-44 hover:text-white hover:bg-purple-500">
          Update this note
        </button>
      </div>
    </form>
  </div>
</template>
