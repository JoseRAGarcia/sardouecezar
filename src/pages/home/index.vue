<template>
  <q-page class="row items-start justify-evenly">
    <div class="home-banner shadow-2">
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        autoplay
        class="full-height"
        transition-duration="1500"
      >
        <q-carousel-slide
          :name="1"
          img-src="https://cdn.quasar.dev/img/mountains.jpg"
        />
        <q-carousel-slide
          :name="2"
          img-src="https://cdn.quasar.dev/img/parallax1.jpg"
        />
        <q-carousel-slide
          :name="3"
          img-src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
        <q-carousel-slide
          :name="4"
          img-src="https://cdn.quasar.dev/img/quasar.jpg"
        />
      </q-carousel>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HomePage',

  setup() {
    const slide = ref(1);

    return {
      slide,
    };
  },
});
</script>

<style scoped>
.home-banner {
  width: 100%;
  height: 464px;
}
</style>
