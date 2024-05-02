<template>
  <section>
    <p>This page will be displayed at the /about route.</p>
    <UPopover :popper="{ placement: 'bottom-start' }">
      <UButton icon="i-heroicons-calendar-days-20-solid" :label="format(date, 'd MMM, yyy')" />

      <template #panel="{ close }">
        <DatePicker v-model="date" is-required @close="close" />
      </template>
    </UPopover>
  </section>
</template>
<script setup lang="ts">
import { DatePicker } from "v-calendar";
function format(date: Date, format: string) {
  return date.toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' })
}
const date = ref(new Date())
definePageMeta({
  viewTransition: false,
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  }
})
</script>