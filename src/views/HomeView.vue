<script setup lang="ts">
const courses = [
  {
    id: 0,
    title: 'Fundamentals of C'
  },
  {
    id: 1,
    title: '97 Things Every Programmer Should Know'
  },
  {
    id: 2,
    title: 'Clean Code'
  }
]
</script>

<template>
  <div class="w-full h-22">
    <div class="w-90 bg-violet-400 p-7 font-bold m-5 rounded-lg">Courses Dashboard</div>
    <div>
      <li :key="course.id" v-for="course in courses" class="p-5">{{ course.title }}</li>
    </div>
  </div>
</template>
