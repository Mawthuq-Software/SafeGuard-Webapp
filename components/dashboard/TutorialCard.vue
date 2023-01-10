<template>
  <div class="flex flex-col card bg-white w-1/2 h-48">
    <div class="flex flex-row items-start h-full p-8 gap-4">
      <div class="flex items-start p-3 gap-2.5 h-11 rounded-full bg-primary-200" :style="{ background: iconBgColor }">
        <client-only>
          <slot name="icon"/>
        </client-only>
      </div>
      <div class="flex flex-col items-start p-0 gap-0.5">
        <h5 class="leading-7">{{title}}</h5>
        <aside class="text-sm">{{description}}</aside>
      </div>
    </div>
    <div class="h-12 bg-zinc-100 rounded-b-xl flex flex-row justify-end items-start py-3 px-5 gap-2.5">
      <img src="/icons/arrow-right.svg"/>
    </div>
  </div>
</template>

<script setup>
const { title, description, iconBgColor} = defineProps(["title", "description", "iconBgColor"]);
</script>
