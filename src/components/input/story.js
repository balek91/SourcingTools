import React from 'react'
import { storiesOf } from '@storybook/react'
import InputStyled from './index'

storiesOf('Input', module)
  .add('Input Email', () => <InputStyled defaultValue="Bruce@wayne.com" />)
  .add('Input Password', () => (
    <InputStyled defaultValue="*******" type="password" />
  ))
