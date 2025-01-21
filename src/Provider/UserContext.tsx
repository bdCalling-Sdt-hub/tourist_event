'use client';

import React, { createContext, useContext } from 'react';
import { useGetProfileQuery } from '../Redux/Apis/userApis';

// Define the shape of the user context
interface ProfileData {
    user: {
        data: {
            authId: {
                _id: string;
                role: string;
                email: string;
            };
            location_map: {
                coordinates: string[]
            },
            profile_image: string;
            cover_image: string;
            name: string;
            phone_number: string;
            address: string,
            banner: string,
            _id: string,
            description: string,
            social_media: [
                {
                    link: string
                    name: string,
                }
            ]
        } | null;
    } | null;
    isLoading: boolean;
    isFetching: boolean;
}
const UserContext = createContext<ProfileData | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const { data: user, isLoading, isFetching } = useGetProfileQuery(undefined);

    // Structure the context value
    const contextValue: ProfileData = {
        user: user || null,
        isLoading,
        isFetching,
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to access the context
export const useUser = (): ProfileData => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }

    return context;
};

export default UserProvider;
