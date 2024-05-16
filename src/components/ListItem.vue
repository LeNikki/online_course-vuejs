<script setup lang="ts">
defineProps({
  id: Number,
  name: String,
  age: Number,
  email: String
})


</script>
<template>
  <div>
    <section className="border-2 w-52 bg-slate-200 m-3 p-5">
      <h3>Sample data</h3>
      <p>Id: {{ id }}</p>
      <p>Name: {{ name }}</p>
      <p>Age: {{ age }}</p>
      <p>Email: {{ email }}</p>
      <button @click="$emit('deleteItem', id)" className="p-3 bg-blue-300">Delete This Item</button>
   
    </section>
  </div>
</template>
