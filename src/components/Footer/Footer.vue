<template>
  <div class="Footer">
    <p>Design System Workshop</p>
    <p>With Micah Godbolt</p>
    <p><myLink href="https://twitter.com/micahgodbolt"> @micahgodbolt </myLink></p>
    <p><myLink href="https://github.com/micahgodbolt/design-system-workshop-2.0"> Github </myLink></p>
  </div>
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

.Footer {
  text-align: center;
  p {
    margin: 0 0 get-space(-2);
  }
}
</style>
