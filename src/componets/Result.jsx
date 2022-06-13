/* eslint-disable no-unused-vars */
/** @jsxRuntime classic */
/** @jsx jsx */
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';
import { css, jsx } from '@emotion/react';
const Result = (props) => {
  const handleCopyLink = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div css={[styles.div]}>
      <CloudDoneOutlinedIcon
        css={[styles.CloudDoneOutlinedIcon]}
        fontSize="large"
        // color="secosuccessndary"
      />
      <h1 css={[styles.h1]}>Success!!</h1>
      <img src={props.imageURL} css={[styles.img]} />
      <div css={[styles.div2]}>
        <input css={[styles.input]} type="text" defaultValue={props.imageURL} />
        <button css={[styles.button]} onClick={handleCopyLink(props.imageURL)}>
          copy link
        </button>
      </div>
    </div>
  );
};

const styles = {
  CloudDoneOutlinedIcon: css`
    padding-top: 39px;
    padding-right: 182px;
    padding-left: 182px;
  `,
  div: css`
    text-align: center;
    margin: auto;
    width: 400.36px;
    height: 454.96px;
    background: #ffffff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
  `,
  h1: css`
    text-align: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    letter-spacing: -0.035em;
    color: #4f4f4f;
  `,
  img: css`
    border-radius: 12px;
    padding-right: 31px;
    padding-left: 31px;
    padding-bottom: 20px;
    width: 338px;
    height: 224.4px;
  `,
  div2: css`
    width: 338px;
    margin: auto;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background: #f6f8fb;
  `,
  button: css`
    color: #ffffff;
    text-align: center;
    letter-spacing: -0.035em;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 8px;
    line-height: 12px;
    width: 74px;
    height: 30px;
    background: #2f80ed;
    border-radius: 8px;
    border: 0px solid #e0e0e0;
  `,
  input: css`
    margin: auto;
    width: 250px;
    height: 34px;
    border: 0px solid #e0e0e0;
    border-radius: 8px;
    background: #f6f8fb;
  `,
};
export default Result;
/* eslint-disable no-unused-vars */
