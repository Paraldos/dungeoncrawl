<script setup>
import { ref } from "vue";
import Navbar from "@/components/navbar/Navbar.vue";

const pages = ref([
  { title: "Regeln", selected: true },
  { title: "Charakterbogen", selected: false },
  { title: "Karten", selected: false },
]);

const handleUpdateSelected = (index) => {
  pages.value.forEach((page, i) => {
    page.selected = i === index;
  });
};
</script>

<template>
  <Navbar :pages="pages" @update:selected="handleUpdateSelected" />
</template>

<style></style>
