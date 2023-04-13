import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Outlet } from 'react-router-dom';
import "./style.css";

export const App = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);
