<template>
  <v-box center>
    <v-icon class="preloader">
      <icon-preloader />
    </v-icon>
  </v-box>
</template>

<script>
import VBox from "@/components/VBox";
import VIcon from "@/components/VIcon";
import IconPreloader from "@/components/icons/IconPreloader";

export default {
  name: 'VPreloader',
  components: {
    IconPreloader,
    VIcon,
    VBox,
  },
}
</script>

<style lang="scss" scoped>
  .preloader {
    animation: spin linear .7s infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
