<template>
  <div class="TodoItem"
    :class="{ completed: todo.completed, editing: todo == editedTodo }"
  >
    <div class="view">
      <Checkbox class="toggle"
        :value="todo.completed"
        variant="toggleItem"
        @change="(value) => { todo.completed = value }"
      />
      <div class="text">
        <Label
          :completed="todo.completed"
          v-show="editedTodo == undefined || todo.id != editedTodo.id"
          @dblclick="$emit(`editTodo`, todo)"
        >
          {{ todo.title }}
        </Label>
        <Textfield class="edit"
          :value="todo.title"
          variant="edit"
          v-show="editedTodo && todo.id == editedTodo.id"
          v-todo-focus="todo == editedTodo"
          @input="(value) => { todo.title = value }"
          @blur="$emit(`doneEdit`, todo)"
          @enter="$emit(`doneEdit`, todo)"
          @esc="$emit(`cancelEdit`, todo)"
        />
      </div>
      <Button variant="destroy" @click="$emit(`removeTodo`, todo)">×</Button>
    </div>
  </div>
</template>

<script>
import Button from '../Button/Button.vue'
import Label from '../Label/Label.vue'
import Textfield from '../Textfield/Textfield.vue'
import Checkbox from '../Checkbox/Checkbox.vue'

export default {
  name: 'TodoItem',
  props: ['todo', 'editedTodo'],
  components: { Textfield, Checkbox, Button, Label },
  directives: {
    'todo-focus': function (el, binding) {
      if (binding.value) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .TodoItem {
    position: relative;
  }
  .view {
    padding: 10px 0;
    min-height: 38px;
    align-items: center;
    display: flex;
  }
  .text {
    flex-grow: 1;
  }
  .toggle {
    margin-right: 18px;
  }
</style>

