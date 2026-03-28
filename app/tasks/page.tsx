import { currentUser } from '@clerk/nextjs/server';
import { AppSidebar } from "@/components/AppSidebar"
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import { TaskCard } from '@/components/Cards';
import { prisma } from '@/prisma';
import TaskButton from '@/components/TaskButton';

export default async function Page() {
  const currentClerkUser = await currentUser();
  if (!currentClerkUser) return <div className="p-10 text-center">login first to access this page</div>;

  const userWithTasks = await prisma.user.findUnique({
    where: {
      clerkId: currentClerkUser.id,
    },
    include: {
      tasks: true,
    }
  });

  if (!userWithTasks) {
    await prisma.user.create({
      data: {
        clerkId: currentClerkUser.id,
        email: currentClerkUser.emailAddresses[0].emailAddress,
        name: currentClerkUser.username,
      }
    });
  }

  const renderedTaskList = userWithTasks?.tasks.map((task) => (
    <TaskCard key={task.id} id={task.id} title={task.title} completed={task.completed} description={String(task.description)} content={String(task.content)} />
  ));

  return (
    <div className="h-screen w-full">
      <TooltipProvider delayDuration={0}>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
              <div className="flex items-center gap-2">
                <SidebarTrigger />
                <div className="h-4 w-[1px] bg-border mx-2" />
                <h1 className="text-sm font-medium">Dashboard</h1>
              </div>
            </header>
            <div className="flex-1 m-10 p-10">
              <h2 className="text-2xl pb-20 text-center font-bold">inbox</h2>
              <div className='flex flex-col gap-6'>
                {renderedTaskList}
              </div>
              <div className='flex justify-center pt-10 items-center'>
                <TaskButton />
              </div>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </TooltipProvider>
    </div>
  );
}