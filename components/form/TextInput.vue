<template>
  <div class="flex flex-col items-start w-full">
    <div class="flex gap-2 flex-col w-full">
      <label class="" for="name">{{label}}</label>
      <input :name="name" class="gap-4 h-11 self-stretch" />
    </div>
  </div>
</template>


<script setup>
  defineProps({
    label: String,
    name: {
      type: String,
      default: "formname"
    }
  })
</script>
