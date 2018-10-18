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

import Example from './Example.vue'

storiesOf('Example', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { Example },
    template: `<Example text="Hello" :testing="[1,2,3]" > </Example>`,
  }))
  ;
