import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import Textfield from './Textfield.vue'

storiesOf('Textfield', module)
  .add('New Textfield with placeholder', () => ({
    components: { Textfield },
    template: '<Textfield @input="input" @enter="enter" @esc="esc" @blur="blur" placeholder="Put text in here" variant="new"></Textfield>',
    methods: { input: action('change'), enter: action('enter'), esc: action('esc'), blur: action('blur') }
  }))
  .add('New Textfield with text', () => ({
    components: { Textfield },
    template: '<Textfield value="Text has been put here" variant="new"></Textfield>'
  }))
  .add('Edit Textfield with text', () => ({
    components: { Textfield },
    template: '<Textfield value="Text has been put here" variant="edit"></Textfield>'
  }))
