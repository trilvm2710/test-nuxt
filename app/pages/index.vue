<template>
  <section class="slider">
    <div class="container-fluid">
      <div class="row">
        <Slider />
      </div>
    </div>
  </section>
  <Advantage />
  <section class="collections">
    <div class="container">
      <div class="row">
        <div class="col-12">
        <Title title="New NFT Collections" />
        <Collection />
        </div>
      </div>
    </div>
  </section>
  <section class="hot-new">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <Title title="NFT Drops Calendar" />
          <HotNew />
        </div>
        <div class="col-6 col-md-3 pt-40">
          <Title title="HOT NFT" />
          <img
            class="w-100 new-image"
            src="../assets/images/hot-nft.png"
            alt="Hot NFT"
          />
        </div>
        <div class="col-6 col-md-3 pt-40">
          <Title title="PROMOTION" />
          <img
            class="w-100 new-image"
            src="../assets/images/promotion.png"
            alt="Promotion"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Advantage from "~/components/Advantage.vue";
import Title from "~/components/Title.vue";
import Collection from "~/components/Collection.vue";
import HotNew from "~/components/HotNew.vue";
import Slider from "~/components/Slider.vue";
</script>
