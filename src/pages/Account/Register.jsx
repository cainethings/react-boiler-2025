import React from 'react';
import content from './content.json';

export default function Register() {
  const data = content.register;
  return (
    <main className="p-[30px]">
      <h2>{data.title}</h2>
      <button>{data.button}</button>
    </main>
  );
}
