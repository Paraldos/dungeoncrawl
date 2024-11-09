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
    <h3>{{ props.type }}</h3>
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
}

h2 {
  margin-bottom: 10px;
  font-size: 1.2rem;
}

h3 {
  margin-bottom: 10px;
  font-size: 1rem;
}

ul {
  list-style-type: none;
}
</style>
