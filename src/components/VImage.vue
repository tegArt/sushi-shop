<template>
  <div class="wrapper">
    <img
      :src="src"
      :alt="alt"
    />
  </div>
</template>

<script>
export default {
  name: 'VImage',
  props: {
    src: {
      type: String,
      required: true,
      validator: function (value) {
        return /^(\S+\/)?\S[^.]+\.(?:png|jpe?g|gif)$/.test(value);
      },
    },
    alt: {
      type: String,
      default: '',
    },
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    img {
      display: block;
      max-width: 100%;
      border: 0;
    }
  }
</style>
