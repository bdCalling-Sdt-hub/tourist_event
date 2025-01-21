'use client'
import { store } from '@/Redux/store';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

interface ContextProviderProps {
    children: ReactNode;
}
const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    return <Provider store={store}>
        {children}
        <Toaster
            position="top-center"
            reverseOrder={false}
        />
    </Provider>
};

export default ContextProvider;
