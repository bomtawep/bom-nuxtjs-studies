<template>
  <div>
    <h1>Users</h1>
    <div v-for="user in data" :key="user.id">
      <p>{{ user.name }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
  //Load environment variables
  const config = useRuntimeConfig();
  const host = config.public.apiBase;
  console.log('host', host)
  const { data: users } = await useFetch(`${host}/users`)
  const allUsers = users.value
  const { data, error } = await useAsyncData(() => myGetFunction(`${host}/users`))
  // Create myGetFunction
  async function myGetFunction(url: string) {
    const response = await fetch(url)
    if (!response.ok) {

      throw new Error('Network response was not ok')
    }
    return response.json()
  }
  // async function addTodo() {
  //   return await $fetch(`${host}/users`, {
  //     method: 'GET',
  //   })
  // }
  // const todos = addTodo()
</script>