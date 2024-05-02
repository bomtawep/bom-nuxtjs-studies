<template>
  <footer>
    <p>&copy; 2021 My Awesome Company</p>
  </footer>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps()
</script>
<style scoped>
footer {
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
}
</style>