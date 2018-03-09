<template>
  <a :href="href"> <slot/> </a>
</template>

<script>
export default {
  props: ["href"]
};
</script>

<style lang="scss" scoped>
@import "../../utilities/utilities";
</style>
