import React, { useState } from 'react';

const TextBlock = () => {
  const [text, setText] = useState('This is a text block');

  return (
    <div className="text-block">
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

export default TextBlock;
