import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from '../pages/Home';
import Imoveis from '../pages/Imoveis';

import Login from "../pages/login";
import PageLayout from '../Layouts/PageLayout';


const Paths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout/>}>
          <Route index element={<Home />} />
          <Route path="imoveis" element={<Imoveis/>}/>
          <Route path="login" element={<Login/>}/>
        </Route>
        </Routes>
        {/* <Route path="/auth" element={<AuthLayout/>}>
          <Route index element={<Login />} />
        </Route> */}
      
    </BrowserRouter>
  );
};

export default Paths;