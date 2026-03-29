"use client";

import Navbar from "@/components/Navbar"
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"


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

        <div className="flex items-center gap-4 px-4">
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