import { useNavigate } from "react-router-dom";

type Props = {
  text: string;
  bgColor: string;
  textColor?: string;
  path: string;
};

export default function LandingButton({
  text,
  bgColor,
  textColor = "text-black",
  path,
}: Props) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(path)}
      className={`flex flex-col justify-center items-center p-10 border-2 border-black ${bgColor} ${textColor} cursor-pointer`}
    >
      <span className="font-samurai-blast">{text}</span>
    </button>
  );
}
