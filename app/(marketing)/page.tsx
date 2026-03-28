import Link from "next/link";

export default function Page() {
  return (
    <main className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">

      <div className="relative z-10 flex flex-col justify-center items-center pointer-events-none">

        <div className="text-[30px] md:text-[40px] text-center font-light text-white/70">
          Your Productivity, Reimagined
        </div>

        <div className="text-[40px] md:text-[60px] text-center max-w-4xl font-bold leading-tight text-white mb-8">
          Tasks that move at the speed of your thoughts
        </div>

        <div className="pointer-events-auto">
          <Link href="/tasks" className="bg-white text-black hover:scale-105 transition-transform px-8 py-6 text-xl rounded-full font-semibold">
            Let’s get started
          </Link>
        </div>
      </div>

    </main>
  );
}