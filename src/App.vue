<script setup>
import { ref } from "vue";
import Navbar from "@/components/navbar/Navbar.vue";
import Regeln from "./components/regeln/Regeln.vue";
import Charakterbogen from "./components/charakterbogen/Charakterbogen.vue";
import Karten from "./components/karten/Karten.vue";

const pages = ref([
  { title: "Regeln", selected: false },
  { title: "Charakterbogen", selected: false },
  { title: "Karten", selected: true },
]);

const handleUpdateSelected = (index) => {
  pages.value.forEach((page, i) => {
    page.selected = i === index;
  });
};
</script>

<template>
  <Navbar :pages="pages" @update:selected="handleUpdateSelected" />

  <div v-for="page in pages" :key="page.title">
    <div v-if="page.selected">
      <Regeln v-if="page.title === 'Regeln'" />
      <Charakterbogen v-if="page.title === 'Charakterbogen'" />
      <Karten v-if="page.title === 'Karten'" />
    </div>
  </div>
</template>

<style></style>
