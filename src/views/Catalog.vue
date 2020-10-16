<template>
  <div class="catalog">
    <v-heading>
      Наше меню
    </v-heading>

    title
    <input v-model="title" /> <br />

    category
    <input v-model="category" /> <br />

    price
    <input v-model="price" /> <br />

    <button @click="addProduct">
      Добавить
    </button>
  </div>
</template>

<script>
import VHeading from "@/components/VHeading";

export default {
  name: 'Catalog',
  components: {
    VHeading,
  },
  data: function () {
    return {
      products: [],
      title: '',
      category: '',
      ingredients: [],
      price: 0,
    }
  },
  mounted() {
    this.$axios
      .get('http://localhost:8081/products')
      .then(response => {
        console.log(response);
        this.products = response.data;
      });
  },
  methods: {
    addProduct: function () {
      this.$axios
        .post('http://localhost:8081/products', {
          title: this.title,
          category: this.category,
          price: this.price,
        })
        .then(response => {
          console.log(response);
        });
    },
  },
}
</script>
