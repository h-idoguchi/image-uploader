/* eslint-disable no-unused-vars */
/** @jsxRuntime classic */
/** @jsx jsx */
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { css, jsx } from '@emotion/react';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import cryptoRandomString from 'crypto-random-string';
import storage from '../config/firebase';
import Image from './Image';

const Card = (props) => {
  const onDrop = useCallback((images) => {
    images.map((image) => {
      handleImageUploader(image);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': [],
    },
    multiple: false,
  });

  const handleImageUploader = (file) => {
    props.setLoading(true);
    const randomString = cryptoRandomString({ length: 3 });
    const imageRef = ref(storage, `images/${randomString + file.name}`);
    const uploadTask = uploadBytesResumable(imageRef, file);

    uploadTask.on(
      'state_changed',
      (TaskSnapshot) => {
        props.setProgress(
          (TaskSnapshot.bytesTransferred / TaskSnapshot.totalBytes) * 100
        );
        switch (TaskSnapshot.state) {
          case 'paused':
            console.log('paused');
            break;
          case 'running':
            console.log('running');
            break;
        }
      },
      (error) => {
        props.setLoading(false);
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadImage) => {
          props.setImageURL(downloadImage);
          if (!props.imageURL) props.setResult(true);
          props.setLoading(false);
        });
      }
    );
  };
  // loading ? <loading/ > : result ? <result /> : <Card />;
  return (
    <div css={[styles.Card]}>
      <h1 css={[styles.h1]}>Upload your image</h1>
      <h2 css={[styles.h2]}>File should be jpeg, png</h2>
      <div css={styles.Dropzone} {...getRootProps()}>
        <input {...getInputProps()} />
        <Image css={[styles.image]} />
        <h3 css={[styles.h3]}>Drag & drop your image here</h3>
      </div>
      <h3 css={[styles.h3]}>or</h3>
      <div css={[styles.input]}>
        <label css={[styles.label]} htmlFor="fileSelect">
          Choose a file
          <input
            id="fileSelect"
            type="file"
            accept="image/*"
            onChange={(event) => {
              handleImageUploader(event.target.files[0]);
            }}
            hidden
          ></input>
        </label>
      </div>
    </div>
  );
};
const styles = {
  Card: css`
    text-align: center;
    margin: auto;
    width: 402px;
    height: 469px;
    left: 519.82px;
    top: 304.37px;
    background: #ffffff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
  `,
  h1: css`
    padding-top: 36px;
    padding-bottom: 16px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
  `,
  h2: css`
    padding-bottom: 30px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 15px;
    letter-spacing: -0.035em;
    color: #828282;
  `,
  Dropzone: css`
    box-sizing: border-box;
    margin: auto;
    width: 338px;
    height: 218.9px;
    left: 551.82px;
    top: 427.97px;

    background: #f6f8fb;
    border: 1px dashed #97bef4;
    border-radius: 12px;
  `,
  h3: css`
    padding-top: 19px;
    margin: 0;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -0.035em;
    color: #bdbdbd;
  `,
  input: css`
    padding-top: 21px;
  `,
  label: css`
    background: #2f80ed;
    border-radius: 8px;
    font-family: 'Noto Sans';
    font-style: normal;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    letter-spacing: -0.035em;

    color: #ffffff;
  `,
};
export default Card;
/* eslint-disable no-unused-vars */
