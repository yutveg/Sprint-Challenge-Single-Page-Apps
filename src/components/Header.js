import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="ui centered">
      <Link exact to="/" className="ui center">Rick &amp; Morty Fan Page</Link>
    </header>
  );
}
