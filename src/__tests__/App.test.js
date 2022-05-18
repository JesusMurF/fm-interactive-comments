// src/__tests__/App.test.tsx
import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })

describe('App', () => {
  it('should work as expected', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('CommentsContainer').exists()).toBe(true)
  })
})
