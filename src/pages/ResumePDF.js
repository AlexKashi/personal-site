// ResumePDF.js

import { useEffect } from 'react';

function ResumePDF() {
  useEffect(() => {
    // window.location.href = 'https://drive.google.com/file/d/16KmiwvlUGFqliQdUNhlCTq41e2PpekWW/view';
    window.location.replace('https://drive.google.com/file/d/16KmiwvlUGFqliQdUNhlCTq41e2PpekWW/view');
  }, []);
  return null;
}

export default ResumePDF;
