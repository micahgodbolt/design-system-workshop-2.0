<template>
  <ul class="List">
    <li
      v-for="item in data"
      :key="item.id"
    >
      <slot name="item" :item="item" />
    </li>
  </ul>
</template>

<script>
export default {
  props: ['data']
};
</script>

<style lang="scss" scoped>
@import "../../utilities/utilities";
.List {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
}
</style>
