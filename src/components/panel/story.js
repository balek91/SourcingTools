import React from 'react'
import { storiesOf } from '@storybook/react'

import Panel from './index'
import { Title } from '../texts'

storiesOf('Panel', module)
  .add('Empty Panel', () => <Panel />)
  .add('Empty Panel Custom Color', () => <Panel color="primaryColor" />)
  .add('Panel With Title', () => (
    <Panel>
      <Title uppercase color="white">
        Associations
      </Title>
    </Panel>
  ))
  .add('Panel With Title & Custom Color', () => (
    <Panel color="tertiaryColor">
      <Title uppercase color="white">
        Options
      </Title>
    </Panel>
  ))
