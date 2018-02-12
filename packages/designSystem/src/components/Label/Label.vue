<template>
  <label class="Label"
    :data-completed="completed"
    @dblclick="$emit(`dblclick`)"
  >
    <slot></slot>
  </label>
</template>

<script>
export default {
  props: ['completed']
}
</script>

<style lang="scss" scoped>
  @import '../../utilities/utilities';
  .Label {
    color: $neutraldark;
    font-size: 24px;
    user-select: none;
    word-break: break-all;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
  }
  [data-completed="true"] {
    color: $neutralLight;
    text-decoration: line-through;
  }
</style>

