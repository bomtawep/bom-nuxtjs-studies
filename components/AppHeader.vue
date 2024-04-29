<!--Create AppHeader.vue component-->
<template>
  <header>
    <h1>{{ title }}</h1>
    <Navigation />
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const title = computed(() => 'bom')

useHead({
  title: title.value,
})
</script>

<style scoped>
header {
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
}

nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

a {
  color: white;
  text-decoration: none;
}
</style>