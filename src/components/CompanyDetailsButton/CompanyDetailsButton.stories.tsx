import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import CompanyDetailsButton from './CompanyDetailsButton';

storiesOf('CompanyDetailsButton', module).add(
    'default',
    () => <CompanyDetailsButton
        onPress={action('onPress')}
        onPressDelete={action('onPressDelete')} buttonLabel='Company1'
    />
)