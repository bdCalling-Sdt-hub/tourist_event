"use client";

import React, { createContext, useContext } from "react";
import { useGetProfileQuery } from "../Redux/Apis/userApis";
import CookieConsent, { Cookies } from "react-cookie-consent";
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
        coordinates: string[];
      };
      profile_image: string;
      cover_image: string;
      name: string;
      phone_number: string;
      address: string;
      banner: string;
      _id: string;
      description: string;
      social_media: [
        {
          link: string;
          name: string;
        },
      ];
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
      <CookieConsent
        location="bottom"
        buttonText="Accept Cookies"
        cookieName="permission"
        style={{
          background: "#2B373B",
          position: "fixed",
          bottom: 0,
          width: "100%",
          zIndex: 10002, // Ensure the consent bar is above the overlay
          color: "#FFFFFF",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.5)",
        }}
        buttonStyle={{
          backgroundColor: "#4CAF50",
          color: "#FFFFFF",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "14px",
          zIndex: 10003,
        }}
        expires={150}
      >
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            zIndex: 10000000,
            pointerEvents: "none",
          }}
        ></div>

        {/* Consent Text */}
        <div style={{ flex: 1 }}>
          <p style={{ margin: 0, fontSize: "16px" }}>
            We use cookies to enhance your browsing experience, serve
            personalized content, and analyze site traffic.{" "}
            <span style={{ fontSize: "14px", fontStyle: "italic" }}>
              By clicking "Accept Cookies," you consent to our use of cookies.
            </span>
          </p>
        </div>
      </CookieConsent>

      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access the context
export const useUser = (): ProfileData => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};

export default UserProvider;
