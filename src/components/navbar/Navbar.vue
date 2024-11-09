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
  <nav>
    <div class="navbar__content">
      <Logo />
      <div class="hidden sm:ml-6 sm:block">
        <div class="navbar__links">
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
nav {
  height: var(--size__navbar-height);
  background-color: var(--color__navbar-background);
}

.navbar__content {
  height: 100%;
  max-width: 1300px;
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 15px 30px;
  margin: auto;
}

.navbar__links {
  display: flex;
  gap: 20px;
}
</style>
