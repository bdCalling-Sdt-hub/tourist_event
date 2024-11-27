'use client'
import AboutPageClient from "@/components/AboutPage/AboutPageClient";
import { Suspense } from "react";

const AboutPage = () => {

    return <Suspense fallback={``}>
        <AboutPageClient />
    </Suspense>
}

export default AboutPage;
