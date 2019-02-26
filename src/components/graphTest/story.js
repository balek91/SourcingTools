import React from 'react'
import { storiesOf } from '@storybook/react'
import Graph from './index'
import Area from './areaGraph'

storiesOf('Graph', module)
  .add('Vertical Bar', () => <Graph />)
  .add('Area', () => <Area />)
