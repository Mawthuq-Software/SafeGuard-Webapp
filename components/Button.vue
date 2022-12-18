<template>
  <div class="button">
    <span>
      {{label}}
    </span>
  </div>
</template>

<script setup>
  const props = defineProps({
    label: String
  })
</script>
