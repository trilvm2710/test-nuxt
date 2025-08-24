<script setup>
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { defineProps } from "vue";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  config: {
    type: Object,
    required: true,
  },
   showNavigation: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
<div class="carousel-content">
  <Carousel v-bind="props.config">
    <Slide v-for="image in props.images" :key="image.id">
      <img :src="`/images/${image.name}`" alt="image" />
    </Slide>
    <template #addons>
      <Navigation v-if="props.showNavigation"/>
    </template>
  </Carousel>
</div>
</template>
