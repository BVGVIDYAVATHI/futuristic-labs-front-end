import React from 'react';
import SidebarItem from './SidebarItem';
import { useNavigate } from 'react-router-dom';

const Sidebar = (props) => {
    const navigate = useNavigate()
    const {handleOpenPageEditor, setupAuthenticated} = props
  const components = [
    'Text Block',
    'Image Holder',
    'Button',
    'Header',
    'Footer',
    'Carousel',
    'Card',
    'Video Embed',
    'Form',
    'Grid Layout',
    'Social Media Icons',
    
  ];
  const handleLogout = () => {
    localStorage.removeItem('token');
    setupAuthenticated(false)
    navigate("/login")
  };

  return (
    <div className="sidebar">
      <h2>Components</h2>
      {components.map((component, index) => (
        <SidebarItem key={index} name={component} />
      ))}
      <button onClick={handleOpenPageEditor}>Open Page Editor</button>
      <button onClick={handleLogout} style={{ position: 'fixed', top: '10px', right: '10px' }}>Logout</button>

    </div>
  );
};

export default Sidebar;
