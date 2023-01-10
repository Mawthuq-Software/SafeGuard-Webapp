<template>
  <div class="flex flex-col items-start h-full w-full">
    <AppHeader/>
    <div class="flex flex-row items-start h-full w-full">
      <Sidebar/>
      <div class="flex flex-row items-start p-8 gap-4 h-full w-full bg-container">
        <slot/>
      </div>
    </div>
  </div>
</template>
