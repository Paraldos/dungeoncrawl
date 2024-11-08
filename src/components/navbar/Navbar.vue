<script setup>
import Logo from "@/components/navbar/Logo.vue";
import Link from "@/components/navbar/Link.vue";
</script>

<template>
  <nav class="bg-gray-800 p-4">
    <div
      class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
    >
      <Logo />
      <div class="hidden sm:ml-6 sm:block">
        <div class="flex space-x-4">
          <Link title="Regeln" selected="true" />
          <Link title="Charakterbogen" />
          <Link title="Karten" />
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
