<template>
  <CarouselComponent :images="images" :config="config" />
</template>

<script setup>
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import image from '@/assets/images/image.png'
const images = [
  {
    id: 1,
    name: image
  },
  {
    id: 2,
    name: image
  },
];
const config = {
  itemsToShow: 1,
  gap: 16,
  height: 240,
}
</script>
