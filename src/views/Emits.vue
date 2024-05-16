<script setup lang="ts">
import { ref } from 'vue'
const database = ref([
  {
    id: 0,
    name: 'Carl',
    age: 24,
    email: 'carl@gmail.com'
  },
  {
    id: 1,
    name: 'Michelle',
    age: 23,
    email: 'michelle@gmail.com'
  },
  {
    id: 2,
    name: 'Robin',
    age: 26,
    email: 'robin@gmail.com'
  },
  {
    id: 3,
    name: 'Elsa',
    age: 23,
    email: 'elsa@gmail.com'
  },
  {
    id: 4,
    name: 'Jane',
    age: 23,
    email: 'jane@gmail.com'
  },
  {
    id: 5,
    name: 'Veronica',
    age: 25,
    email: 'veronica@gmail.com'
  }
])

const items = ref([
  { id: 1, label: '10 party hats' },
  { id: 2, label: '2 board games' },
  { id: 3, label: '20 cups' }
])

const deleteCard = (id: Number) => {
  console.log('Card Deleted: ', id)
}

const newItem = ref('')
const newItemPriority = ref('low')
const newItemHighPriority = ref('high')
const iceCreamFlavors = ref([])
const cars = ref('volvo')
</script>

<template>
  <div>
    <h1>This is Emits Page</h1>
    <p>We will render here the List Item</p>
    <div>
      <div className="p-3 bg-green-300">
        <form v-on:submit.prevent="items.push({ id: items.length + 1, label: newItem })">
          <p>Input Item:</p>
          <input
            v-model.trim="newItem"
            placeholder="Please enter your new Item: "
            v-on:keyup.enter="items.push({ id: items.length + 1, label: newItem })"
          />
          <p>{{ newItem }}</p>
          <button
            className="p-3 bg-blue-300"
            v-on:click="items.push({ id: items.length + 1, label: newItem })"
          >
            Save item
          </button>

          {{ items }}
        </form>
      </div>
      <label>
        <input type="radio" v-model="newItemPriority" value="low" />
        Low</label
      >
      <label>
        <input type="radio" v-model="newItemPriority" value="high" />
        High</label
      >
      <br />

      {{ newItemPriority }}

      <select v-model="newItemPriority">
        <option value="high">High</option>
        <option value="low">Low</option>
      </select>

      <div>
        <label>
          <input type="checkbox" v-model="newItemHighPriority" />
          High Priority
        </label>
        {{ newItemHighPriority }}
      </div>

      <section>
        <h1>Select ice cream flavors that you like:</h1>
        <label><input type="checkbox" value="vanilla" v-model="iceCreamFlavors" />Vanilla</label>
        <label
          ><input type="checkbox" value="chocolate" v-model="iceCreamFlavors" />Chocolate</label
        >
        <label
          ><input type="checkbox" value="strawberry" v-model="iceCreamFlavors" />Strawberry</label
        >
      </section>
      {{ iceCreamFlavors }}
    </div>
    <ListItem
      v-for="item in database"
      :key="item.id"
      :id="item.id"
      :name="item.name"
      :age="item.age"
      :email="item.email"
      v-on:deleteItem="deleteCard"
    />
  </div>

  <div>
    <select v-model="cars">
      <option value="volvo">Volvo</option>
      <option value="hondaCivic">Honda Civic</option>
      <option value="Suzuki">Suzuki</option>
    </select>

    <p>Choosen car: {{ cars }}</p>
  </div>
</template>
