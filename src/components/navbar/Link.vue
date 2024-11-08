<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
    default: "NavElement",
  },
  selected: {
    type: Boolean,
    default: false,
  },
});

const bert = {
  default:
    "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white",
  selected: "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white",
};
</script>

<template>
  <a href="#" :class="selected ? bert.selected : bert.default">{{ title }}</a>
</template>

<style></style>
