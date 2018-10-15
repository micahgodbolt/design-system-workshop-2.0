import { configure, addDecorator } from "@storybook/vue";
import Vue from "vue";

import Shell from "../src/components/Shell/Shell.vue";

addDecorator(story => {
  const Story = story();
  return {
    components: { Story, Shell },
    template:
      '<Shell style="padding: 30px;" > <Story/> </Shell>'
  };
});

// automatically import all files ending in *.stories.js
const req = require.context("../src/components", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);