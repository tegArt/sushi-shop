<template>
  <p :class="`${variant} ${size}`">
    <slot />
  </p>
</template>

<script>
export default {
  name: 'VParagraph',
  props: {
    variant: {
      type: String,
      default: '',
      validator: function (value) {
        return value === '' || ['note', 'success', 'warning', 'error'].includes(value);
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
  p {
    padding: 0;
    margin: 1em 0;

    &.small {
      font-size: .8rem;
    }

    &.large {
      font-size: 1.1rem;
    }
  }

  .note {
    color: $grey;
  }

  .success {
    color: $green-dark;
  }

  .warning {
    color: $orange-dark;
  }

  .error {
    color: $red;
  }
</style>
