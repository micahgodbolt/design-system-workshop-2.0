<template>
  <input class="Checkbox"
    type="checkbox"
    :checked="value"
    :data-variant="variant"
    @change="$emit(`change`, $event.target.checked)"
  >
</template>

<script>
export default {
  props: ['value', 'variant']
}
</script>

<style lang="scss" scoped>
@import '../../utilities/utilities';
:focus {
  outline: 0;
}
@include variant("toggleAll") {
  display: flex;
  align-content: center;
  flex-basis: 40px;
  -webkit-appearance: none;
  appearance: none;
  &:before {
    content: '❯';
    font-size: 22px;
    line-height: 30px;
    color: $neutralLighter;
    display: block;
    transform: rotate(90deg);
  }
  &:checked:before {
    color: $neutral;
  }
}
@include variant("toggleItem") {
  user-select: none;
  display: flex;
  align-items: center;
  flex-basis: 40px;
  -webkit-appearance: none;
  appearance: none;
  &:after {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#{$neutralLighter}" stroke-width="3"/></svg>');
  }
  &:checked:after {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#{$greenLight}" stroke-width="3"/><path fill="#{$green}" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
  }
}
</style>

