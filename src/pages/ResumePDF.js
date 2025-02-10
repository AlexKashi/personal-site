// ResumePDF.js

import { useEffect } from 'react';

function ResumePDF() {
  useEffect(() => {
    window.location.href = 'https://drive.google.com/file/d/16KmiwvlUGFqliQdUNhlCTq41e2PpekWW/view';
  }, []);
  return null; // No need to return anything since it's just a redirect
}

export default ResumePDF;
