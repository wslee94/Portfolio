import React, { useState } from 'react';
import NextImage from 'next/image';
import Loading from '../Loading';

export default function Image({ ...otherProps }) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <NextImage onLoadingComplete={() => setIsLoading(false)} {...otherProps} />
      {isLoading && <Loading />}
    </>
  );
}
