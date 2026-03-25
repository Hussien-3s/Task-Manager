import Navbar from "@/components/Navbar"
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <header className="flex h-16 items-center justify-between gap-4 p-4 border-b">
        <div className="flex flex-row items-center">
          <Navbar />
        </div>
        <div className="w-55">
          <div className="flex justify-between gap-4">
            <Show when="signed-out">
              <SignInButton>
                <button className="h-10 cursor-pointer rounded-full bg-white px-4 w-40 text-sm font-medium text-black sm:h-12 sm:px-5 sm:text-base">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="h-10 cursor-pointer rounded-full bg-[#6c47ff] px-4 w-40 text-sm font-medium text-white sm:h-12 sm:px-5 sm:text-base">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <div className="flex items-center gap-4 w-500 justify-center">
              <Show when="signed-in">
                <UserButton />
              </Show>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}
