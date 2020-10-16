<template>
  <a
    :href="href"
    :target="target"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: 'VLink',
  props: {
    href: {
      type: String,
      default: '#',
    },
    target: {
      type: String,
      default: '',
      validator: function (value) {
        return value === '' || value === '_blank';
      },
    },
  }
}
</script>
