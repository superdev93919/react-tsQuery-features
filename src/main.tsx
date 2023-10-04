import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppWrapper from './app/AppWrapper.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <AppWrapper />
        </QueryClientProvider>
    </React.StrictMode>
);
