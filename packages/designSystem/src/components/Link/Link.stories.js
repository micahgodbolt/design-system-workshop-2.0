import { storiesOf } from '@storybook/vue'

import Link from './Link.vue'

storiesOf('Link', module)
  .add('Link', () => ({
    components: { Link },
    template: '<Link href="#">Click Me</Link>'
  }))
