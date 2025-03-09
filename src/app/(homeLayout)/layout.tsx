import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React, { Suspense } from "react";

const homeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Suspense fallback={``}>
        <Navbar />
      </Suspense>
      <div className="min-h-[55vh]">{children}</div>
      <Footer />
      <script
        type="text/javascript"
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      ></script>
    </>
  );
};

export default homeLayout;
