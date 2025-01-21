import SubscriptionHome from "@/components/Subscription/Client/SubscriptionHome"
import { Suspense } from "react"

const SubscriptionPage = () => {

    return (
        <Suspense fallback={``}>
            <SubscriptionHome />
        </Suspense>
    )
}

export default SubscriptionPage
