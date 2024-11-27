import AuthorPageClient from "@/components/AuthorPage/Client/AuthorPage"
import { Suspense } from "react"

const AuthorPage = () => {
    return <Suspense fallback={``}>
        <AuthorPageClient />
    </Suspense>
}

export default AuthorPage
