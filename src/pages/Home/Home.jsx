import React from 'react';
import content from './content.json';

export default function Home() {
  return (
    <main>
      <h2>{content.title}</h2>
      <p>{content.description}</p>
    </main>
  );
}
