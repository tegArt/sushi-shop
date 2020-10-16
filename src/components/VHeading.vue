<template>
  <component
    :is="variant"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'VHeading',
  props: {
    variant: {
      type: String,
      default: 'h1',
      validator: function (value) {
        return ['h1', 'h2', 'h3'].includes(value);
      },
    },
  }
}
</script>

<style lang="scss" scoped>
  h1,
  h2,
  h3 {
    padding: 0;
    margin: 1em 0;
    color: $grey;
    font-weight: bold;

    &:first-child {
      margin-top: 0;
    }
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1rem;
  }
</style>
