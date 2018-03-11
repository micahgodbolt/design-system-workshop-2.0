<template>
  <button
    class="Button"
    @click="$emit(`click`)"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  props: []
};
</script>

<style lang="scss" scoped>
@import "../../utilities/utilities";

.Button {
  background: get-color(primary);
  color: get-color(invertedText);
  border: none;
  font-size: get-type(1);
  padding: get-space(-1);
  &:hover {
    background: get-color(primary, -10);
  }
  &:active {
    background: get-color(secondary);
  }
}

</style>
