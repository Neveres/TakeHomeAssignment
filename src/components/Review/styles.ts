import { css } from '@emotion/react'

export const reviewContainer = css`
  * {
    font-weight: 500;
    font-size: 16px;
  }

  .review-header-container {
    margin-bottom: 15px;
    .header {
      margin-bottom: 7px;
      font-weight: 700;
    }
  }

  .comment-container {
    padding: 10px 0;

    .comment-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 7px;

      .comment-date {
        font-size: 13px;
      }
    }

    .comment-content {
      margin-bottom: 7px;
      font-size: 12px;
    }

    .comment-pic {
      width: 50px;
      margin-right: 10px;
    }
  }
`
