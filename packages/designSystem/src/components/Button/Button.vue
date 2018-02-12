<template>
    <button class="Button"
      :data-variant="variant"
      @click="$emit(`click`)"
    >
        <slot></slot>
    </button>
</template>

<script>
  export default {
    name: 'Button',
    props: ['variant']
  }
</script>

<style lang="scss" scoped>
@import '../../utilities/utilities';
:focus {
  outline: 0;
}
.Button {
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-size: 100%;
  vertical-align: baseline;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
}
@include variant('filter') {
  color: $neutral;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
  &:hover {
    border-color: rgba($red, 0.1);
  }
  &.selected {
    border-color: rgba($red, 0.2);
  }
}
@include variant('clear') {
  color: $neutral;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}
@include variant('destroy') {
  user-select: none;
  padding: 0 20px;
  font-size: 30px;
  color: $redLighter;
  transition: color 0.2s ease-out;
  &:hover {
    color: $redLight;
  }
}
</style>
