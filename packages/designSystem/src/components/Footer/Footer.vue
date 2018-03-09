<template>
  <footer>
    <p>Frontend Masters</p>
    <p>Design System Workshop</p>
    <p>With Micah Godbolt</p>
    <p><myLink href="https://twitter.com/micahgodbolt"> @micahgodbolt </myLink></p>
    <p><myLink href="https://github.com/micahgodbolt/design-system-workshop-2.0"> Github </myLink></p>
  </footer>
</template>

<script>
import myLink from "../Link/Link.vue";
export default {
  components: {myLink},
  props: []
};
</script>

<style lang="scss" scoped>
@import "../../utilities/utilities";
</style>
