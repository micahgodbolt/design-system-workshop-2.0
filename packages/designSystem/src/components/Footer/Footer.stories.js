import { storiesOf } from '@storybook/vue'

import myFooter from './Footer.vue'

storiesOf('Footer', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { myFooter },
    template: `<myFooter> </myFooter>`,
  }))
  ;
