import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Alex Kashi's personal website. A Harvard CSE Alumnus, based in the Bay Area, specializing in the development of innovative applications and AI research."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome to A Journey Through My Projects and Interests</Link></h2>
          <p>
            What started as a challenge to master web development has evolved
            into a valuable resource. Crafted with innovation in mind
            and a touch of lightheartedness.
          </p>
        </div>
      </header>
      <p>Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/publications">publications</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
