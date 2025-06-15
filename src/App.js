// src/App.js
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Profile from './components/profile';
import ProfileEdit from './components/profileedit';
import About from './components/about';

function App() {
  return (
    <React.Fragment>
      <Header />
      <MainContent />
      <Footer />
    </React.Fragment>
  );
}

export default App;