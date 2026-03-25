import { currentUser } from '@clerk/nextjs/server';
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import { CardSmall } from '@/components/Cards';
import { prisma } from '@/prisma';
import TaskButton from '@/components/task-button';

export default async function Page() {
  const user = await currentUser();
  if (!user) return <div className="p-10 text-center">login first to access this page</div>;

  const tasks = await prisma.user.findUnique({
    where: {
      clerkId: user.id,
    },
    include: {
      tasks: true,
    }
  });

  if (!tasks) {
    await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        name: user.username,
      }
    });
  }

  const mapTasks = tasks?.tasks.map((task) => (
    <CardSmall key={task.id} id={task.id} title={task.title} completed={task.completed} description={String(task.description)} content={String(task.content)} />
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
                {mapTasks}
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