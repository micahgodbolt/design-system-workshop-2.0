<template>
  <ul class="List"
    :data-direction="direction"
  >
    <li
      :key="item.id"
      :data-border="border"
      v-for="item in data"
    >
      <slot name="item"
        :item="item"
      >
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['data', 'direction', 'border']
}
</script>

<style lang="scss" scoped>
  @import '../../utilities/utilities';
  .List {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    &[data-direction="horizontal"] {
      flex-direction: row;
    }
  }
  [data-border="true"] {
    border-bottom: 1px solid $neutralLighter;
  }
</style>
