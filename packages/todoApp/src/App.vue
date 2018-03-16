<template>
  <my-shell id="app">
      <my-title>Todo App </my-title>
      <header>
        <my-textfield
          variant="new"
          placeholder="What needs to be done?"
          :value="newTodo"
          @input="(value) => { newTodo = value }"
          @enter="addTodo"
        />
      </header>

      <main  v-show="todos.length" v-cloak>
         <!-- Todo List -->
      </main>
    <footer>
      <my-footer />
    </footer>      
  </my-shell>
</template>

<script>

import myShell from 'design-system/src/components/Shell/Shell.vue';
import myLink from 'design-system/src/components/Link/Link.vue';
import myTitle from 'design-system/src/components/Title/Title.vue';
import myTextfield from 'design-system/src/components/Textfield/Textfield.vue';
import myFooter from 'design-system/src/components/Footer/Footer.vue';
import myList from 'design-system/src/components/List/List.vue';
import myTodoItem from 'design-system/src/components/TodoItem/TodoItem.vue';

export default {
  name: "app",
  components: {
    myShell,
    myLink,
    myTitle,
    myTextfield,
    myFooter,
    myList,
    myTodoItem
  },
  data: function() {
    return {
      todos: todoStorage.fetch(),
      newTodo: "",
    };
  },
  watch: {
    todos: {
      handler: function(todos) {
        todoStorage.save(todos);
      },
      deep: true
    }
  },

  methods: {
    addTodo: function() {
      var value = this.newTodo && this.newTodo.trim();
      if (!value) {
        return;
      }
      this.todos.push({
        id: todoStorage.uid++,
        title: value
      });
      this.newTodo = "";
    },

    removeTodo: function(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },

    doneEdit: function (todo) {
      todo.title = todo.title.trim()
      if (!todo.title) {
        this.removeTodo(todo)
      }
    },
  },
};

// localStorage persistence
var STORAGE_KEY = "todos-vuejs-2.0";
var todoStorage = {
  fetch: function() {
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    todos.forEach(function(todo, index) {
      todo.id = index;
    });
    todoStorage.uid = todos.length;
    return todos;
  },
  save: function(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
};

</script>

<style lang="scss">
@import "~design-system/src/utilities/utilities";

html,
body {
  margin: 0;
  padding: 0;
}

body {
  background: #f5f5f5;
  min-width: 230px;
  max-width: 550px;
  margin: 0 auto;
}

header {
  margin-bottom: get-space(2);
}

main {
  margin-bottom: get-space(3);
}
</style>
