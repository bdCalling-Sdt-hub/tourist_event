'use client'
import { Toaster } from '@/components/ui/toaster';
import { store } from '@/Redux/store';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';

interface ContextProviderProps {
    children: ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    return <Provider store={store}>
        {children}
        <Toaster />
    </Provider>
};

export default ContextProvider;
