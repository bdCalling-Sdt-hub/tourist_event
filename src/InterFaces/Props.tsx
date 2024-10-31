import { ReactNode } from 'react';
// navbar
interface Button {
    classNames: string | null;
    text: string | null;
    icon: ReactNode | null;
    handler?: (() => void) | null;
    styles: Record<string, string | number> | null;
    // [key: string]: string | number;
}

export type { Button };