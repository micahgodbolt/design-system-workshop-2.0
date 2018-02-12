<template>
  <span class="TodoCount">
    <strong>{{ remaining }}</strong> {{ remaining | pluralize }} left
  </span>
</template>

<script>
export default {
  props: ['remaining'],
  filters: {
    pluralize: function (n) {
      return n === 1 ? 'item' : 'items'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../utilities/utilities';
.TodoCount {
  color: $neutral;
  font-weight: 300;
}
</style>
