import React from 'react'
import ExerciceOne from '../'
import renderer from 'react-test-renderer'

import { shallow } from 'enzyme'

it('should match the snapshot (bad practice)', () => {
  const component = renderer
    .create(<ExerciceOne counterTitle="test" counterNumber={0} />)
    .toJSON()
  // `renderer`cree automatiquement un render en "profondeur"
  // changer un composant enfant peut faire rater ce test

  expect(component).toMatchSnapshot()
})

it('should match the snapshot (good Practice)', () => {
  const component = shallow(
    <ExerciceOne counterTitle="test" counterNumber={0} />
  )

  expect(component).toMatchSnapshot()
})

it('should have two buttons', () => {
  const component = shallow(
    <ExerciceOne counterTitle="test" counterNumber={0} />
  )
  const buttonElement = component.find('button')

  expect(buttonElement.length).toEqual(2)
})

it('should return null', () => {
  const component = shallow(
    <ExerciceOne counterTitle="test" counterNumber={0} disabled={true} />
  )

  // console.log(component.type())
  // permet de voir le type du composant, div si c'est une div.

  expect(component.type()).toBe(null)
})
