/* eslint-disable no-unused-vars */
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const Uploading = (props) => {
  return (
    <div css={[styles.div]}>
      <h1 css={[styles.h1]}>Uploading...</h1>
      <progress
        css={[styles.progressbar]}
        // value={props.progress}
        value={props.progress}
        max="100"
      ></progress>
    </div>
  );
};

const styles = {
  div: css`
    margin: auto;
    width: 400.36px;
    height: 143.57px;
    left: 519.82px;
    top: 455.35px;

    background: #ffffff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
  `,
  h1: css`
    padding-top: 36px;
    padding-left: 32px;
    width: 100px;
    height: 27px;
    left: 551.82px;
    top: 491.35px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.035em;
    color: #4f4f4f;
  `,
  progressbar: css`
    padding-left: 32px;
    width: 340.71px;
    height: 6px;
    left: 551.82px;
    top: 549.09px;
    border-radius: 8px;

    ::-webkit-progress-bar {
      background-color: #f2f2f2;
    }

    ::-webkit-progress-value {
      background-color: #2f80ed;
    }
  `,
};
export default Uploading;
/* eslint-disable no-unused-vars */
