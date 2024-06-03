import React, { useState } from 'react';

const CardComponent = () => {
  const [title, setTitle] = useState('Card Title');
  const [description, setDescription] = useState('Card Description');

  return (
    <div className="card-component">
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Card Title"
      />
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Card Description"
      />
    </div>
  );
};

export default CardComponent;
