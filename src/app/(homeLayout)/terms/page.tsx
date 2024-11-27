import TermsPageClient from "@/components/terms/TermsPage"
import { Suspense } from "react"


const TermsPage = () => {
    return <Suspense fallback={``}>
        <TermsPageClient />
    </Suspense>
}

export default TermsPage
