import React from 'react';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';

const sections = [
  'Education',
  'Experience',
  'Skills',
  'Courses',
  'References',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Alex Kashi Resume | ML Algo Eng – Perception, Self-Driving"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>
            {/* <Link to="resume">Resume </Link> */}
            <span to="">
              Resume{' '}
              <a
                href="https://drive.google.com/file/d/16KmiwvlUGFqliQdUNhlCTq41e2PpekWW/view"
                style={{ color: '#1E90FF' }}
              >
                (PDF)
              </a>
            </span>
          </h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
      <Skills skills={skills} categories={categories} />
      <Courses data={courses} />
      <References />

    </article>
  </Main>
);

export default Resume;
