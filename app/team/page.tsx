import { TeamCard } from "@/components/TeamCard";
import { TeamButton } from "@/components/TeamButton";
import { fetchTeamData } from "@/app/actions/team-actions";
import { currentUser } from "@clerk/nextjs/server";

export default async function Page() {
  const currentClerkUser = await currentUser();
  if (!currentClerkUser) return <div className="p-10 text-center">login first to access this page</div>;

  const userWithTeamData = await fetchTeamData();
  return (
    <div className="flex flex-col h-screen p-5 m-5">
      <div className="font-semibold text-xl text-center pt-10 pb-10">
        Team
      </div>
      {userWithTeamData?.team.map((memberEmail: any, index: number) => (
        <TeamCard key={`${memberEmail}-${index}`} teamEmail={memberEmail} />
      ))}
      <TeamButton />
    </div>
  );
}