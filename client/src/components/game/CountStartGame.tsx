export default function CountStartGame({ count }: { count: number }) {
  return (
    <div className="fixed left-0 top-0 w-full h-full flex justify-center items-center ">
      <span className="text-8xl font-bold text-black ">
        {count <= 0 ? "START!" : count}
      </span>
    </div>
  );
}
