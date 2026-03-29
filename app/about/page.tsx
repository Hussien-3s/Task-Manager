"use client";

import dynamic from "next/dynamic"
import { LoadingSpinner } from "@/components/LoadingSpinner"

const SplitText = dynamic(() => import("../../components/SplitText"), {
    ssr: false,
    loading: () => <LoadingSpinner />,
})

const BlurText = dynamic(() => import("../../components/BlurText"), {
    ssr: false,
    loading: () => <LoadingSpinner />,
})

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen p-5 m-5 items-center justify-center">
            <div className="font-bold text-4xl md:text-6xl text-center pt-10 pb-5">
                <SplitText
                    text="About Our Task Manager"
                    className="text-white"
                    delay={100}
                    threshold={0.2}
                    rootMargin="-50px"
                />
            </div>

            <div className="max-w-2xl text-center">
                <BlurText
                    text="We believe that productivity starts with a simple system and an eye-friendly design. We designed this app to help you organize your life, not complicate it."
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-xl text-gray-400 leading-relaxed"
                />
            </div>

            <div className="mt-20 flex gap-4 flex-wrap justify-center opacity-70">
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">Next.js 15</span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">Clerk Auth</span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">Tailwind CSS</span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">React Bits</span>
            </div>
        </div>
    );
}