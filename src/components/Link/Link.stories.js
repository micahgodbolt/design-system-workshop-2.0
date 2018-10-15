import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  text,
  number,
  boolean,
  array,
  select,
  color,
  date
} from "@storybook/addon-knobs";

import myLink from "./Link.vue";

storiesOf("Link", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { myLink },
    template: `<my-link href="#">Click Me</my-link>`
  }));
