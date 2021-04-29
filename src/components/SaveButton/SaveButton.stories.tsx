import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import SaveButton from './SaveButton';

storiesOf('SaveButton', module).add('default', () => <SaveButton title='Save' onPress={action('onPress')} />)

