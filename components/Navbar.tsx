"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, PanelBottomDashed, Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import dynamic from "next/dynamic"
import { LoadingSpinner } from "./LoadingSpinner"

const NoticeCard = dynamic(() => import("./NoticeCard").then((mod) => mod.NoticeCard), {
  loading: () => <LoadingSpinner />,
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleNotifications = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <PanelBottomDashed className="h-6 w-6 text-primary" />
            <span className="inline-block font-bold text-xl">TaskMaster</span>
          </Link>

          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              home
            </Link>
            <Link href="/team" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              team
            </Link>
            <Link href="/tasks" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              tasks
            </Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              about
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={toggleNotifications} variant="ghost" size="icon" className="hidden md:flex">
            <Bell className="h-5 w-5" />
          </Button>
          {isMenuOpen && <NoticeCard />}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4">
                <hr className="border-gray-200" />
                <Link href="/" className="text-lg p-3 font-semibold">home</Link>
                <hr className="border-gray-200" />
                <Link href="/team" className="text-lg p-3 font-semibold">team</Link>
                <hr className="border-gray-200" />
                <Link href="/tasks" className="text-lg p-3 font-semibold">tasks</Link>
                <hr className="border-gray-200" />
                <Link href="/about" className="text-lg p-3 font-semibold">about</Link>
                <hr className="border-gray-200" />
                <Link href="/notice" className="text-lg p-3 font-semibold">notice</Link>
                <hr className="border-gray-200" />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}