<script setup>
import Karte from "./Karte.vue";

const carten = [
  {
    id: 1,
    title: "Title",
    type: "type",
    description: ["Beschreibung 1", "Beschreibung 2"],
  },
  {
    id: 2,
    title: "Title",
    type: "type",
    description: ["Beschreibung 1", "Beschreibung 2"],
  },
  {
    id: 3,
    title: "Title",
    type: "type",
    description: ["Beschreibung 1", "Beschreibung 2"],
  },
  {
    id: 4,
    title: "Title",
    type: "type",
    description: ["Beschreibung 1", "Beschreibung 2"],
  },
  {
    id: 5,
    title: "Title",
    type: "type",
    description: ["Beschreibung 1", "Beschreibung 2"],
  },
];
</script>

<template>
  <section class="karten">
    <Karte
      v-for="karte in carten"
      :key="karte.id"
      :title="karte.title"
      :type="karte.type"
      :description="karte.description"
    />
  </section>
</template>

<style>
.karten {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
}
</style>
