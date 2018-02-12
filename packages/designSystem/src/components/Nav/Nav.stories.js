import { storiesOf } from '@storybook/vue'

import Nav from './Nav.vue'

storiesOf('Nav', module)
  .add('Nav', () => ({
    components: { Nav },
    template: '<Nav><p>Item1</p><p>Item2</p><p>Item3</p></Nav>'
  }))
