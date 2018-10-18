<template>
  <div id="app">
    <Example text="Hello" :testing="[1,2,3]" />
  </div>
</template>

<script>

  import Example from './components/Example/Example.vue';

  export default {
    name: "app",
    components: {
      Example
    }
  }
  
</script>

<style lang="scss">

</style>
