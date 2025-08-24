<template>
  <h2 class="title">{{ props.title }}</h2>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
});
</script>