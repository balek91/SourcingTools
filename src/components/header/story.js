import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from './index'

storiesOf('Header', module)
  .add('With Title', () => <Header title="Title" />)
  .add('Without Title', () => <Header />)

