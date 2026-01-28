import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
    subsets: ["bengali", "latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-hind-siliguri",
});

export const metadata: Metadata = {
    title: "অমর অরুয়াইল - আমাদের গ্রাম, ডিজিটাল ঠিকানা",
    description: "অরুয়াইল গ্রামের ডিজিটাল সেবায় আমরা সবসময় আপনার পাশে আছি।",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="bn">
            <body className={`${hindSiliguri.variable} font-sans antialiased bg-slate-50 text-slate-800`}>
                {children}
            </body>
        </html>
    );
}
