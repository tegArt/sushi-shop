import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    filter: {},
    productsByCategories: {},
  },
  mutations: {
    setIsLoading: (state, payload) => {
      state.isLoading = payload;
    },
    setFilter: (state, payload) => {
      state.filter = payload;
    },
    setProductsByCategories: (state, payload) => {
      state.productsByCategories = payload;
    },
  },
  actions: {
    getProductsByCategories: context => {
      context.commit('setIsLoading', true);

      Axios
        .get('http://localhost:8081/products', {
          params: {
            filter: context.filter,
          },
        })
        .then(response => {
          let products = response.data.products;
          let productsByCategories = {};

          console.log(products)

          products.forEach(product => {
            if (!Object.prototype.hasOwnProperty.call(productsByCategories, product.category)) {
              productsByCategories[product.category] = [];
            }

            productsByCategories[product.category].push(product);
          });

          context.commit('setProductsByCategories', productsByCategories);
          context.commit('setIsLoading', false);
        })
        .catch(error => {
          console.log(error);
          context.commit('setIsLoading', false);
        });
    }
  },
});
