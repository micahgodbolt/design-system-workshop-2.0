import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import Checkbox from './Checkbox.vue'

storiesOf('Checkbox', module)
  .add('Toggle All', () => ({
    components: { Checkbox },
    template: '<Checkbox @change="action" variant="toggleAll"></Checkbox>',
    methods: { action: action('change') }
  }))
  .add('Toggle Item', () => ({
    components: { Checkbox },
    template: '<Checkbox @change="action" variant="toggleItem"></Checkbox>',
    methods: { action: action('change') }
  }))
