import React from 'react';
import content from '../../../content/footer.json';
import './Footer.scss';

export default function Footer() {
  return (
    <footer>
      <p>{content.text}</p>
    </footer>
  );
}
