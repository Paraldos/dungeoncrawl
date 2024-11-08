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
  default: "btn",
  selected: "btn btn-selected",
};

const handleClick = () => {
  if (props.selected) return;
  emits("update:selected", props.index);
};
</script>

<template>
  <button
    :class="props.selected ? classes.selected : classes.default"
    @click="handleClick"
  >
    {{ props.title }}
  </button>
</template>

<style>
.btn {
  padding: 10px 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.3s;
  background-size: 200% auto;
  color: var(--c11);
  border-radius: 4px;
  display: block;
  border: 0px;
  font-weight: 700;
  border: 1px solid var(--c8);
  background-image: linear-gradient(
    45deg,
    var(--color__navbar-button-1) 0%,
    var(--color__navbar-button-2) 50%,
    var(--color__navbar-button-1) 100%
  );
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.btn-selected,
.btn:hover {
  background-position: right center;
  color: var(--color__navbar-text--hover);
  text-decoration: none;
}

.btn:active {
  transform: scale(0.93);
}
</style>
