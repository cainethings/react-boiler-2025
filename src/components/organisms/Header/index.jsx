import React from 'react';
import content from '../../../content/header.json';
import './Header.scss';

export default function Header() {
  return (
    <header>
      <h1>{content.title}</h1>
      <nav>
        <ul>
          <li><a href="/">{content.links.home}</a></li>
          <li><a href="/about">{content.links.about}</a></li>
          <li><a href="/account/login">{content.links.login}</a></li>
        </ul>
      </nav>
    </header>
  );
}
