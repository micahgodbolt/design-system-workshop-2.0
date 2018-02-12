import { storiesOf } from '@storybook/vue'

import Info from './Info.vue'

storiesOf('Info', module)
  .add('Info', () => ({
    components: { Info },
    template: '<Info></Info>'
  }))
