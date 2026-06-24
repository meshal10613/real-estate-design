import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "../components/Footer";

const spaceMono = Space_Mono({
    weight: ["400", "700"],
    variable: "--font-space-mono",
    subsets: ["latin"],
    display: "swap",
});


export const metadata: Metadata = {
    title: "Realteek — Buy, Sell & Rent Real Estate Done Right",
    description:
        "Discover handpicked luxury properties. Buy, sell, or rent premium real estate with Realteek — your trusted partner for elegant homes worldwide.",
    keywords: [
        "real estate",
        "luxury homes",
        "property",
        "buy house",
        "rent apartment",
        "premium villas",
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${spaceMono.variable} h-full antialiased`}>
            <body className="min-h-full flex flex-col">
                {children}
                <Footer />
            </body>
        </html>
    );
}
