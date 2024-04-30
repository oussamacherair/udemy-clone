import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { DataProvider } from "../Data/Contaxt";
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <BrowserRouter>
        <App />
        </BrowserRouter>
        
      </DataProvider>
      <ReactQueryDevtools initialIsOpen={false} />

    </QueryClientProvider>
  </React.StrictMode >


)
