import { fetchUserNotices } from '@/app/actions/notice-actions';
import { NoticeCardPage } from "@/components/NoticeCardPage";

export default async function Page() {
  const tasks = await fetchUserNotices()
  if (tasks?.notice.length == 0) {
    return (
      <div className="flex items-center justify-center h-screen font-bold text-2xl">
        <p>No notices found</p>
      </div>
    )
  }
  const mapTasks = tasks?.notice.map((notice: any, index: number) => (
    <NoticeCardPage key={`${notice}-${index}`} notice={notice} />
  ))

  return (
    <div>
      {mapTasks}
    </div>
  );
}