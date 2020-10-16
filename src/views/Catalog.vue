<template>
  <div class="catalog">
    <v-heading>
      Наше меню
    </v-heading>

    <v-preloader v-if="isLoading" />

    <v-box v-if="!isLoading">
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
import VHeading from "@/components/VHeading";
import VPreloader from "@/components/VPreloader";
import CategorySection from "@/components/CategorySection";
import VBox from "@/components/VBox";

export default {
  name: 'Catalog',
  components: {
    VBox,
    CategorySection,
    VPreloader,
    VHeading,
  },
  data: function () {
    return {
      isLoading: false,
      products: [],
      filter: {},
    }
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts: function () {
      this.isLoading = true;

      this.$axios
        .get('http://localhost:8081/products', {
          params: {
            filter: this.filter,
          },
        })
        .then(response => {
          this.products = response.data.products;

          setTimeout(() => {
            this.isLoading = false;
          }, 500);
        })
        .catch(error => {
          console.log(error);

          setTimeout(() => {
            this.isLoading = false;
          }, 500);
        });
    },
  },
  computed: {
    productsByCategories: function () {
      let productsByCategories = {};

      this.products.forEach(product => {
        if (!Object.prototype.hasOwnProperty.call(productsByCategories, product.category)) {
          productsByCategories[product.category] = [];
        }

        productsByCategories[product.category].push(product);
      });

      return productsByCategories;
    },
  },
}
</script>
