<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "NavElement",
  },
  selected: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(["update:selected"]);
const classes = {
  default:
    "btn rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white",
  selected:
    "btn rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white",
};

const handleClick = () => {
  if (props.selected) return;
  emits("update:selected", props.index);
};
</script>

<template>
  <div
    :class="props.selected ? classes.selected : classes.default"
    @click="handleClick"
  >
    {{ props.title }}
  </div>
</template>

<style>
.btn {
  cursor: pointer;
}
</style>
