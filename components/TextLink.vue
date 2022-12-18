<template>
  <NuxtLink :to="link" class="text-primary-600 w"><slot /></NuxtLink>
</template>

<script setup>
const { link } = defineProps(['link'])
</script>
