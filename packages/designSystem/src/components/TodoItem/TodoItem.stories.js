import { storiesOf } from '@storybook/vue'
import {
  withKnobs,
  text,
  boolean
} from '@storybook/addon-knobs'
import TodoItem from './TodoItem.vue'

storiesOf('TodoItem', module)
  .addDecorator(withKnobs)
  .add('Display', () => ({
    components: { TodoItem },
    template: `<TodoItem :todo="{completed:false, id:0, title:'abc'}"></TodoItem>`
  }))
  .add('Display Checked', () => ({
    components: { TodoItem },
    template: `<TodoItem :todo="{completed:true, id:0, title:'abc'}"></TodoItem>`
  }))
  .add('Edit', () => ({
    components: { TodoItem },
    template: `<TodoItem :todo="{completed:false, id:0, title:'abc'}"
     :editedTodo="{completed:false, id:0, title:'abc'}" ></TodoItem>`
  }))
  .add('Custom', () => {
    const completed = boolean('Completed', 'false')
    const title = text('title', 'abc')
    const editing = boolean('Editing', 'false')
    const todo = `{completed: ${completed}, id: 0, title: '${title}' }`
    return({
        components: { TodoItem },
        template: `
        <TodoItem
          :todo="${todo}"
          :editedTodo="${editing ? todo : null}"
        ></TodoItem>`
    })
  })
