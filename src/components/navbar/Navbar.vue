<script setup>
import { defineProps, defineEmits } from "vue";
import Logo from "@/components/navbar/Logo.vue";
import Link from "@/components/navbar/Link.vue";

const props = defineProps({
  pages: {
    type: Array,
    required: true,
  },
});

const emits = defineEmits(["update:selected"]);

const handleUpdateSelected = (index) => {
  emits("update:selected", index);
};
</script>

<template>
  <nav class="bg-gray-800 p-4">
    <div
      class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
    >
      <Logo />
      <div class="hidden sm:ml-6 sm:block">
        <div class="flex space-x-4">
          <Link
            v-for="(page, index) in props.pages"
            :key="page.title"
            :title="page.title"
            :selected="page.selected"
            :index="index"
            @update:selected="handleUpdateSelected(index)"
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
.logo {
  fill: white;
}
</style>
