/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => (
  <main>
    <h1>
      Welcome to My Calculator!
    </h1>
    <p>
      Hi! I am Steven. I created a calculator as a project to learn more about how React.js works. It is very confusing but very pretty cool so far. You can go and head to
      {' '}
      <Link to="/calculator">Calculator</Link>
      {' '}
      to try it out!
    </p>
    <p>
      Here is the source code:
      {' '}
      <a href="https://github.com/jcy2704/calculator">Github Calculator</a>
    </p>
  </main>
);

export default Home;
