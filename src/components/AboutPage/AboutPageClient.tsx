'use client'
import { useGetAboutUsQuery } from "@/Redux/Apis/settingApis"
const AboutPageClient = () => {
    const { data } = useGetAboutUsQuery(undefined)
    const description = data?.data?.description;
    return (
        <div className='container mx-auto mt-10'>
            {description && (
                <div
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            )}
        </div>
    )
}

export default AboutPageClient
