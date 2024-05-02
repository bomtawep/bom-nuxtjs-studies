<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/logo">Logo</router-link>
    <ul>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/posts/1">Post 1</NuxtLink></li>
      <li><NuxtLink to="/posts/2">Post 2</NuxtLink></li>
      <li><NuxtLink to="/users">Users</NuxtLink></li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
</script>
<style scoped>
nav {
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
}

ul {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

a {
  color: white;
  text-decoration: none;
}

.active {
  font-weight: bold;
}
</style>