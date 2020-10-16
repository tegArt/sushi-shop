<template>
  <div id="app">
    <TheSidebar />

    <v-box class="main">
      <router-view/>
    </v-box>
  </div>
</template>

<script>
import TheSidebar from "@/components/TheSidebar";
import VBox from "@/components/VBox";

export default {
  components: {
    VBox,
    TheSidebar,
  }
}
</script>

<style lang="scss">
  @import "@/styles/common";

  .main {
    flex: 1 1 100%;
    padding: 20px 24px 40px;
  }
</style>