import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss';

import { BrowserRouter } from 'react-router-dom';

import AppRouter from './router/app.router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
)
