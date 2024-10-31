import React from 'react'

const AuthLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
            <div
            >
                <p>auth layout</p>
                {children}
            </div>
    )
}

export default AuthLayout
