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
  margin: 10px;
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
    var(--c5) 0%,
    var(--c9) 50%,
    var(--c5) 100%
  );
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.btn:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}

.btn:active {
  transform: scale(0.95);
}
</style>
