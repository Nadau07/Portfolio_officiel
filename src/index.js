import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Home from "../src/pages/Home";
import Profil from "../src/pages/Profil";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
		<Routes>

			<Route>
			<Route path='/' element={<Home />} />
      <Route path='/Profil' element={<Profil/>}/>
			</Route>
		</Routes>
		</Router>
  </React.StrictMode>
);

reportWebVitals();
