type Props = {
  text: string;
  bgColor: string;
  textColor?: string;
};

export default function LandingButton({
  text,
  bgColor,
  textColor = "text-black",
}: Props) {
  return (
    <button
      className={`flex flex-col justify-center items-center p-10 border-2 border-black ${bgColor} ${textColor} cursor-pointer`}
    >
      <span className="font-samurai-blast">{text}</span>
    </button>
  );
}
