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
  {
    id: 6,
    title: "Title",
    type: "type",
    description: ["Beschreibung 1", "Beschreibung 2"],
  },
  {
    id: 7,
    title: "Title",
    type: "type",
    description: ["Beschreibung 1", "Beschreibung 2"],
  },
  {
    id: 8,
    title: "Title",
    type: "type",
    description: ["Beschreibung 1", "Beschreibung 2"],
  },
  {
    id: 9,
    title: "Title",
    type: "type",
    description: ["Beschreibung 1", "Beschreibung 2"],
  },
  {
    id: 10,
    title: "Title",
    type: "type",
    description: ["Beschreibung 1", "Beschreibung 2"],
  },
  {
    id: 11,
    title: "Title",
    type: "type",
    description: ["Beschreibung 1", "Beschreibung 2"],
  },
];

const groupCards = (cards, groupSize) => {
  const groups = [];
  for (let i = 0; i < cards.length; i += groupSize) {
    groups.push(cards.slice(i, i + groupSize));
  }
  return groups;
};

const groupedCards = groupCards(carten, 8);
</script>

<template>
  <div>
    <section v-for="(group, index) in groupedCards" :key="index" class="karten">
      <Karte
        v-for="karte in group"
        :key="karte.id"
        :title="karte.title"
        :type="karte.type"
        :description="karte.description"
      />
    </section>
  </div>
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
