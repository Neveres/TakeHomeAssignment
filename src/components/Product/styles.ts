import { css } from '@emotion/react'

export const productContainer = css`
  margin-bottom: 25px;

  .product-pic {
    width: 100%;
  }

  .product-title,
  .product-rate,
  .product-price,
  .product-qty {
    margin-bottom: 7px;
    font-weight: 800;
    font-size: 16px;
  }

  .product-rate,
  .product-qty {
    font-weight: 500;
  }

  .product-qty {
    margin-bottom: 25px;
    .ant-select {
      width: 120px;
    }
  }

  .add-to-cart {
    margin-bottom: 25px;
    font-size: 12px;
  }
`
