import DetailsPageClient from "@/components/DetailsPage/client/DetailsPageClient"
import { Suspense } from "react"


const DetailsPage: React.FC = () => {
    return <Suspense fallback={``}>
        <DetailsPageClient />
    </Suspense>
}

export default DetailsPage
