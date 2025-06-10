import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLayout from "../layouts/PageLayout";

import Home from '../pages/Home';
import Imoveis from '../pages/Imoveis';

import Login from "../pages/login";
import AuthLayout from '../Layouts/AuthLayout';

const Paths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout/>}>
          <Route index element={<Home />} />
          <Route path="Imoveis" element={<Imoveis />} />
        </Route>
        <Route path="/auth" element={<AuthLayout/>}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Paths;