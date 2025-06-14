import React from 'react';

type HelloProps = {
  name: string;
};

const Hello: React.FC<HelloProps> = ({ name }) => {
  // The return value is JSX - this is what gets rendered to the page
  return <h1>Hello, {name}!</h1>;
};

export default Hello;
