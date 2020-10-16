import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filter: {},
    productsByCategories: {},
  },
  mutations: {
    setFilter: (state, payload) => {
      state.filter = payload;
    },
    setProductsByCategories: (state, payload) => {
      state.productsByCategories = payload;
    },
  },
  actions: {
    getProductsByCategories: context => {
      this.$axios
        .get('http://localhost:8081/products', {
          params: {
            filter: context.filter,
          },
        })
        .then(response => {
          let products = response.data.products;
          let productsByCategories = {};

          products.forEach(product => {
            if (!Object.prototype.hasOwnProperty.call(productsByCategories, product.category)) {
              productsByCategories[product.category] = [];
            }

            productsByCategories[product.category].push(product);
          });

          context.commit('setProductsByCategories', productsByCategories);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
});
