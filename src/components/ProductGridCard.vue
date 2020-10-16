<template>
  <div class="product-card">
    <v-image
      :src="imageUrl"
      class="photo"
    />

    <v-heading
      variant="h3"
      class="title"
    >
      {{ title }}
    </v-heading>

    <v-paragraph>
      {{ description }}
    </v-paragraph>

    <v-box
      variant="flex"
    >
      <v-paragraph
        size="large"
        variant="important"
      >
        {{ price }} ₽
      </v-paragraph>

      <v-paragraph
        size="small"
        variant="note"
      >
        Вес {{ weight }} г.
      </v-paragraph>
    </v-box>
  </div>
</template>

<script>
import VImage from "@/components/VImage";
import VHeading from "@/components/VHeading";
import VParagraph from "@/components/VParagraph";
import VBox from "@/components/VBox";
export default {
  name: 'ProductGridCard',
  components: {VBox, VParagraph, VHeading, VImage},
  props: {
    title: {
      type: String,
      default: '',
    },
    imageUrl: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      default: 0,
    },
    weight: {
      type: Number,
      default: 0,
    },
  }
}
</script>

<style lang="scss" scoped>
  .product-card {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1em;
    border: 1px solid $orange-light;
    border-radius: 6px;
    transition: all .3s ease-in-out;

    &:hover {
      box-shadow: 0 2px 8px 2px $orange-light;
    }

    .photo {
      margin-bottom: 1em;
    }

    .title {
      margin: 0;
    }
  }
</style>
