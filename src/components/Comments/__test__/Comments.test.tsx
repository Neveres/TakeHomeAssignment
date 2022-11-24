import React from 'react'
import { create } from 'react-test-renderer'
import { Comments } from 'src/components'
import { reviews } from 'src/__mock__'

describe('Comments', () => {
  describe('on desktop', () => {
    test('should render well without data', () => {
      const testRenderer = create(<Comments reviews={[]} isMobile={false} />)
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    test('should render well with data', () => {
      const testRenderer = create(
        <Comments reviews={reviews} isMobile={false} />,
      )
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })
  })

  describe('on mobile', () => {
    test('should render well without data', () => {
      const testRenderer = create(<Comments reviews={[]} isMobile={true} />)
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    test('should render well with data', () => {
      const testRenderer = create(
        <Comments reviews={reviews} isMobile={true} />,
      )
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })
  })
})
