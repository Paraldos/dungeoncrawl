<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: Array,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="karte">
    <h2>{{ props.title }}</h2>
    <p>{{ props.type }}</p>
    <ul>
      <li v-for="desc in props.description" :key="desc">{{ desc }}</li>
    </ul>
  </div>
</template>

<style>
.karte {
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 5.9cm;
  height: 9.1cm;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

p {
  margin-bottom: 10px;
  font-weight: bold;
}

ul {
  list-style-type: none;

  li {
    margin-bottom: 5px;
  }
}
</style>
