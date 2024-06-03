import React, { useState } from 'react';

const ButtonComponent = () => {
  const [label, setLabel] = useState('Click Me');
  const [url, setUrl] = useState('#');

  return (
    <div className="button-component">
      <input 
        type="text" 
        value={label} 
        onChange={(e) => setLabel(e.target.value)} 
        placeholder="Button Label"
      />
      <input 
        type="text" 
        value={url} 
        onChange={(e) => setUrl(e.target.value)} 
        placeholder="Button URL"
      />
      <button onClick={() => window.location.href = url}>{label}</button>
    </div>
  );
};

export default ButtonComponent;
