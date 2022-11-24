import React from 'react'
import { create } from 'react-test-renderer'
import { Product } from 'src/components'
import { AppRedux } from 'src/App'
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

const screens = {
  xs: false,
}
const mockUseBreakpoint = jest.fn(() => screens)
jest.mock('antd', () => {
  const antd = jest.requireActual('antd')
  const { Grid } = antd
  return {
    ...antd,
    Grid: {
      ...Grid,
      useBreakpoint: () => mockUseBreakpoint,
    },
  }
})

describe('Product', () => {
  describe('on desktop', () => {
    test('should render well without data', () => {
      const testRenderer = create(
        <AppRedux.Provider
          value={
            {
              state: { reviews: [] },
            } as any
          }
        >
          <Product />
        </AppRedux.Provider>,
      )
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    test('should render well without data', () => {
      const testRenderer = create(
        <AppRedux.Provider
          value={
            {
              state: { reviews },
            } as any
          }
        >
          <Product />
        </AppRedux.Provider>,
      )
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })
  })

  describe('on mobile', () => {
    screens.xs = true
    test('should render well without data', () => {
      const testRenderer = create(
        <AppRedux.Provider
          value={
            {
              state: { reviews: [] },
            } as any
          }
        >
          <Product />
        </AppRedux.Provider>,
      )
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    test('should render well without data', () => {
      const testRenderer = create(
        <AppRedux.Provider
          value={
            {
              state: { reviews },
            } as any
          }
        >
          <Product />
        </AppRedux.Provider>,
      )
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })
  })
})
