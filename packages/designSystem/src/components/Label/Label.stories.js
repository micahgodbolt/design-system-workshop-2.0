import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import {
  withKnobs,
  text,
  boolean
} from '@storybook/addon-knobs'

import Label from './Label.vue'

storiesOf('Label', module)
.addDecorator(withKnobs)
  .add('Label', () => ({
    components: { Label },
    template: '<Label @dblclick="action" completed="false" >I should do stuff</Label>',
    methods: { action: action('dblclick') }
  }))
  .add('Label Completed', () => ({
    components: { Label },
    template: '<Label @dblclick="action" completed="true" >I should do stuff</Label>',
    methods: { action: action('dblclick') }
  }))
  .add('Custom', () => ({
    components: { Label },
    template: `
      <Label
        @dblclick="action"
        completed="${boolean('completed', false)}"
      >
        ${text('Text', 'I should do stuff')}
      </Label>`,
    methods: { action: action('dblclick') }
  }))
