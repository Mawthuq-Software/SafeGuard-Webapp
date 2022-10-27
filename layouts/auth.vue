<template>
  <div class="flex flex-1 flex-row columns-2 h-full w-full sm:columns-1 md:columns-2 gap-0">
    <div class="flex flex-1 min-h-full h-full">
      <slot />
    </div>
    <div class="flex-1 min-h-full h-full">
      <div class="min-h-full h-full w-full auth-background"></div>
    </div>
  </div>
</template>
