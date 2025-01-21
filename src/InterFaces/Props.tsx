import { ReactNode } from 'react';
import { EventCardData } from './Data';
import { EventData } from '@/components/HomePage/PopularEvents';
// navbar
interface Button {
    classNames: string | null;
    text: string | null;
    icon: ReactNode | null;
    onClick?: any
    styles: Record<string, string | number> | null;
    // [key: string]: string | number;
}
interface FavoriteButtonProps {
    icon: ReactNode | null;
    _id?: string | null
    favorite: boolean;
}

interface TopEventsProps {
    data: EventCardData[];
}

interface HomePageProps {
    data: EventCardData[];
}

interface EventCardProps {
    item: EventData;
}

interface MoreButtonProps {
    _id?:string | null | undefined
}
export type {
    Button,
    HomePageProps,
    TopEventsProps,
    FavoriteButtonProps,
    EventCardProps,
    MoreButtonProps
};
