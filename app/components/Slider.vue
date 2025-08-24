<template>
  <CarouselComponent
    :images="images"
    :config="config"
    :showNavigation="false"
  />
</template>

<script setup>
import { Carousel, Slide, Navigation } from "vue3-carousel";
import image from '@/assets/images/slider.png'

const images = [
  {
    id: 1,
    name: image,
  },
  {
    id: 2,
    name: image,
  },
];
const config = {
  itemsToShow: 1,
  wrapAround: true,
  height: 180,
  breakpoints: {
    // 768px and up
    768: {
      height: "100%",
    },
  },
};
</script>
