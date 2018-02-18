import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Icon from 'material-ui/Icon'
import FolderIcon from 'material-ui-icons/Folder';
import Avatar from 'material-ui/Avatar';

import Loader from '../src/Loader'
import TextBelowIcon from '../src/TextBelowIcon'

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Loader', module)
  .add('default', () => <Loader />);

storiesOf('TextBelowIcon', module)
  .add('default', () => <TextBelowIcon title="Cool" >  <Avatar>
    <FolderIcon />
  </Avatar> </TextBelowIcon>);
