<template>
  <div class="TodoItem">
    <myTextfield
      :value="todo.title"
      variant="edit"
      @input="(value) => { todo.title = value }"
      @blur="$emit(`doneEdit`, todo)"
      @enter="$emit(`doneEdit`, todo)"
    />
    <myButton class="delete" @click="$emit(`removeTodo`, todo)">×</myButton>
  </div>
</template>

<script>
import myButton from "../Button/Button.vue";
import myTextfield from "../Textfield/Textfield.vue";

export default {
  components: {myButton, myTextfield},
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
