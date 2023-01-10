<template>
  <NuxtLink 
    :to="link" 
    class="flex flex-row items-center px-4 py-8 gap-4 w-full sidemenu-items" 
    style="height: 3.25rem"
    active-class="active-link"
  >
    <div class="[w-4 h-4]" />
    <client-only>
      <nuxt-icon :name="icon" filled/>
    </client-only>
    <p class="text-label">{{ label }}</p>

  </NuxtLink>
</template>

<script setup>
const { label, icon, link } = defineProps(["label", "icon", "link"]);

</script>
