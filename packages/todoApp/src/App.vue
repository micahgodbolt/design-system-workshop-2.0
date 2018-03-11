<template>
  <myShell id="app">
      <myTitle>Todo App </myTitle>
      <header>
        <myTextfield
          variant="new"
          placeholder="What needs to be done?"
          :value="newTodo"
          @input="(value) => { newTodo = value }"
          @enter="addTodo"
        />
      </header>

      <main  v-show="todos.length" v-cloak>
        <myList :data="todos"
        >
          <template slot="item" slot-scope='{item}'>
            <myTodoItem
              :todo="item"
              @removeTodo="removeTodo"
              @doneEdit="doneEdit"
            />
          </template>
        </myList>
      </main>
    <footer>
      <myFooter />
    </footer>      
  </myShell>
</template>

<script>

import myButton from '@micahgodbolt/demo-design-system/src/components/Button/Button'
import myTextfield from '@micahgodbolt/demo-design-system/src/components/Textfield/Textfield'
import myFooter from '@micahgodbolt/demo-design-system/src/components/Footer/Footer'
const myTodoItem = () => import('@micahgodbolt/demo-design-system/src/components/TodoItem/TodoItem')
import myTitle from '@micahgodbolt/demo-design-system/src/components/Title/Title'
import myList from '@micahgodbolt/demo-design-system/src/components/List/List'
//import './App.css'
import myShell from '@micahgodbolt/demo-design-system/src/components/Shell/Shell.vue';

export default {
  name: "app",
  components: {
    myButton,
    myTextfield,
    myFooter,
    myTitle,
    myList,
    myShell,
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
@import "~@micahgodbolt/demo-design-system/src/utilities/utilities";
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.4;
  background: #f5f5f5;
  color: #4d4d4d;
  min-width: 230px;
  max-width: 550px;
  margin: 0 auto;
  font-weight: 300;
}

header {
  margin-bottom: get-space(3);
}

main {
  margin-bottom: get-space(3);
  
}

footer {
}
</style>
