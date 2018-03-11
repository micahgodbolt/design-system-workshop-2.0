<template>
  <h1 class="Title"> <slot/> </h1>
</template>

<script>
export default {
  props: []
};
</script>

<style lang="scss" scoped>
@import "../../utilities/utilities";

.Title {
  color: get-color(primary, 0);
  text-align: center;
  font-size: get-type(4);
}
</style>
