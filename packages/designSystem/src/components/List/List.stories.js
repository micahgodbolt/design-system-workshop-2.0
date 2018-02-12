import { storiesOf } from '@storybook/vue'

import List from './List.vue'

storiesOf('List', module)
  .add('Vertical List', () => ({
    components: { List },
    template: `<List :data="['Cats', 'Dogs', 'Chickens']" direction="vertical" border="true">\
                  <template slot="item" scope='props'><p style="padding: 10px">{{props.item}}</p></template>\
               </List>`
  }))
  .add('Vertical List without border', () => ({
    components: { List },
    template: `<List :data="['Cats', 'Dogs', 'Chickens']" direction="vertical" border="false">\
                  <template slot="item" scope='props'><p style="padding: 10px">{{props.item}}</p></template>\
               </List>`
  }))
  .add('Horizontal List', () => ({
    components: { List },
    template: `<List :data="['Cats', 'Dogs', 'Chickens']" direction="horizontal" border="false">\
                  <template slot="item" scope='props'><p style="padding: 10px 20px">{{props.item}}</p></template>\
               </List>`
  }))
