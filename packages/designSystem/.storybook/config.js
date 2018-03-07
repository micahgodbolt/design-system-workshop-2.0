if (
  typeof window === "object" &&
  window.navigator &&
  /node\.js/i.test(window.navigator.userAgent)
) {
  let addons = require("@storybook/addons").default;
  let Channel = require("@storybook/channels").default;
  addons.setChannel(
    new Channel({
      transport: {
        setHandler: function() {},
        send: function() {}
      }
    })
  );
}

import { configure, addDecorator } from "@storybook/vue";
import Vue from "vue";

import Shell from "../src/components/Shell/Shell.vue";

addDecorator(story => {
  const Story = story();
  return {
    components: { Story, Shell },
    template:
      '<Shell style="padding: 30px; background: white" > <Story/> </Shell>'
  };
});

// automatically import all files ending in *.stories.js
const req = require.context("../src/components", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

if (typeof window === "object") {
  window.__screener_storybook__ = require("@storybook/vue").getStorybook();
}
