import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import {
  withKnobs,
  text,
  number,
  boolean,
  array,
  select,
  color,
  date
} from '@storybook/addon-knobs'

import List from './List.vue'

storiesOf('List', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { List },
    template: `
      <List :data="[1,2,3,4]"> 
        <template slot="item" slot-scope="props"> {{props.item}} </template> 
      </List>
    `,
  }))
  ;
