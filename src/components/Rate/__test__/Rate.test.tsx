import React from 'react'
import { create } from 'react-test-renderer'
import { Rate } from 'src/components'
import { AppRedux } from 'src/App'
import { reviews } from 'src/__mock__'

describe('Rate', () => {
  test('should render well without data', () => {
    const testRenderer = create(
      <AppRedux.Provider
        value={
          {
            state: { reviews: [] },
          } as any
        }
      >
        <Rate />
      </AppRedux.Provider>,
    )
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })

  test('should render well with data', () => {
    const testRenderer = create(
      <AppRedux.Provider
        value={
          {
            state: { reviews },
          } as any
        }
      >
        <Rate />
      </AppRedux.Provider>,
    )
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })
})
