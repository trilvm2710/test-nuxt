<template>
  <CarouselComponent :images="images" :config="config" />
</template>

<script setup>
import { Carousel, Slide, Navigation } from "vue3-carousel";

const images = [
  {
    id: 1,
    name: "Rectangle.png",
  },
  {
    id: 2,
    name: "Rectangle1.png",
  },
  {
    id: 3,
    name: "Rectangle2.png",
  },
  {
    id: 4,
    name: "Rectangle3.png",
  },
  {
    id: 5,
    name: "Rectangle4.png",
  },
  {
    id: 6,
    name: "Rectangle5.png",
  },
  {
    id: 7,
    name: "Rectangle.png",
  },
];
const config = {
  itemsToShow: 3.5,
  gap: 16,
  height: 140,
  breakpoints: {
    // 768px and up
    768: {
      itemsToShow: 5.5,
      height: 245,
    },
  },
};
</script>
