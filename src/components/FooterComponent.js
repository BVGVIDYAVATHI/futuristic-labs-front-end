import React, { useState } from 'react';

const FooterComponent = () => {
  const [text, setText] = useState('This is the footer text');

  return (
    <div className="footer-component">
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

export default FooterComponent;
