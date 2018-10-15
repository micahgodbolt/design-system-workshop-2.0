<template>
  <div class="Footer">
    <p>Design System Workshop</p>
    <p>With Micah Godbolt</p>
    <p><Link href="https://twitter.com/micahgodbolt"> @micahgodbolt </Link></p>
    <p><Link href="https://github.com/micahgodbolt/design-system-workshop-2.0"> Github </Link></p>
  </div>
</template>

<script>
import Link from "../Link/Link.vue";
export default {
  components: {Link},
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
