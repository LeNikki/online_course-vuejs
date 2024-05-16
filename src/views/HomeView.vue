<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { notesDB } from '../assets/notesDB'
const allNotes = ref(notesDB)
const quickNotes = allNotes.value.filter((noteObj) => noteObj.category == 'quickNote')
const tasks = allNotes.value.filter((noteObj) => noteObj.category == 'tasks')
const journal = allNotes.value.filter((noteObj) => noteObj.category == 'journal')
const router = useRouter()
console.log(allNotes)
console.log('All quicknotes: ', quickNotes)

const editPage = (dataID) => {
  router.push({ path: `/editNote`, query: { currentDataID: dataID } })
}
</script>

<template>
  <div class="w-full">
    <div class="flex items-center">
      <img src="../assets/courseline.png" class="w-12 m-5" />
      <h2 class="font-bold text-xl">WebNotes</h2>
    </div>
    <div class="w-90 p-7 m-5 font-semibold border-b border-slate-300">Notes dashboard</div>
    <h1 class="pl-12 mb-10">Quick Notes</h1>
    <div class="flex justify-around items-center">
      <div
        :key="item.id"
        v-for="item in quickNotes"
        class="p-5 w-22 border flex flex-col items-center rounded-lg hover:border-fuchsia-500"
        @click="editPage(item.id)"
      >
        <p class="font-semibold pt-3">{{ item.title }}</p>
      </div>
    </div>
    <h1 class="pl-12 mb-10 mt-10">Tasks</h1>
    <div class="flex justify-around items-center">
      <div
        :key="item.id"
        v-for="item in tasks"
        class="p-5 w-22 border flex flex-col items-center rounded-lg hover:border-fuchsia-500"
      >
        <img src="../assets/courseImage.png" class="w-44" />
        <p class="font-semibold pt-3">{{ item.title }}</p>
      </div>
    </div>
    <h1 class="pl-12 mb-10 mt-10">Journal</h1>
    <div class="flex justify-around items-center">
      <div
        :key="item.id"
        v-for="item in journal"
        class="p-5 w-22 border flex flex-col items-center rounded-lg hover:border-fuchsia-500"
      >
        <img src="../assets/courseImage.png" class="w-44" />
        <p class="font-semibold pt-3">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>
