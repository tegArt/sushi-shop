<template>
  <div class="category">
    <v-heading variant="h2">
      {{ title }}
    </v-heading>

    <product-grid
      :products="products"
    />
  </div>
</template>

<script>
import VHeading from "@/components/VHeading";
import ProductGrid from "@/components/ProductGrid";

export default {
  name: 'CategorySection',
  components: {
    ProductGrid,
    VHeading,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    products: {
      type: Array,
      default: function () {
        return [];
      },
    },
  }
}
</script>

<style scoped>

</style>
