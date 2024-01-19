import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Oops!!!</h1>
      <h2 className="text-2xl mb-2">Something Went Wrong!!!</h2>
      <h3 className="text-lg">{err.status}: {err.statusText}</h3>
    </div>
  );
};

export default Error;
