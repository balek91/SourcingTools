import React from 'react'
import { storiesOf } from '@storybook/react'
import Counter from './index'

storiesOf('Counter', module)
  .add('Gryffindor', () => (
    <Counter
      counterTitle="Gryffindor"
      primaryColor="gryffindorPrimary"
      secondaryColor="gryffindorSecondary"
    />
  ))
  .add('Slytherin', () => (
    <Counter
      counterTitle="Slytherin"
      primaryColor="slytherinPrimary"
      secondaryColor="slytherinSecondary"
    />
  ))
  .add('Ravenclaw', () => (
    <Counter
      counterTitle="Ravenclaw"
      primaryColor="ravenclawPrimary"
      secondaryColor="ravenclawSecondary"
    />
  ))
  .add('Hufflepuff', () => (
    <Counter
      counterTitle="Hufflepuff"
      primaryColor="hufflepuffPrimary"
      secondaryColor="hufflepuffSecondary"
    />
  ))
