
'use client'
import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { useGetBannerQuery } from "@/Redux/Apis/bannerApis"
import { imageUrl } from "@/Utils/serverUrl"
interface BannerModel {
    banner_img: string,
    _id: string
}
const Banner = () => {
    const { data } = useGetBannerQuery(undefined)
    return (
        <Carousel className="w-full container mx-auto relative mt-5" >
            <CarouselContent className="flex">
                {data?.data.map((item: BannerModel, index: number) => (
                    <CarouselItem key={index} className="flex-shrink-0 w-full">
                        <div className="h-[400px]  md:h-[600px] lg:h-[700px] w-full rounded-md overflow-hidden">
                            <Image src={imageUrl(item?.banner_img)} className="img-cover" height={600} width={1000} alt="banner" />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious className="absolute top-1/2 -left-4 transform -translate-y-1/2 p-2 rounded-full bg-blue-500 hover:bg-blue-700 text-white transition-colors shadow-md">
                ◀
            </CarouselPrevious>
            <CarouselNext className="absolute top-1/2 -right-4 transform -translate-y-1/2 p-2 rounded-full bg-blue-500 hover:bg-blue-700 text-white transition-colors shadow-md">
                ▶
            </CarouselNext>
        </Carousel>
    )
}

export default Banner
