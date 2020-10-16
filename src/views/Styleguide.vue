<template>
  <div class="styleguide">
    <v-box
      margin="medium"
    >
      <v-heading>Заголовок h1</v-heading>

      <v-heading variant="h2">Заголовок h2</v-heading>

      <v-heading variant="h3">Заголовок h3.</v-heading>
    </v-box>

    <v-box
      margin="medium"
    >
      <v-paragraph>
        Обычный параграф с размерами и цветом по-умолчанию
      </v-paragraph>

      <v-paragraph size="small">
        Мелкий параграф для всяческих сносок и подсказок
      </v-paragraph>

      <v-paragraph size="large">
        Здоровенный (ну, побольше) текст для привлечения внимания
      </v-paragraph>

      <v-paragraph variant="note">
        Вариант параграфа 'note' для сплошной серости...
      </v-paragraph>

      <v-paragraph variant="success">
        Зеленый 'success', если все путем
      </v-paragraph>

      <v-paragraph variant="warning">
        Стоит обратить внимание на вариант 'warning'
      </v-paragraph>

      <v-paragraph variant="error">
        Пора выключить-включить комплюктер при 'error'
      </v-paragraph>

      <v-paragraph
        variant="success"
        size="large"
      >
        Конечно, size и variant можно компоновать
      </v-paragraph>
    </v-box>

    <v-box
      variant="flex"
      margin="medium"
    >
      <v-list
        size="small"
        :items="['мелкий первый в списке', 'второй в листинге', 'третий в перечислении']"
      />

      <v-list
        :items="['первый в списке', 'второй в листинге', 'третий в перечислении']"
      />

      <v-list
        size="large"
        :items="['большой первый в списке', 'второй в листинге', 'третий в перечислении']"
      />
    </v-box>

    <v-box
      variant="flex"
      margin="medium"
    >
      <v-box>
        <v-list
          variant="inline"
          :items="['инлайн список', 'второй в листинге', 'третий в перечислении']"
        />
      </v-box>
    </v-box>

    <v-box
      variant="flex"
      margin="medium"
    >
      <v-icon>
        <icon-bag />
      </v-icon>

      <v-icon>
        <icon-checkbox-on />
      </v-icon>

      <v-icon>
        <icon-checkbox-off />
      </v-icon>

      <v-icon>
        <icon-cross />
      </v-icon>

      <v-icon>
        <icon-exit />
      </v-icon>

      <v-icon>
        <icon-minus />
      </v-icon>

      <v-icon>
        <icon-plus />
      </v-icon>

      <v-icon>
        <icon-person />
      </v-icon>

      <v-icon>
        <icon-preloader />
      </v-icon>
    </v-box>

    <v-preloader />
  </div>
</template>

<script>
import VList from "@/components/VList";
import VParagraph from "@/components/VParagraph";
import VHeading from "@/components/VHeading";
import VBox from "@/components/VBox";
import VIcon from "@/components/VIcon";
import IconBag from "@/components/icons/IconBag";
import IconCheckboxOn from "@/components/icons/IconCheckboxOn";
import IconCheckboxOff from "@/components/icons/IconCheckboxOff";
import IconCross from "@/components/icons/IconCross";
import IconExit from "@/components/icons/IconExit";
import IconMinus from "@/components/icons/IconMinus";
import IconPlus from "@/components/icons/IconPlus";
import IconPerson from "@/components/icons/IconPerson";
import IconPreloader from "@/components/icons/IconPreloader";
import VPreloader from "@/components/VPreloader";

export default {
  name: 'Styleguide',
  components: {
    VPreloader,
    IconPreloader,
    IconPerson,
    IconPlus,
    IconMinus,
    IconExit,
    IconCross,
    IconCheckboxOff,
    IconCheckboxOn,
    IconBag,
    VIcon,
    VBox,
    VHeading,
    VParagraph,
    VList,
  }
}
</script>
