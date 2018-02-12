import { storiesOf } from '@storybook/vue'

import TodoCount from './TodoCount.vue'

storiesOf('TodoCount', module)
  .add('TodoCount', () => ({
    components: { TodoCount },
    template: '<TodoCount remaining="20"></TodoCount>'
  }))
