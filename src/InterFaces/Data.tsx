interface EventCardData {
    map(arg0: (item: any) => any): import("react").ReactNode;
    image?: string;
    category?: string;
    location?: string;
    favorite?: boolean;
    description?: string;
    country?: string;
};
export type { EventCardData }