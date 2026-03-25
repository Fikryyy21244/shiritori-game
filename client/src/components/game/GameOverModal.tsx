export default function GameOverModal() {
  return (
    <div className="fixed left-0 top-0 w-full bg-yellow-200  h-screen z-100 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl text-red-dark">GAME OVER!</h1>
      </div>
    </div>
  );
}
