<template>
  <Shell id="app">
      <Title>Todo App </Title>
      <header>
        <Textfield
          variant="new"
          placeholder="What needs to be done?"
          :value="newTodo"
          @input="(value) => { newTodo = value }"
          @enter="addTodo"
        />
      </header>

      <main  v-show="todos.length" v-cloak>
         <List :data="todos">
          <template slot="item" slot-scope='{item}'>
            <TodoItem
              :todo="item"
              @removeTodo="removeTodo"
              @doneEdit="doneEdit"
            />
          </template>
        </List>
      </main>
    <footer>
      <Footer />
    </footer>      
  </Shell>
</template>

<script>

import Shell from './components/Shell/Shell.vue';
import Link from './components/Link/Link.vue';
import Title from './components/Title/Title.vue';
import Textfield from './components/Textfield/Textfield.vue';
import Footer from './components/Footer/Footer.vue';
import List from './components/List/List.vue';
import TodoItem from './components/TodoItem/TodoItem.vue';

export default {
  name: "app",
  components: {
    Shell,
    Link,
    Title,
    Textfield,
    Footer,
    List,
    TodoItem
  },

  ///////////////////////////////////////////////////// 
  //             Application Specific                //
  /////////////////////////////////////////////////////
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
@import "utilities/utilities";

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
