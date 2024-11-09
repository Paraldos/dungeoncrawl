<script setup>
import { defineProps, defineEmits } from "vue";

const handleClick = (event) => {
  console.log(event.target.innerHTML);
};
</script>

<template>
  <div class="karten__selector">
    <button @click="handleClick" class="btn-selected">Alle</button>
    <button @click="handleClick">Favoriten</button>
  </div>
</template>

<style>
.karten__selector {
  background-color: var(--color__selector-background);
  padding: 20px;
  border-radius: 4px;
  margin: 20px auto;
  width: 29.7cm;
  display: flex;
  gap: 20px;
  justify-content: end;
}
</style>
