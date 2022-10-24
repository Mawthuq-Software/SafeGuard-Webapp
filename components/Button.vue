<template>
  <div class="button">
    <p>
      {{label}}
    </p>
  </div>
</template>

<script setup>
  const props = defineProps({
    label: String
  })
</script>
