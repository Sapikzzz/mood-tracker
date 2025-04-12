import {
    Fugaz_One,
    Geist,
    Geist_Mono,
    Inter,
    Open_Sans,
} from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const opensans = Open_Sans({ subsets: ['latin'] });
const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] });

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata = {
    title: 'Mood Tracker',
    description: 'Track your mood',
};

export default function RootLayout({ children }) {
    const header = (
        <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
            <h1
                className={
                    'text-base sm:text-lg textGradient ' + fugaz.className
                }
            >
                Header
            </h1>
            <div className="flex items-center justify-between">PLACEHOLDER</div>
        </header>
    );

    const footer = (
        <footer className="p-4 sm:p-8 grid place-items-center">
            <p className={'text-indigo-600 ' + fugaz.className}>
                Created with {'<3'}
            </p>
        </footer>
    );

    return (
        <html lang="en">
            <body
                className={
                    `w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col
                    text-slate-700` + opensans.className
                }
            >
                {header}
                {children}
                {footer}
            </body>
        </html>
    );
}
