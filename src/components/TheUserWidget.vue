<template>
  <v-box class="user-widget">
    <v-icon class="user-icon">
      <icon-person />
    </v-icon>

    <v-box>
      <v-paragraph size="small">
        <router-link to="/login">
          Войти / Регистрация
        </router-link>
      </v-paragraph>

      <v-paragraph>
        Привет,
        <router-link to="/user">Дмитрий</router-link>!
      </v-paragraph>

      <v-paragraph size="small">
        <router-link to="/purchase-history">
          История заказов
        </router-link>
      </v-paragraph>

      <v-paragraph size="small">
        <router-link to="/feedback">
          Оставить отзыв
        </router-link>
      </v-paragraph>

      <v-paragraph size="small">
        <router-link to="/add-product">
          Добавить товар
        </router-link>
      </v-paragraph>

      <v-paragraph size="small">
        <v-link>
          Выйти
          <v-icon
            width="16"
            height="16"
          >
            <icon-exit />
          </v-icon>
        </v-link>
      </v-paragraph>
    </v-box>
  </v-box>
</template>

<script>
import VIcon from "@/components/VIcon";
import VBox from "@/components/VBox";
import VLink from "@/components/VLink";
import VParagraph from "@/components/VParagraph";
import IconPerson from "@/components/icons/IconPerson";
import IconExit from "@/components/icons/IconExit";

export default {
  name: 'TheUserWidget',
  components: {
    IconExit,
    IconPerson,
    VParagraph,
    VLink,
    VBox,
    VIcon,
  },
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
  .user-widget {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: .4em .6em;
    margin: 0 0 2em;
    border: 1px solid $grey-light;
    border-radius: 3px;

    p {
      margin: .1em 0;
    }

    .user-icon {
      margin-right: .6em;
    }
  }

  .router-link-exact-active {
    color: $orange-dark;
  }
</style>
