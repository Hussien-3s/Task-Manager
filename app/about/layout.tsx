"use client";

import Navbar from "@/components/Navbar"
import { Github, Twitter, Linkedin } from "lucide-react"

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="relative flex flex-col w-full h-screen overflow-hidden bg-black text-white">

            <header className="relative bg-black z-50 flex items-center justify-between p-2 h-16 border-b border-white/10 bg-black/20 backdrop-blur-sm">
                <div className="flex items-center">
                    <Navbar />
                </div>

                <div className="flex items-center gap-6 px-4">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                        <Github className="h-5 w-5" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                        <Twitter className="h-5 w-5" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                        <Linkedin className="h-5 w-5" />
                    </a>
                </div>
            </header>

            <main className="relative z-10 flex-1 flex flex-col">
                {children}
            </main>

        </div>
    )
}