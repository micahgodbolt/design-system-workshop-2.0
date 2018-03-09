<template>
    <input class="Textfield"
    autocomplete="off"
    :placeholder="placeholder"
    :data-variant="variant"
    :value="value"
    @input="$emit(`input`, $event.target.value)"
    @keyup.enter="$emit(`enter`)"
    @blur="$emit(`blur`)"
  >
</template>

<script>
export default {
  props: ['value', 'placeholder', 'variant'],
};
</script>

<style lang="scss" scoped>
@import "../../utilities/utilities";

</style>
