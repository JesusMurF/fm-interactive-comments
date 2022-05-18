// src/__tests__/App.test.tsx
import React from 'react'
import renderer from 'react-test-renderer'
import App from '../App'

import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })

describe('App', () => {
  it('should work as expected', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()

    const wrapper = shallow(<App />)
    expect(wrapper.find('CommentsContainer').exists()).toBe(true)
  })
})
