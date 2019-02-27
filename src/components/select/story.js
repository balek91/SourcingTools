import React from 'react'
import { storiesOf } from '@storybook/react'
import Select from './index'
import centered from '@storybook/addon-centered'

storiesOf('Select', module)

  .add('Select Default', () => <Select />)
  .add('Select With Data', () => <Select data={[{ label: 'Value1' }, { label: 'Value2' }]} />)
  .add('Select With Data And PlaceHolder', () => <Select data={[{ label: 'Value1' }, { label: 'Value2' }]} placeholder={'Select a value'} />)
