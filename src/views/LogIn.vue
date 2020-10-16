<template>
  <div class="login">
    <v-heading>
      Вход или регистрация
    </v-heading>

    <v-paragraph>
      И вход, и регистрация происходят одинаково: на введенный номер телефона приходит код для подтверждения. При первом
      входе вы регистрируетесь, а при повторной авторизации вам не нужно вводить адрес доставки (если вы его указали при регистрации),
      так же становится доступна история заказов.
    </v-paragraph>
  </div>
</template>

<script>
import VHeading from "@/components/VHeading";
import VParagraph from "@/components/VParagraph";

export default {
  components: {
    VParagraph,
    VHeading,
  }
}
</script>
