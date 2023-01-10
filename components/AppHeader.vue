<template>
  <div class="flex flex-row items-start bg-white border-b-shadowLine gap-2.5 p-4 w-full h-20">
    <client-only>
      <nuxt-icon name="brand" filled style="transform:scale(15) translate(6px, 2px);"/>
    </client-only>
    <div class="flex flex-row justify-end items-center px-8 gap-4 w-full h-12">
      <div class="w-9 h-9 rounded-full bg-disabledBorders">
      </div>
      <div class="flex flex-col justify-center items-start">
        <span class="text-base">John Doe</span>
        <label class="uppercase text-xs">Admin</label>
      </div>
    </div>
  </div>
</template>
