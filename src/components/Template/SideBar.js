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
      <p>Hi, I&apos;m Alex. I like building things.
        I am a Staff Software Engineer and a <a href="https://www.seas.harvard.edu/applied-computation/graduate-programs/masters-computational-science-and-engineering">Harvard CSE</a> alumnus based in the Bay Area, specializing in the development of innovative applications and AI research.
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
