
if (typeof window === 'object' && window.navigator && (/node\.js/i).test(window.navigator.userAgent)) {
  let addons = require('@storybook/addons').default;
  let Channel = require('@storybook/channels').default;
  addons.setChannel(new Channel({
    transport: {
      setHandler: function() {},
      send: function() {}
    }
  }));
}

import { configure } from '@storybook/vue'

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module)


if (typeof window === 'object') {
  window.__screener_storybook__ = require('@storybook/vue').getStorybook();
}
