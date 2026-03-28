import {
  LayoutDashboard,
  BookOpen,
  Settings,
  ChevronRight,
  MoreHorizontal,
  Frame,
  PieChart,
  Map
} from "lucide-react"

import { currentUser } from '@clerk/nextjs/server';
import { Show, UserButton } from "@clerk/nextjs"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from 'next/link';

const data = {
  user: { name: "shadcn", email: "m@example.com" },
  navMain: [
    { title: "Models", url: "#", icon: LayoutDashboard, isActive: true },
    { title: "Documentation", url: "#", icon: BookOpen },
    { title: "Settings", url: "#", icon: Settings },
  ],
  projects: [
    { name: "Home", url: "/", icon: Frame },
    { name: "Sales & Marketing", url: "#", icon: PieChart },
    { name: "Team", url: "/team", icon: Map },
  ],
}

export async function AppSidebar() {
  const user = await currentUser();

  return (
    <Sidebar collapsible="icon" className="border-r-0 bg-[#09090b]">
      <SidebarHeader className="h-16 border-b border-sidebar-border/50">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <LayoutDashboard className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{user?.firstName} Inc</span>
                <span className="truncate text-xs">Enterprise</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarMenu>
            {data.projects.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton>
                  <item.icon />
                  <Link href={item.url}>{item.name}</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
            <SidebarMenuItem>
              <SidebarMenuButton className="text-sidebar-foreground/70">
                <MoreHorizontal />
                <span>More</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border/50 p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div className="grid flex-1 text-left text-sm leading-tight">
                <div className="flex flex-row items-center gap-2">
                  <Show when="signed-in">
                    <UserButton />
                  </Show>
                  <div>
                    <span className="truncate text-xs">{user?.emailAddresses[0].emailAddress}</span>
                  </div>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}