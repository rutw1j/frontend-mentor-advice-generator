import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import "@fontsource/manrope/800.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: 'Advice Generator',
    description: 'Frontend Mentor Advice Generator Challenge',
    referrer: "origin-when-cross-origin",
    authors: [{ 
        name: 'Rutwij Patankar', 
        url: 'https://github.com/rutw1j' 
    }],
    creator: 'Rutwij Patankar',
    keywords: ['Next.js', 'React', 'JavaScript', 'TypeScript', 'ChakraUI'],
    appLinks: {
        web: {
            url: 'https://rutw1j-advice-generator.vercel.app',
            should_fallback: true,
        }
    }
};


export default function RootLayout( {children,} : Readonly<{children: React.ReactNode;}> ) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
