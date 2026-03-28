"use client";

import Navbar from "@/components/Navbar"
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import dynamic from "next/dynamic"
import { LoadingSpinner } from "@/components/LoadingSpinner"

const LineWaves = dynamic(() => import("../../components/LineWaves"), {
  ssr: false,
  loading: () => <LoadingSpinner />,
})

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex flex-col w-full h-screen overflow-hidden bg-black text-white">

      <div className="fixed inset-0 z-0 pointer-events-none">
        <LineWaves
          speed={0.3}
          innerLineCount={32}
          outerLineCount={36}
          warpIntensity={1}
          rotation={-45}
          edgeFadeWidth={0}
          colorCycleSpeed={1}
          brightness={0.2}
          color1="#ffffff"
          color2="#ffffff"
          color3="#ffffff"
          enableMouseInteraction
          mouseInfluence={2}
        />
      </div>

      <header className="relative bg-black z-10 flex items-center justify-between gap-2 p-2 border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="flex items-center">
          <Navbar />
        </div>

        <div className="flex items-center gap-4">
          <Show when="signed-out">
            <SignInButton>
              <button className="h-10 cursor-pointer rounded-full bg-white px-6 text-sm font-medium text-black transition-hover hover:bg-gray-200">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="h-10 cursor-pointer rounded-full bg-black px-6 text-sm font-medium text-white transition-hover hover:opacity-90">
                Sign Up
              </button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
      </header>

      <main className="relative z-10 flex-1 flex flex-col">
        {children}
      </main>

    </div>
  )
}