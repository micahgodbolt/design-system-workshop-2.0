import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  text,
  number,
  boolean,
  array,
  select,
  color,
  date
} from "@storybook/addon-knobs";

import TodoItem from "./TodoItem.vue";

storiesOf("TodoItem", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { TodoItem },
    template: `
      <TodoItem 
        :todo="{id:0, title:'abc'}"
        @doneEdit="doneEdit"
        @removeTodo="removeTodo"
      />`,
    methods: {
      doneEdit: action("doneEdit"),
      removeTodo: action("removeTodo")
    }
  }));
