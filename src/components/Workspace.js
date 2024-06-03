import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import TextBlock from './TextBlock';
import ImageHolder from './ImageHolder';
import ButtonComponent from './ButtonComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import CardComponent from './CardComponent';
import FormComponent from './FormComponent';
import GridLayoutComponent from './GridLayoutComponent';
import SocialMediaIconsComponent from './SocialMediaIconsComponent';
import VideoEmbedComponent from './VideoEmbedComponent';
import CarouselComponent from './CarouselComponent';

const Workspace = () => {
  const [components, setComponents] = useState([]);
  const [, drop] = useDrop(() => ({
    accept: 'COMPONENT',
    drop: (item) => addComponentToWorkspace(item.name),
  }));

  const addComponentToWorkspace = (component) => {
    setComponents([...components, component]);
  };

  const renderComponent = (component, index) => {
    switch (component) {
      case 'Text Block':
        return <TextBlock key={index} />;
      case 'Image Holder':
        return <ImageHolder key={index} />;
      case 'Button':
        return <ButtonComponent key={index} />;
      case 'Footer':
        return <FooterComponent key={index} />;
      case 'Header':
        return <HeaderComponent key={index} />;
      case 'Card':
        return <CardComponent key={index} />;
        case 'Video Embed':
            return <VideoEmbedComponent key={index} />
        case 'Form':
            return <FormComponent key={index} />
        case 'Grid Layout' :
            return <GridLayoutComponent key={index} />
        case  'Social Media Icons':
            return <SocialMediaIconsComponent key={index} />
            case 'Carousel':
        return <CarouselComponent key={index} />;
      
      default:
        return null;
    }
  };

  return (
    <div className="workspace" ref={drop}>
      {components.map((component, index) => renderComponent(component, index))}
    </div>
  );
};

export default Workspace;
