import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React, { Suspense } from 'react'

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
            <div className='min-h-[55vh]'>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default homeLayout
