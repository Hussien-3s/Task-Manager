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
import { NoticeCard } from "./NoticeCard";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleBellClick = () => {
    setOpen(!open);
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 supports-[backdrop-filter]:bg-background/60">
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
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={handleBellClick} variant="ghost" size="icon" className="hidden md:flex">
            <Bell className="h-5 w-5" />
          </Button>
          {open && <NoticeCard />}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/dashboard" className="text-lg font-semibold">home</Link>
                <Link href="/team" className="text-lg font-semibold">team</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}