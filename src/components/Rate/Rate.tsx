import React, { useMemo } from 'react'
import { Rate as RateFromAnt } from 'antd'
import { reviews } from 'src/__mock__'

const { length } = reviews

const Rate = () => {
  const valueOfRate = useMemo(
    () =>
      Math.round(
        reviews.reduce((sum, review) => sum + review.rate, 0) / length,
      ),
    [],
  )

  return (
    <div>
      <RateFromAnt
        style={{ marginRight: '5px' }}
        value={valueOfRate}
        disabled
      />
      <span>({length})</span>
    </div>
  )
}

export default Rate
