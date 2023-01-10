<template>
  <div>
    <div class="progress">
      <div class="progress-item"
        :style="`--progress: ${value}%; --progress-value: '${value}%'; `"
      >
      </div>
    </div>
  </div>
</template>

<script setup>
const { value } = defineProps(['value'])
</script>
