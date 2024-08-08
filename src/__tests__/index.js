import React from 'react'
import {render} from '@testing-library/react'
import {App} from '../App'

describe('Counter', () => {
  test('renders counter initally as 0', async () => {
    const component = render(<App />)
  })
  test('increments count by 2 upon clicking the increment button', async () => {
    const component = render(<App />)
  })
})
