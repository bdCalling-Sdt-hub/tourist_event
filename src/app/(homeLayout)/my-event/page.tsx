'use client'
import MyEventClient from "@/components/MyEventPage/Client/MyEventClient"
import { Suspense } from "react"

const MyEventPage = () => {
    return <Suspense fallback={``}>
        <MyEventClient />
    </Suspense>
}

export default MyEventPage
