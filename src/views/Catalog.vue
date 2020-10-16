<template>
  <div class="catalog">
    <v-heading>
      Наше меню
    </v-heading>

    <v-preloader v-if="isLoading" />

    <v-box v-if="!isLoading">
      <the-product-filter />

      <category-section
        v-for="(products, categoryName) in productsByCategories"
        :key="categoryName"
        :title="categoryName"
        :products="products"
      />
    </v-box>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import VHeading from "@/components/VHeading";
import VPreloader from "@/components/VPreloader";
import CategorySection from "@/components/CategorySection";
import VBox from "@/components/VBox";
import TheProductFilter from "@/components/TheProductFilter";

export default {
  name: 'Catalog',
  components: {
    TheProductFilter,
    VBox,
    CategorySection,
    VPreloader,
    VHeading,
  },
  mounted() {
    this.getProductsByCategories();
  },
  methods: {
    ...mapActions([
      'getProductsByCategories',
    ]),
  },
  computed: {
    ...mapState([
      'productsByCategories',
      'isLoading',
    ]),
  },
}
</script>
