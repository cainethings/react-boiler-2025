import React from 'react';
import content from './content.json';

export default function ForgotPassword() {
  const data = content.forgot;
  return (
    <main>
      <h2>{data.title}</h2>
      <button>{data.button}</button>
    </main>
  );
}
