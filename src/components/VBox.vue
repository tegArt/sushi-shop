<template>
  <div
    :class="`box ${variant} ${marginModifier} ${alignModifier}`"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VBox',
  props: {
    variant: {
      type: String,
      default: '',
      validator: function (value) {
        return value === '' || ['flex', 'flex-column'].includes(value);
      },
    },
    margin: {
      type: String,
      default: 'none',
      validator: function (value) {
        return ['none', 'small', 'medium', 'large'].includes(value);
      },
    },
    align: {
      type: String,
      default: '',
      validator: function (value) {
        return value === '' || ['left', 'center', 'right'].includes(value);
      },
    },
  },
  computed: {
    marginModifier: function () {
      return this.margin !== '' ? `margin-${this.margin}` : '';
    },
    alignModifier: function () {
      return this.align !== '' ? this.align : '';
    },
  },
}
</script>

<style lang="scss" scoped>
  .flex {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 0 -16px;

    & > * {
      margin: 8px 16px;
    }

    &.left {
      justify-content: flex-start;
    }

    &.center {
      justify-content: space-around;
    }

    &.right {
      justify-content: flex-end;
    }
  }

  .flex-column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    & > * {
      margin: 8px 0;
    }
  }

  .margin {
    &-small {
      margin-top: .8em;
      margin-bottom: .8em;
    }

    &-medium {
      margin-top: 1.2em;
      margin-bottom: 1.2em;
    }

    &-large {
      margin-top: 1.8em;
      margin-bottom: 1.8em;
    }
  }

  .left {
    text-align: left;
  }

  .center {
    text-align: center;
  }

  .right {
    text-align: right;
  }
</style>
