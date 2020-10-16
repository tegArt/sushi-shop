<template>
  <v-box class="cart-widget">
    <v-icon class="cart-icon">
      <icon-bag />
    </v-icon>

    <v-box>
      <v-paragraph>
        <router-link to="/cart">
          Корзина
        </router-link>
      </v-paragraph>

      <v-paragraph size="small">
        Товаров: 0
      </v-paragraph>

      <v-paragraph size="small">
        На сумму: 0
      </v-paragraph>
    </v-box>
  </v-box>
</template>

<script>
import VIcon from "@/components/VIcon";
import IconBag from "@/components/icons/IconBag";
import VBox from "@/components/VBox";
import VParagraph from "@/components/VParagraph";

export default {
  name: 'TheCartWidget',
  components: {
    VParagraph,
    VBox,
    IconBag,
    VIcon,
  },
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
  .cart-widget {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: .4em .6em;
    margin: 0 0 2em;
    border: 1px solid $grey-light;
    border-radius: 3px;

    p {
      margin: .1em 0;
    }

    .cart-icon {
      margin-right: .6em;
    }
  }

  .router-link-exact-active {
    color: $orange-dark;
  }
</style>
