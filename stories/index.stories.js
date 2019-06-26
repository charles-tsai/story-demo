import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { addParameters } from '@storybook/react';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addParameters({
    viewport: { defaultViewport: 'iphone6'},
    backgrounds: [
      { name: 'twitter', value: '#00aced', default: true },
      { name: 'facebook', value: '#3b5998' },
    ],
  })
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
  storiesOf('Select', module)
  .add('Index', () => (
    <select value="Index" onChange={linkTo('Select', e => e.currentTarget.value)}>
      <option>Index</option>
      <option>First</option>
      <option>Second</option>
      <option>Third</option>
    </select>
  ))
  .add('First', () => <button onClick={linkTo('Select', 'Index')}>Go Back</button>)
  .add('Second', () => <button onClick={linkTo('Select', 'Index')}>Go Back</button>)
  .add('Third', () => <button onClick={linkTo('Select', 'Index')}>Go Back</button>);
