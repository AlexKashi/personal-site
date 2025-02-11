import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Alex Kashi</h2>
        <p><a href="mailto:akashi@berkeley.edu">akashi@berkeley.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Alex. A Machine Learning Algorithm Engineer and
        Software Engineer based in the Bay Area,
        I push the boundaries of perception for self-driving
        cars and generative AI media for commercial and consumer use.
        I studied Computer Science at Harvard (CSE) and EECS at Berkeley.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Alex Kashi <Link to="/">alexkashi.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
