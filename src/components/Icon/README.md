The Icon component renders an icon.

```jsx
const { logo } = require('@xxxlgroup/hydra-icons');
<Icon glyph={logo} role="img" ariaLabel="XXXLutz Logo" />;
```

```jsx
const icons = require('@xxxlgroup/hydra-icons');

Object.keys(icons).map(key => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      width: '25%',
      float: 'left',
      marginBottom: '16px 0',
    }}
    key={key}
  >
    <Icon glyph={icons[key]} ariaLabel="XXXLutz Logo" />
    <div>{key}</div>
  </div>
));
```

How to use it in a project:

```jsx static
import React, { Component } from 'react';
import { Icon } from '@xxxlgroup/hydra-ui-components';
import { logo } from '@xxxlgroup/hydra-icons';

class IconTest extends Component {
  render() {
    return <Icon glyph={logo} ariaLabel="XXXLutz Logo" />;
  }
}
```
