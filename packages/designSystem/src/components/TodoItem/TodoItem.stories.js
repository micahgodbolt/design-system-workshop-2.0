import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import {
  withKnobs,
  text,
  number,
  boolean,
  array,
  select,
  color,
  date
} from '@storybook/addon-knobs'

import myTodoItem from './TodoItem.vue'

storiesOf('TodoItem', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { myTodoItem },
    template: `
      <my-todoItem 
        :todo="{id:0, title:'abc'}"
        @doneEdit="doneEdit"
        @removeTodo="removeTodo"
      />`,
    methods: { 
      doneEdit: action('doneEdit'),
      removeTodo: action('removeTodo')
    }
  }))
  ;
