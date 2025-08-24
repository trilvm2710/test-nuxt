<template>
  <CarouselComponent :images="images" :config="config" />
</template>

<script setup>
import { Carousel, Slide, Navigation } from 'vue3-carousel'

const images = [
  {
    id: 1,
    name: 'image.png'
  },
  {
    id: 2,
    name: 'image.png'
  },
];
const config = {
  itemsToShow: 1,
  gap: 16,
  height: 240,
}
</script>
