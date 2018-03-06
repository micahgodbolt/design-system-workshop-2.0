<template>
  <div><slot></slot></div>
</template>

<style lang="scss">
@import "./utilities";

* {
  box-sizing: border-box;
}

body {
  font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.4;
  color: $neutraldark;
  font-weight: 300;
}
</style>
