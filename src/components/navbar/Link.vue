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
  default: "",
  selected: "",
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
