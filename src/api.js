// api.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/api';

export const savePage = async (pageData) => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.post(`${API_BASE_URL}/pages`, pageData, {

  headers: {
      Authorization: `Bearer ${token}`
    }
  } 
  );
    return response.data;
  } catch (error) {
    throw new Error(`Error saving page: ${error.response.data.message}`);
  }
};

export const loadPage = async (pageId) => {
  const token = localStorage.getItem('token');
  console.log("token-load-page", token, pageId)
  try {
    const response = await axios.get(`${API_BASE_URL}/pages/${pageId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    );
    return response.data;
  } catch (error) {
    throw new Error(`Error loading page: ${error.response.data.message}`);
  }
};
