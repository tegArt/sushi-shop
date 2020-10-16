<template>
  <div class="filter">
    <v-heading>
      Фильтр
    </v-heading>

    <v-paragraph>
      Тут будет фильтр, а пока просто проверка
      <button @click="show(1)">показать только суши</button> <button @click="show(2)">сложные роллы</button> <button @click="show()">показать все</button>
    </v-paragraph>
  </div>
</template>

<script>
import VHeading from "@/components/VHeading";
import VParagraph from "@/components/VParagraph";
import {mapActions, mapMutations} from "vuex";

export default {
  name: 'TheProductFilter',
  components: {
    VParagraph,
    VHeading,
  },
  methods: {
    ...mapActions([
      'getProductsByCategories',
    ]),
    ...mapMutations([
      'setFilter',
    ]),
    show: function (i) {
      let filter = {};

      if (i === 1) {
        filter = {
          category: 'Суши'
        };
      }

      if (i === 2) {
        filter = {
          category: 'Сложные'
        };
      }

      this.setFilter(filter);
      this.getProductsByCategories();
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
