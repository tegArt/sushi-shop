<template>
  <aside class="sidebar">
    <v-box
      class="logo"
      align="center"
    >
      <v-link href="/">
        <v-logo />
      </v-link>
    </v-box>

    <the-cart-widget />
    <the-user-widget />
    <the-navigation />
  </aside>
</template>

<script>
import TheNavigation from "@/components/TheNavigation";
import VLogo from "@/components/VLogo";
import VLink from "@/components/VLink";
import VBox from "@/components/VBox";
import TheCartWidget from "@/components/TheCartWidget";
import TheUserWidget from "@/components/TheUserWidget";

export default {
  name: 'TheSidebar',
  components: {
    TheUserWidget,
    TheCartWidget,
    VBox,
    VLink,
    VLogo,
    TheNavigation
  },
}
</script>

<style lang="scss" scoped>
  .sidebar {
    width: 230px;
    padding: 20px;
    color: $white;
    background: $grey;
  }

  .logo {
    margin: 0 0 2em;
  }
</style>
