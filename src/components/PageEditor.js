// PageEditor.js

import React, { useEffect, useState } from 'react';
import { savePage, loadPage } from '../api';
import { useNavigate } from 'react-router-dom';

const PageEditor = () => {
    const navigate = useNavigate()
  const [pageData, setPageData] = useState({
    title: 'Futuristic',
    components: [],
    userId: '60d0fe4f5311236168a109ca', // Assuming user authentication,
    pageId :"60d0fe4f5311236168a109ca"
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleSavePage = async () => {
    try {
      const savedPage = await savePage(pageData);
      console.log('Page saved:', savedPage);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleLoadPage = async (pageId) => {
    try {
      const loadedPage = await loadPage(pageId);
      console.log('Page loaded:', loadedPage);
      setPageData(loadedPage);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <button onClick={handleSavePage}>Save Page</button>
      <button onClick={() => handleLoadPage('60d0fe4f5311236168a109ca')}>Load Page</button>
      {/* Render page editor components here */}
    </div>
  );
};

export default PageEditor;
