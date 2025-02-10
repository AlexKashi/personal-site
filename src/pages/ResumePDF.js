// ResumePDF.js

import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function ResumePDF() {
  const navigate = useHistory();

  useEffect(() => {
    // window.location.href = 'https://drive.google.com/file/d/16KmiwvlUGFqliQdUNhlCTq41e2PpekWW/view';
    window.location.replace('https://drive.google.com/file/d/16KmiwvlUGFqliQdUNhlCTq41e2PpekWW/view');
  }, [navigate]);
  return null;
}

export default ResumePDF;
