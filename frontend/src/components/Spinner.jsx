import React from 'react';
import { Audio } from 'react-loader-spinner';

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <Audio type="Circles" color="#00BFFF" height={50} width={200} />
      <p className="text-center text-md font-medium">{message}</p>
    </div>
  );
};

export default Spinner;
