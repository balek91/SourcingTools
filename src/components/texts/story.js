import React from 'react'
import { storiesOf } from '@storybook/react'
import { CommonText, Title, SubTitle } from './index'

storiesOf('Texts', module)
  .add('Title', () => <Title>Ceci est un Titre</Title>)
  .add('Title uppercase', () => <Title uppercase>Ceci est un Titre</Title>)
  .add('SubTitle', () => <SubTitle>Ceci est un Sous Titre</SubTitle>)
  .add('SubTitle uppercase', () => (
    <SubTitle uppercase>Ceci est un Sous Titre</SubTitle>
  ))
  .add('CommonText', () => <CommonText>Ceci est un Texte Normal</CommonText>)
  .add('CommonText uppercase', () => (
    <CommonText uppercase>Ceci est un Texte Normal</CommonText>
  ))
