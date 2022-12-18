<template>
  <div class="checkbox-container" @click="toggle">
    <div :class="checkboxClass">
      <img src="/tick.svg" v-show="checked" />
    </div>
    <div v-if="labelString" class="checkbox-label">
      <label>{{labelString}}</label>
    </div>
  </div>
</template>

<script setup>

  const props = defineProps({
    initialChecked: Boolean,
    labelString: String,
  });

  // checked state boolean initialize to initialChecked
  const checked = ref(props.initialChecked ?? false);

  // emit checked state on change
  watch(checked, (newChecked) => {
    console.log("change", newChecked);
  });

  function toggle() {
    checked.value = !checked.value;
  }

  const checkboxClass = computed(() => ({
    checked: checked.value,
    checkbox: true
  }));
</script>
