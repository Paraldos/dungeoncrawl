<script setup>
import { defineEmits } from "vue";
import Karte from "./Karte.vue";
import Selector from "./Selector.vue";

const karten = [
  {
    id: 1,
    title: "Schwert",
    type: "Werkzeug",
    description: ["+W6 auf Nahkampf Attacken"],
  },
  {
    id: 2,
    title: "Bogen",
    type: "Werkzeug",
    description: ["+W6 auf Fernkampf Attacken"],
  },
  {
    id: 3,
    title: "Axt",
    type: "Werkzeug",
    description: ["+W6 auf Nahkampf Attacken"],
  },
  {
    id: 4,
    title: "Kettenhemd",
    type: "Werkzeug",
    description: ["+W6 auf Verteidigung"],
  },
  {
    id: 5,
    title: "Heiltrank",
    type: "Konsumgut",
    description: ["Heilt 1 TP"],
  },
  {
    id: 6,
    title: "Wuchtiger Schlag",
    type: "Rune",
    description: ["+2 auf eine Nahkampf Attacke"],
  },
  {
    id: 7,
    title: "Vorräte",
    type: "Konsumgut",
    description: [
      "Klassische Abenteurer Ausrüstung wie z.B. Fackeln, Seile, oder Vorräte",
      "Hat 3 Ladungen und jede Benutzung verbraucht eine Ladung",
      "◯ ◯ ◯",
    ],
  },
];

const emits = defineEmits(["update:selected"]);

const handleUpdateSelected = (index) => {
  karten[index].selected = !karten[index].selected || true;
};

const getGroupsOfCards = (cards, groupSize) => {
  const groups = [];
  for (let i = 0; i < cards.length; i += groupSize) {
    groups.push(cards.slice(i, i + groupSize));
  }
  return groups;
};

const groupsOfCards = getGroupsOfCards(karten, 8);
</script>

<template>
  <Selector />
  <section v-for="(group, index) in groupsOfCards" :key="index" class="karten">
    <Karte
      v-for="karte in group"
      :key="karte.id"
      :title="karte.title"
      :type="karte.type"
      :description="karte.description"
      :index="karte.id"
      @update:selected="handleUpdateSelected(index)"
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
