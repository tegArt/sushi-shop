<template>
  <div class="add-product">
    <v-heading>
      Добавить что-то новенькое в меню
    </v-heading>

    <v-box class="form-row">
      Название <br />
      <input
        v-model="title"
        type="text"
      />
    </v-box>

    <v-box class="form-row">
      URL картинки <br />
      <textarea v-model="imageUrl" />
    </v-box>

    <v-box class="form-row">
      Категория <br />
      <select v-model="category">
        <option>Сложные</option>
        <option>Жареные</option>
        <option>Запечённые</option>
        <option>Простые</option>
        <option>Суши</option>
      </select>
    </v-box>

    <v-box class="form-row">
      Описание <br />
      <textarea v-model="description" />
    </v-box>

    <v-box class="form-row">
      Ингридиенты <br />
      <label>
        <input
          v-model="ingredients"
          type="checkbox"
          value="Лосось"
        />
        Лосось
      </label>

      <label>
        <input
          v-model="ingredients"
          type="checkbox"
          value="Курица"
        />
        Курица
      </label>

      <label>
        <input
          v-model="ingredients"
          type="checkbox"
          value="Краб"
        />
        Краб
      </label>

      <label>
        <input
          v-model="ingredients"
          type="checkbox"
          value="Кальмар"
        />
        Кальмар
      </label>

      <label>
        <input
          v-model="ingredients"
          type="checkbox"
          value="Огурец"
        />
        Огурец
      </label>

      <label>
        <input
          v-model="ingredients"
          type="checkbox"
          value="Креветка"
        />
        Креветка
      </label>

      <label>
        <input
          v-model="ingredients"
          type="checkbox"
          value="Угорь"
        />
        Угорь
      </label>

      <label>
        <input
          v-model="ingredients"
          type="checkbox"
          value="Тунец"
        />
        Тунец
      </label>
    </v-box>

    <v-box class="form-row">
      Цена <br />
      <input
        v-model="price"
        type="text"
      />
    </v-box>

    <v-box class="form-row">
      Вес <br />
      <input
        v-model="weight"
        type="text"
      />
    </v-box>

    <v-preloader v-if="isLoading" />

    <v-box
      v-else
      class="form-row"
    >
      <button @click="addProduct">
        Добавить
      </button>
    </v-box>
  </div>
</template>

<script>
import VHeading from "@/components/VHeading";
import VBox from "@/components/VBox";
import VPreloader from "@/components/VPreloader";

export default {
  components: {
    VPreloader,
    VBox,
    VHeading,
  },
  data: function () {
    return {
      isLoading: false,
      title: '',
      imageUrl: '',
      category: '',
      ingredients: [],
      description: '',
      price: 0,
      weight: 0,
    }
  },
  methods: {
    addProduct: function () {
      this.isLoading = true;

      this.$axios
        .post('http://localhost:8081/products', {
          title: this.title,
          imageUrl: this.imageUrl,
          category: this.category,
          ingredients: this.ingredients,
          description: this.description,
          price: this.price,
          weight: this.weight,
        })
        .then(response => {
          console.log(response);

          setTimeout(() => {
            this.clearForm();
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
    clearForm: function () {
      this.title = '';
      this.imageUrl = '';
      this.category = '';
      this.ingredients = [];
      this.description = '';
      this.price = 0;
      this.weight = 0;
    },
  },
}
</script>

<style lang="scss" scoped>
  .form-row {
    margin: 1em 0;

    input[type='text'],
    select,
    textarea {
      width: 400px;
      padding: .4em;
      border: $grey-light 2px solid;
      border-radius: 3px;
    }

    textarea {
      min-height: 4em;
    }
  }
</style>
