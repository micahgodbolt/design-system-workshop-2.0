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
  background: $neutral;
  color: $bg;
  border: none;
}

</style>
