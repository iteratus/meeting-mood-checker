### Button variant

```jsx
<Button variant="primary" content="Primary Button" ariaLabel="Primary Button" />
```

```jsx
<Button
  variant="secondary"
  content="Secondary Button"
  ariaLabel="Secondary Button"
/>
```

```jsx
<Button
  variant="tertiary"
  content="Tertiary Button"
  ariaLabel="Tertiary Button"
/>
```

```jsx
<Button
  variant="quaternary"
  content="Quaternary Button"
  ariaLabel="Quaternary Button"
/>
```

```jsx
<Button variant="link" content="Link Button" ariaLabel="Link Button" />
```

### Button size

```jsx
<Button
  variant="primary"
  size="regular"
  content="Regular Primary Button"
  ariaLabel="Regular Primary Button"
/>
```

```jsx
<Button
  variant="primary"
  size="large"
  content="Large Primary Button"
  ariaLabel="Large Primary Button"
/>
```

### Button icon

```jsx
const { circlePlus } = require('@xxxlgroup/hydra-icons');
const { Icon } = require('@xxxlgroup/hydra-ui-components');

<Button
  variant="tertiary"
  content="Icon Tertiary Button"
  iconBefore={<Icon glyph={circlePlus} />}
  ariaLabel="Icon Tertiary Button"
/>;
```

```jsx
const { arrowRight } = require('@xxxlgroup/hydra-icons');
const { Icon } = require('@xxxlgroup/hydra-ui-components');

<Button
  variant="quaternary"
  content="Icon Quaternary Button"
  iconAfter={<Icon glyph={arrowRight} />}
  ariaLabel="Icon Quaternary Button"
/>;
```

```jsx
const { chevronDown } = require('@xxxlgroup/hydra-icons');
const { Icon } = require('@xxxlgroup/hydra-ui-components');

<Button
  content="Expandable Button"
  variant="link"
  iconAfter={<Icon glyph={chevronDown} />}
  ariaLabel="Expandable Button"
/>;
```
### Alternate Icon Expandable Button (MMX)

```jsx
const { ellipsis } = require('@xxxlgroup/hydra-icons');
const { Icon } = require('@xxxlgroup/hydra-ui-components');

<Button
  content="Expandable Button"
  variant="link"
  iconAfter={<Icon glyph={ellipsis} />}
  ariaLabel="Expandable Button"
/>;
```

### Button layout

```jsx
<Button
  variant="secondary"
  content="Inline Secondary Button"
  ariaLabel="Inline Secondary Button"
/>
```

```jsx
<Button
  variant="secondary"
  size="large"
  content="Inline Large Secondary Button"
/>
```

```jsx
<Button
  variant="secondary"
  layout="block"
  content="Block Secondary Button"
  ariaLabel="Block Secondary Button"
/>
```

```jsx
<Button
  variant="secondary"
  size="large"
  layout="block"
  content="Block Large Secondary Button"
  ariaLab="Block Large Secondary Button"
/>
```

### Button state

```jsx
<Button
  variant="primary"
  disabled
  content="Disabled Primary Button"
  ariaLabel="Disabled Primary Button"
/>
```

```jsx
<Button
  variant="primary"
  content="Active Primary Button"
  ariaLabel="Active Primary Button"
  active
/>
```

```jsx
<Button
  variant="secondary"
  disabled
  content="Disabled Secondary Button"
  ariaLabel="Disabled Secondary Button"
/>
```

```jsx
<Button
  variant="secondary"
  content="Active Secondary Button"
  ariaLabel="Active Secondary Button"
  active
/>
```

```jsx
<Button
  variant="tertiary"
  disabled
  content="Disabled Tertiary Button"
  ariaLabel="Disabled Tertiary Button"
/>
```

```jsx
<Button
  variant="tertiary"
  content="Active Tertiary Button"
  ariaLabel="Active Tertiary Button"
  active
/>
```

```jsx
<Button
  variant="quaternary"
  disabled
  content="Disabled Quaternary Button"
  ariaLabel="Disabled Quaternary Button"
/>
```

```jsx
<Button
  variant="quaternary"
  content="Active Quaternary Button"
  ariaLabel="Active Quaternary Button"
  active
/>
```

### Usage

```jsx static
import React, { Component } from 'react';
import { Button } from '@xxxlgroup/hydra-ui-components';
import { chevronDown, chevronUp } from '@xxxlgroup/hydra-icons';
import { Icon } from '@xxxlgroup/hydra-ui-components';

class ButtonTest extends Component {
  render () {
    return (
      <Button variant="secondary" content="Test Lorem ipsum dolor sit amet text" ariaLabel="Test Lorem ipsum dolor sit amet text" />
      <Button
          variant="tertiary"
          iconAfter={<Icon glyph={chevronDown} />}
          content="Tertiary Button"
          ariaLabel="Tertiary Button"
        />
      <Button
          variant="secondary"
          ariaLabel="secondary"
          iconAfter={<Icon glyph={chevronUp} />}
      >
        <span>Test Lorem ipsum dolor sit amet text</span>
      </Button>
    );
  }
}
```


