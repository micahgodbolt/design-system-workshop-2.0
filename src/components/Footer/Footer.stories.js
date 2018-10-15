import { storiesOf } from '@storybook/vue'

import Footer from './Footer.vue'

storiesOf('Footer', module)
  .add('Default', () => ({
    components: { Footer },
    template: `<Footer> </Footer>`,
  }))
  ;
