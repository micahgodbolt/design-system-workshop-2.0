<template>
  <div> 
    {{text}} <span v-if="text=='Hello'"> World </span>
    <ul>
      <li v-for="(value, key) in testing" :key="key"> Testing {{value}} </li>
    </ul>
  </div>
  
</template>

<script>
export default {
  components:{},
  props: ["text", "testing"]
};
</script>

<style lang="scss" scoped>
@import "../../utilities/utilities";

li {
  list-style: none;
}
</style>
