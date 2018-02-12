<template>
  <h1 class="Title">{{text}}<slot></slot></h1>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style lang="scss" scoped>
@import '../../utilities/utilities';
.Title {
	font-size: 100px;
	font-weight: 100;
	text-align: center;
	color: rgba($red, 0.15);
}
</style>
