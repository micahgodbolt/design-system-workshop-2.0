import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  number,
  boolean,
  array,
  select,
  color,
  date
} from '@storybook/addon-knobs';

import Button from './Button.vue';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { Button },
    template: `<Button> Button </Button>`
  }))
  ;
