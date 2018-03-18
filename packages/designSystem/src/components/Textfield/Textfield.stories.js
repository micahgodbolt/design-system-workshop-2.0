import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import * as Steps from 'screener-runner/src/steps';
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

import myTextfield from "./Textfield.vue";

storiesOf("Textfield", module)
  .addDecorator(withKnobs)
  .addDecorator((storyFn) => {
    const story = storyFn();
    story.steps = new Steps()
      .snapshot('default', { cropTo: '.Textfield' })
      .hover('.Textfield')
      .snapshot('hover', { cropTo: '.Textfield' })
      .setValue('input', 'Enter Text In Input')
      .snapshot('text', { cropTo: '.Textfield' })
      .end()
    return story;
  })
  .add("New", () => ({
    components: { myTextfield },
    template: `
      <my-textfield 
        @input="input" 
        @enter="enter" 
        @blur="blur" 
        placeholder="Put text in here" 
        variant="new"
      />`,
    methods: {
      input: action("change"),
      enter: action("enter"),
      blur: action("blur")
    }
  }))
  .add("Edit", () => ({
    components: { myTextfield },
    template: `
      <my-textfield 
        @input="input" 
        @enter="enter" 
        @blur="blur" 
        placeholder="Put text in here" 
        variant="edit"
      />`,
    methods: {
      input: action("change"),
      enter: action("enter"),
      blur: action("blur")
    }
  }));
