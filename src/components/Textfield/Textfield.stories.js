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

import Textfield from './Textfield.vue'

storiesOf('Textfield', module)
  .addDecorator(withKnobs)
  .add('New', () => ({
    components: { Textfield },
    template: `
      <Textfield 
        placeholder="Put text in here" 
        variant="new"
      />`,
  }))
  .add('Edit', () => ({
    components: { Textfield },
    template: `
      <Textfield 
        placeholder="Put text in here" 
        variant="edit"
      />`,
  }))
  ;
