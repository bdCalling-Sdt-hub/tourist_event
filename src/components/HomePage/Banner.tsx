
import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
const images = [
    'https://i.ibb.co.com/T4970fn/How-to-Start-Event-Management-Business-in-Bangladesh.jpg', 'https://i.ibb.co.com/h7H9hSY/istockphoto-499517325-612x612.jpg', 'https://i.ibb.co.com/6WJ80HT/Encore-Event-Type-Theatre-Concertand-Special-Events-4.jpg'
]
const Banner = () => {
    return (
        <Carousel className="w-full container mx-auto relative mt-5" >
            <CarouselContent className="flex">
                {images.map((img, index) => (
                    <CarouselItem key={index} className="flex-shrink-0 w-full">
                        <div className="h-[400px]  md:h-[600px] lg:h-[700px] w-full rounded-md overflow-hidden">
                            <Image src={img} unoptimized className="img-cover" height={600} width={1000} alt="banner" />
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
