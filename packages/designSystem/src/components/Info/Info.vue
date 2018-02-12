<template>
  <footer class="Info">
    <p>Double-click to edit a todo</p>
    <p>Written by <Link href='http://evanyou.me'>Evan You</Link></p>
    <p>Part of <Link href='http://todomvc.com'>TodoMVC</Link></p>
  </footer>
</template>

<script>

import Link from '../Link/Link.vue'
export default {
  name: 'Info',
  components: {
    Link
  }
}
</script>

<style lang="scss" scoped>
@import '../../utilities/utilities';
.Info {
  margin: 65px auto 0;
  color: $neutralLight;
  font-size: 10px;
  text-shadow: 0 1px 0 rgba($bg, 0.5);
  text-align: center;
}

.Info p {
  line-height: 1;
}
</style>
