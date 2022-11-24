import React from 'react'
import { create } from 'react-test-renderer'
import App, { appReducer } from 'src/App'
import { reviews } from 'src/__mock__'

Object.defineProperty(window, 'matchMedia', {
  value: () => {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    }
  },
})

describe('App', () => {
  test('should render well', () => {
    const testRenderer = create(<App />)
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })

  describe('appReducer', () => {
    test('should return expected state when type is "ADD_REVIEW"', () => {
      expect(
        appReducer(
          { reviews: [] },
          {
            type: 'ADD_REVIEW',
            review: reviews[0],
          },
        ),
      ).toStrictEqual({
        reviews: [reviews[0]],
      })
    })

    test('should return expected state when there was no type', () => {
      expect(
        appReducer({ reviews: [] }, {} as Yahoo.AppRedux.Action),
      ).toStrictEqual({ reviews: [] })
    })
  })
})
