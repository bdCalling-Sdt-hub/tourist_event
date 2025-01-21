'use client'
import PrivacyClient from "@/components/Privecy/PrivacyClient"
import { Suspense } from "react"

const PrivacyPage = () => {
    return <Suspense fallback={``}>
        <PrivacyClient />
    </Suspense>
}

export default PrivacyPage
