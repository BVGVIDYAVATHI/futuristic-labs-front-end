import React, { useState } from 'react';

const HeaderComponent = () => {
  const [title, setTitle] = useState('This is the header');

  return (
    <div className="header-component">
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
    </div>
  );
};

export default HeaderComponent;
