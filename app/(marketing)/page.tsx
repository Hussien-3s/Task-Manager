export default function Page() {

  return (
    <div
      style={{ backgroundImage: `url('/image/background.jpg')` }}
      className="bg-cover bg-center bg-no-repeat h-screen w-full overflow-hidden flex flex-col"
    >
      <div className="flex-1 flex flex-col justify-center items-center px-4">
        <div className="text-[30px] md:text-[40px] text-center">
          Your Productivity, Reimagined
        </div>
        <div className="text-[40px] md:text-[60px] text-center max-w-4xl">
          Tasks that move at the speed of your thoughts
        </div>
      </div>
    </div>
  )
}
