import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Sidebar from './components/Sidebar';
import Workspace from './components/Workspace';
import PageEditor from './components/PageEditor';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';

const App = () => {
  const [isPageEditorOpen, setIsPageEditorOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleOpenPageEditor = () => {
    setIsPageEditorOpen(true);
  };

 

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
      <Router>
        <Routes>
          <Route  exact path="/register" element={<RegisterForm />} />
          <Route  exact path="/login" element={<LoginForm setIsAuthenticated={setIsAuthenticated} />} />
          {isAuthenticated ? (
            <Route exact 
              path="/pages"
              element={
                <>
                  <Sidebar handleOpenPageEditor={handleOpenPageEditor} setupAuthenticated={setIsAuthenticated} />
                  <div className="workspace">
                    {isPageEditorOpen && <PageEditor />}
                    <Workspace />
                  </div>
                </>
              }
            />
          ) : (
            <Route exact  path="/login" element={<LoginForm setIsAuthenticated={setIsAuthenticated} />} />
            // <Route path="*" element={<Navigate to="/login" />} />
            // <Navigate to="/login" />
          )}
         
        </Routes>
        </Router>
      </div>
    </DndProvider>
  );
};

export default App;
