<template>
  <my-shell id="app">
      <my-title>Todo App </my-title>
      <header>
        <input />
      </header>

      <main  v-show="todos.length" v-cloak>
        <!-- Todo List -->
      </main>
    <footer>
      <p>Frontend Masters</p>
      <p>Design System Workshop</p>
      <p>With Micah Godbolt</p>
      <p><my-link href="https://twitter.com/micahgodbolt"> @micahgodbolt </my-link></p>
      <p><my-link href="https://github.com/micahgodbolt/design-system-workshop-2.0"> Github </my-link></p>
    </footer>      
  </my-shell>
</template>

<script>

import myShell from 'design-system/src/components/Shell/Shell.vue';
import myLink from 'design-system/src/components/Link/Link.vue';
import myTitle from 'design-system/src/components/Title/Title.vue';

export default {
  name: "app",
  components: {
    myShell,
    myLink,
    myTitle
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
