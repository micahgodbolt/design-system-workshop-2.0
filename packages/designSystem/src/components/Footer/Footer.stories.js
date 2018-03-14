import { storiesOf } from '@storybook/vue'

import myFooter from './Footer.vue'

storiesOf('Footer', module)
  .add('Default', () => ({
    components: { myFooter },
    template: `<my-footer> </my-footer>`,
  }))
  ;
