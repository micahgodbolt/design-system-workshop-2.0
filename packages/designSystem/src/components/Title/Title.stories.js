import { storiesOf } from '@storybook/vue'
import {
  withKnobs,
  text
} from '@storybook/addon-knobs'

import Title from './Title.vue'

storiesOf('Title', module)
  .addDecorator(withKnobs)
  .add('Title', () => ({
    components: { Title },
    template: '<Title>title</Title>'
  }))
  .add('Custom', () => ({
    components: { Title },
    template: `<Title>${text('title', 'todo')}</Title>`
  }))

