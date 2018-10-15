<template>
  <div class="TodoItem">
    <myTextfield
      :value="todo.title"
      variant="edit"
      @input="(value) => { todo.title = value }"
      @blur="$emit(`doneEdit`, todo)"
      @enter="$emit(`doneEdit`, todo)"
    />
    <Button class="delete" @click="$emit(`removeTodo`, todo)">×</Button>
  </div>
</template>

<script>
import Button from "../Button/Button.vue";
import myTextfield from "../Textfield/Textfield.vue";

export default {
  components: {Button, myTextfield},
  props: ['todo']
};
</script>

<style lang="scss" scoped>
@import "../../utilities/utilities";
.TodoItem {
  display: flex;
  .delete {
    display: none;
  }
  &:hover {
    .delete {
      display: block;
    }
  }
}
</style>
