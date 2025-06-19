import React from 'react';
import content from './content.json';

export default function ForgotPassword() {
  const data = content.forgot;
  return (
    <main className="p-[30px]">
      <h2>{data.title}</h2>
      <button>{data.button}</button>
    </main>
  );
}
