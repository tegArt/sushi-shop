<template>
  <div class="grid">
    <product-grid-card
      v-for="(product, index) in products"
      :key="index"
      v-bind="product"
    />
  </div>
</template>

<script>
import ProductGridCard from "@/components/ProductGridCard";

export default {
  name: 'ProductGrid',
  components: {
    ProductGridCard,
  },
  props: {
    products: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
}
</script>

<style lang="scss" scoped>
  .grid {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: flex-start;
    margin: 0 0 0 -20px;

    @supports (display: grid) {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(222px, 1fr));
      grid-gap: 20px;
      margin: 0 0 40px;
    }

    .product-card {
      flex: 0 0 202px;
      margin: 0 0 20px 20px;

      @supports (display: grid) {
        margin: 0;
      }
    }
  }
</style>
