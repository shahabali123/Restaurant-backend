import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import  Home  from './pages/Home';
import {Toaster} from 'react-hot-toast';
import NotFound from './pages/NotFound';
import Success from './pages/Success';

import './App.scss'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
