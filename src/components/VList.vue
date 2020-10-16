<template>
  <ul
    v-if="items.length > 0"
    :class="`${variant} ${size}`"
  >
    <li
      v-for="(item, index) in items"
      :key="index"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'VList',
  props: {
    items: {
      type: Array,
      default: function () {
        return [];
      },
    },
    variant: {
      type: String,
      default: '',
      validator: function (value) {
        return value === '' || ['inline'].includes(value);
      },
    },
    size: {
      type: String,
      default: '',
      validator: function (value) {
        return value === '' || ['small', 'large'].includes(value);
      },
    },
  }
}
</script>

<style lang="scss" scoped>
  ul {
    padding: 0;
    margin: 0;
    list-style: none;

    &.inline {
      display: inline-flex;
      align-items: flex-start;
      margin: 0 -.5em;

      & > * {
        margin: 0 .5em;
      }
    }

    li {
      padding: 0;
      margin: 6px 0;
    }

    &.small {
      font-size: .8rem;
    }

    &.large {
      font-size: 1.2rem;
    }
  }
</style>
