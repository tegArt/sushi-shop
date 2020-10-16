<template>
  <div class="page-404">
    <v-heading>
      Нет такой страницы
    </v-heading>

    <v-heading variant="h2">
      Ошибка 404
    </v-heading>
  </div>
</template>

<script>
import VHeading from "@/components/VHeading";

export default {
  name: '404',
  components: {
    VHeading,
  }
}
</script>
