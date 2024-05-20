<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import { notesDB } from '../assets/notesDB'
const allNotes = ref(notesDB)
const quickNotes = computed(() =>
  allNotes.value.filter((noteObj) => noteObj.category == 'quickNote')
)
const tasks = computed(() => allNotes.value.filter((noteObj) => noteObj.category == 'tasks'))
const journal = computed(() => allNotes.value.filter((noteObj) => noteObj.category == 'journal'))
const router = useRouter()
const editItems = ref(false)
const checkedItems = ref([])
console.log(editItems.value)
const editPage = (dataID) => {
  router.push({ path: `/editNote`, query: { currentDataID: dataID } })
}
watch(
  checkedItems,
  (newVal, oldVal) => {
    console.log('Checked Items: ', newVal)
  },
  { deep: true }
)

const deleteItems = () => {
  const res = confirm('Are you sure you want to delete these items?')
  console.log(res)
  if (res) {
    const updatedNotesList = notesDB.filter(
      (item) => !checkedItems.value.some((checkedItem) => checkedItem === item.id)
    )
    notesDB.length = 0
    notesDB.push(...updatedNotesList)

    allNotes.value = updatedNotesList
  }
}
</script>

<template>
  <div class="w-full">
    <div class="flex items-center">
      <img src="../assets/courseline.png" class="w-12 m-5" />
      <h2 class="font-bold text-xl">WebNotes</h2>
    </div>
    <h1 class="w-90 pl-10 pb-5 font-semibold border-b border-slate-300">Notes dashboard</h1>
    <span class="float-right mr-5">
      <button class="font-semibold p-5" @click="editItems = !editItems">
        {{ editItems ? 'Cancel' : 'Edit' }}
      </button>
      <button v-if="editItems" class="bg-red-500 p-3 text-white" @click="deleteItems">
        Delete
      </button>
    </span>

    <h1 class="pl-12 pt-5 mb-10 font-semibold">Quick Notes</h1>
    <div class="pl-10 pr-10 grid grid-cols-5 gap-3 justify-around items-center">
      <div :key="item.id" v-for="item in quickNotes" class="flex justify-center">
        <p
          @click="editPage(item.id)"
          class="font-semibold p-5 w-full border border-fuchsia-500/50 flex flex-col items-center rounded-lg hover:border-2 hover:border-fuchsia-500 hover:shadow hover:shadow-lg"
        >
          {{ item.title }}
        </p>
        <input
          v-if="editItems"
          type="checkbox"
          class="ml-3"
          v-model="checkedItems"
          :value="item.id"
        />
      </div>
    </div>
    <h1 class="pl-12 mb-10 mt-10">Tasks</h1>
    <div class="pl-10 pr-10 justify-around items-center grid grid-cols-5 gap-3">
      <div :key="item.id" v-for="item in tasks" class="flex justify-center">
        <p
          @click="editPage(item.id)"
          class="font-semibold p-5 w-22 border flex flex-col border-blue-500/50 items-center rounded-lg hover:border-2 hover:border-blue-500 hover:shadow hover:shadow-lg"
        >
          {{ item.title }}
        </p>
        <input
          v-if="editItems"
          type="checkbox"
          class="ml-3"
          :value="item.id"
          v-model="checkedItems"
        />
      </div>
    </div>
    <h1 class="pl-12 mb-10 mt-10">Journal</h1>
    <div class="pl-10 pr-10 pb-10 grid grid-cols-5 gap-3 justify-around items-center">
      <div :key="item.id" v-for="item in journal" class="flex justify-center">
        <p
          @click="editPage(item.id)"
          class="font-semibold p-5 w-22 border flex flex-col border-green-500/50 items-center rounded-lg hover:border-2 hover:border-green-500 hover:shadow hover:shadow-lg"
        >
          {{ item.title }}
        </p>
        <input
          v-if="editItems"
          type="checkbox"
          class="ml-3"
          v-model="checkedItems"
          :value="item.id"
        />
      </div>
    </div>
  </div>
</template>
