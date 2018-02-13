<template>
  <div id="app">
    <Title text="todos" />
    <section class="todoapp">
      <header class="header">
        <Checkbox
          variant="toggleAll"
          :value="allDone"
          @change="(value) => { allDone = value }"
        />
        <Textfield
          variant="new"
          placeholder="What needs to be done?"
          :value="newTodo"
          @input="(value) => { newTodo = value }"
          @enter="addTodo"
        />
      </header>
      <section class="main" v-show="todos.length" v-cloak>
        <List
          direction="vertical"
          border="true"
          :data="filteredTodos"
        >
          <template slot="item" slot-scope='props'>
            <TodoItem
              :todo="props.item"
              :editedTodo="editedTodo"
              @removeTodo="removeTodo"
              @editTodo="editTodo"
              @doneEdit="doneEdit"
              @cancelEdit="cancelEdit"
            />
          </template>
        </List>
      </section>
      <Nav v-show="todos.length" >
        <TodoCount :remaining="remaining"/>
        <List
          direction="horizontal"
          :data="['all','active','completed']"
        >
          <template slot="item" slot-scope='props'>
            <Button variant="filter" @click="setFilter(props.item)" :class="{ selected: visibility == props.item }" >{{props.item}}</Button>
          </template>
        </List>
        <div>
          <Button variant="clear" @click="removeCompleted" v-show="todos.length > remaining">Clear completed</Button>
        </div>
      </Nav>
    </section>
    <Info></Info>
  </div>
</template>

<script>

import Button from '@micahgodbolt/demo-design-system/src/components/Button/Button'
import Checkbox from '@micahgodbolt/demo-design-system/src/components/Checkbox/Checkbox'
import Textfield from '@micahgodbolt/demo-design-system/src/components/Textfield/Textfield'
import Info from '@micahgodbolt/demo-design-system/src/components/Info/Info'
import TodoCount from '@micahgodbolt/demo-design-system/src/components/TodoCount/TodoCount'
const TodoItem = () => import('@micahgodbolt/demo-design-system/src/components/TodoItem/TodoItem')
import Title from '@micahgodbolt/demo-design-system/src/components/Title/Title'
import List from '@micahgodbolt/demo-design-system/src/components/List/List'
const Nav = () => import('@micahgodbolt/demo-design-system/src/components/Nav/Nav')
import './App.css'

export default {
  name: 'app',
  components: {
    Button,
    Checkbox,
    Info,
    List,
    Textfield,
    TodoCount,
    TodoItem,
    Title,
    Nav
  },
  data: function () {
    return {
      todos: todoStorage.fetch(),
      newTodo: '',
      editedTodo: null,
      visibility: 'active'
    }
  },
  watch: {
    todos: {
      handler: function (todos) {
        todoStorage.save(todos)
      },
      deep: true
    }
  },

  // computed properties
  // http://vuejs.org/guide/computed.html
  computed: {
    filteredTodos: function () {
      return filters[this.visibility](this.todos)
    },
    remaining: function () {
      return filters.active(this.todos).length
    },
    allDone: {
      get: function () {
        return this.remaining === 0
      },
      set: function (value) {
        this.todos.forEach(function (todo) {
          todo.completed = value
        })
      }
    }
  },

  // methods that implement data logic.
  // note there's no DOM manipulation here at all.
  methods: {
    addTodo: function () {
      var value = this.newTodo && this.newTodo.trim()
      if (!value) {
        return
      }
      this.todos.push({
        id: todoStorage.uid++,
        title: value,
        completed: false
      })
      this.newTodo = ''
    },

    removeTodo: function (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
    },

    editTodo: function (todo) {
      this.beforeEditCache = todo.title
      this.editedTodo = todo
    },

    doneEdit: function (todo) {
      if (!this.editedTodo) {
        return
      }
      this.editedTodo = null
      todo.title = todo.title.trim()
      if (!todo.title) {
        this.removeTodo(todo)
      }
    },

    cancelEdit: function (todo) {
      this.editedTodo = null
      todo.title = this.beforeEditCache
    },

    removeCompleted: function () {
      this.todos = filters.active(this.todos)
    },

    setFilter: function (filter) {
      this.visibility = filter
    }
  }
}

// localStorage persistence
var STORAGE_KEY = 'todos-vuejs-2.0'
var todoStorage = {
  fetch: function () {
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    todos.forEach(function (todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

// visibility filters
var filters = {
  all: function (todos) {
    return todos
  },
  active: function (todos) {
    return todos.filter(function (todo) {
      return !todo.completed
    })
  },
  completed: function (todos) {
    return todos.filter(function (todo) {
      return todo.completed
    })
  }
}
</script>