import { CardSmall } from "@/components/TeamCard";
import { CardButton } from "@/components/TeamButton";
import { team } from "@/app/actions/team-actions";
import { currentUser } from "@clerk/nextjs/server";

export default async function Page() {
  const user = await currentUser();
  if (!user) return <div className="p-10 text-center">login first to access this page</div>;

  const data = await team();
  return (
    <div className="flex flex-col h-screen p-5 m-5">
      <div className="font-semibold text-xl text-center pt-10 pb-10">
        Team
      </div>
      {data?.team.map((team: any, index: number) => (
        <CardSmall key={`${team}-${index}`} teamEmail={team} />
      ))}
      <CardButton />
    </div>
  );
}