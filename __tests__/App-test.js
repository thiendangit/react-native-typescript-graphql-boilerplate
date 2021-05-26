/**
 * @format
 */

import React from 'react'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

import 'react-native'

import App from '../App'

it('renders correctly', () => {
  renderer.create(<App />)
})
