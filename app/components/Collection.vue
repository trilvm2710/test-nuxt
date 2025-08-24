<template>
  <CarouselComponent :images="images" :config="config" />
</template>

<script setup>
import { Carousel, Slide, Navigation } from "vue3-carousel";
import Rectangle from '@/assets/images/Rectangle.png'
import Rectangle1 from '@/assets/images/Rectangle1.png'
import Rectangle2 from '@/assets/images/Rectangle2.png'
import Rectangle3 from '@/assets/images/Rectangle3.png'
import Rectangle4 from '@/assets/images/Rectangle4.png'
import Rectangle5 from '@/assets/images/Rectangle5.png'
const images = [
  {
    id: 1,
    name: Rectangle,
  },
  {
    id: 2,
    name: Rectangle1,
  },
  {
    id: 3,
    name: Rectangle2,
  },
  {
    id: 4,
    name: Rectangle3,
  },
  {
    id: 5,
    name: Rectangle4,
  },
  {
    id: 6,
    name: Rectangle5,
  },
  {
    id: 7,
    name: Rectangle,
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
