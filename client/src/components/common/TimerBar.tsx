export default function TimerBar({
  timeLeft,
  maxTime,
}: {
  timeLeft: number;
  maxTime: number;
}) {
  const percentage = (timeLeft / maxTime) * 100;

  let color = "bg-green-400";

  if (percentage < 50) color = "bg-yellow-400";
  if (percentage < 25) color = "bg-red-500";

  return (
    <div className="w-full h-2 bg-gray-300 rounded-full border-2 border-gray-600 overflow-hidden">
      <div
        className={`h-full ${color}  transition-all duration-1000`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}
