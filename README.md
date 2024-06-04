# Frontend Developer Assignment: WYSIWYG Web Page Builder

## Overview

This project is a WYSIWYG web page builder inspired by popular platforms like Confluence, WordPress, and Wix. It allows users to construct and customize web pages using a set of predefined components through a simple drag-and-drop interface. This project aims to assess problem-solving skills and proficiency with the MERN stack (MongoDB, Express, React, Node.js).

## Objective

Create a web-based editor that allows users to:
- Drag and drop components from a sidebar into a workspace.
- Customize these components similarly to widgets in WordPress.
- Save and load their designs, ensuring persistence in MongoDB.
- Preview the design on various devices.
- Export and import their designs as JSON.

## Key Features

1. **Drag-and-Drop Functionality**: Mimic the intuitive experience of Wix’s editor.
2. **Component Library**: Include 6-7 reusable components:
   - **Text Block**: Rich text formatting options.
   - **Image Holder**: Resize, crop, and adjust the image.
   - **Button**: Customize text, link, and design.
   - **Header and Footer**: Customizable text, links, and layout.
   - **Carousel**: Display images or content in slides.
   - **Card**: Combine text, images, and actions.
   - **Video Embed**: Include videos from external sources.
   - **Form**: Basic fields (input, textarea, checkbox) and submission capabilities.
   - **Grid Layout**: Place elements in structured grid formats.
   - **Social Media Icons**: Link to social media profiles.
3. **Editable Properties**: Click on components to edit properties.
4. **Responsive Design Preview**: Preview design on desktop, tablet, and mobile.
5. **Saving and Loading**: Save page designs to MongoDB and load them later.
6. **Export/Import Function**: Export designs as JSON and import them back.
7. **SEO Optimization Tools**: Manage SEO tags and attributes.
8. **User Authentication**: Simple login/logout functionality.

## Technical Requirements

- **Frontend**: Use React for building the UI, with Redux for state management if necessary.
- **Backend**: Use Node.js and Express for server-side logic.
- **Database**: Use MongoDB to store user designs and authentication details.
- **Styling**: Use frameworks like Bootstrap, Material-UI, or Ant Design.
- **Code Quality**: Adhere to industry standards with ESLint and Prettier.
- **Version Control**: Use Git and host the project on GitHub, with clear documentation.

## Installation and Setup

### Prerequisites

- Node.js and npm installed.
- MongoDB installed and running.

### Frontend Setup

1. Clone the repository:
   ```bash
   git clone <frontend-repo-url>
   cd frontend-repo
2. Install dependencies:
   npm install
3. Start the development server:
   npm start
# Backend for WYSIWYG Web Page Builder

## Overview

This is the backend service for the WYSIWYG Web Page Builder project. It provides RESTful APIs to handle user authentication, saving/loading page designs, and managing other backend functionalities. This backend is built using Node.js, Express, and MongoDB.

## Prerequisites

- Node.js and npm installed.
- MongoDB installed and running.

## Installation

1. Clone the repository:
   ```bash
   git clone <backend-repo-url>
   cd backend-repo

2. Install dependencies:
   npm install 
3. Start the development server:
   npm start 

### API Endpoints
### User Authentication
1. Register User:
   end point : POST /api/auth/register 
  ## Request Body: {
  "username": "example",
  "email": "user@example.com",
  "password": "password123"
   } 
    ### Response: 
       {
         "message": "User registered successfully"
      } 
2. Login User:
    ### Request Body:
    {
     "email": "user@example.com",
     "password": "password123"
    } 
   ### Response:
    {
    "token": "jwt-token"
   }
3. Page Management:
  a. Save Page Design:
    ### End Point : POST /api/pages 
    Request Headers:  
           Authorization: Bearer jwt-token 
    ### Request Body:
     {
        "name": "Page Name",
        "content": {}
     }

    ### Response
     {
     "message": "Page saved successfully"
     }

b. Get Page Designs:
   ### EndPoint : GET /api/pages
   ### Request Headers:
    Authorization: Bearer jwt-token
   ### Response:
   [
  {
    "name": "Page Name",
    "content": {}
  }
]


### Usage 
1. Register a new user via the /api/auth/register endpoint. 
2. Log in to obtain a JWT token.
3.Use the JWT token to authenticate requests to save and load page designs.

