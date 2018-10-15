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

import Link from "./Link.vue";

storiesOf("Link", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { Link },
    template: `<Link href="#">Click Me</Link>`
  }));
