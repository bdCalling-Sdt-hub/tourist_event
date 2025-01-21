import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface EventCardData {
    name: any;
    image: string | StaticImport;
    category: string | undefined;
    location: string | undefined;
    favorite: boolean;
    description: string | undefined;
};
export type { EventCardData }