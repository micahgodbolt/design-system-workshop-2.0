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

import <%= name %> from './<%= name %>.vue'

storiesOf('<%= name %>', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { <%= name %> },
    template: `<<%= name %>> </<%= name %>>`,
  }))
  ;
