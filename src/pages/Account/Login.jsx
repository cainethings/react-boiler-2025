import React from 'react';
import content from './content.json';

export default function Login() {
  const data = content.login;
  return (
    <main>
      <h2>{data.title}</h2>
      <button>{data.button}</button>
    </main>
  );
}
