import React from 'react'
import Input from '../'
import renderer from 'react-test-renderer'
import { themeLight } from '../../../config/themes'
import { ThemeProvider } from 'styled-components'
import 'jest-styled-components'

class ThemeWrapper extends React.Component {
  render() {
    return (
      <ThemeProvider theme={themeLight}>{this.props.children}</ThemeProvider>
    )
  }
}

const component = renderer.create(
  <ThemeWrapper>
    <Input />
  </ThemeWrapper>
)
let tree = component.toJSON()

it('should match the snapshot', () => {
  expect(tree).toMatchSnapshot()
})

it('should be of type input', () => {
  console.log(tree)
  expect(tree.type).toEqual('input')
})
