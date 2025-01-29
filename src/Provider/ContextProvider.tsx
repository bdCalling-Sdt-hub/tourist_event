"use client";
import { store } from "@/Redux/store";
import React, { ReactNode, useEffect } from "react";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

interface ContextProviderProps {
  children: ReactNode;
}
const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Define the callback function globally
    (window as any).googleTranslateElementInit = () => {
      if ((window as any).google) {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: "en",
            // layout: (window as any).google.translate.TranslateElement
            //   .InlineLayout.SIMPLE,
            includedLanguages: "en,es,fr,de,zh-CN,ar,hi,pt,ru,ja",
          },
          "google_translate_element"
        );
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Provider store={store}>
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </Provider>
  );
};

export default ContextProvider;
