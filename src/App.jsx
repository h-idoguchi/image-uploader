import React, { useEffect, useState } from 'react';
import Card from './componets/Card';
import Result from './componets/Result';
import Uploading from './componets/Uploading';

const App = () => {
  const [imageURL, setImageURL] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    console.log(`imageURL :${imageURL}`);
    console.log(`loading : ${loading}`);
    console.log(`result : ${result}`);
    console.log(`progress : ${progress}`);
  }, [result, imageURL, loading]);

  return loading ? (
    <Uploading progress={progress} />
  ) : result ? (
    <Result imageURL={imageURL} />
  ) : (
    <Card
      setImageURL={setImageURL}
      setLoading={setLoading}
      setResult={setResult}
      setProgress={setProgress}
      progress={progress}
    />
  );
};

export default App;
