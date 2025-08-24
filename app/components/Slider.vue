<template>
  <CarouselComponent
    :images="images"
    :config="config"
    :showNavigation="false"
  />
</template>

<script setup>
import { Carousel, Slide, Navigation } from "vue3-carousel";

const images = [
  {
    id: 1,
    name: "slider.png",
  },
  {
    id: 2,
    name: "slider.png",
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
