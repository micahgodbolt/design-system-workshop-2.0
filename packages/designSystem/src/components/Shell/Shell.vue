<template>
  <div><slot></slot></div>
</template>

<style lang="scss">
@import "../../utilities/utilities";

* {
  box-sizing: border-box;
}

body {
  font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.4;
  color: get-color('text');
  font-weight: 300;
}
</style>
