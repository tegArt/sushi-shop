<template>
  <nav id="nav">
    <v-paragraph
      class="link"
      size="large"
    >
      <router-link to="/">Наше меню</router-link>
    </v-paragraph>

    <v-paragraph
      class="link"
      size="large"
    >
      <router-link to="/about">О Нас</router-link>
    </v-paragraph>
  </nav>
</template>

<script>
import VParagraph from "@/components/VParagraph";

export default {
  name: 'TheNavigation',
  components: {
    VParagraph,
  },
}
</script>

<style lang="scss" scoped>
  .link {
    margin: .5em 0;
  }

  .router-link-exact-active {
    color: $green-light;
  }
</style>
