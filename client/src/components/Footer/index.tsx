import { RiInstagramFill } from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";

const social_medias = [
  {
    name: "instagram",
    src: "https://www.instagram.com/haikaru3003/",
    icon: <RiInstagramFill size={20} color="#ca3c25" />,
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    name: "github",
    src: "https://github.com/Fikryyy21244",
    icon: <FaGithubSquare size={20} color="white" />,
    bgColor: "bg-black",
    textColor: "text-white",
  },
];

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center border-t-2 border-t-black border-dashed mb-4 mask-t-to-80 mt-8">
      <div className="flex  items-center gap-3 my-4">
        <img
          src="/avatar.jpg"
          alt="Developer Profile"
          className="w-14 h-14 rounded-full border-2 border-black object-cover"
        />
        <div className="flex flex-col">
          <p className="text-[10px] uppercase font-black leading-none text-gray-500">
            Developed by
          </p>
          <p className="font-bold text-lg leading-tight">Haikaru</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {social_medias.map((s) => (
          <a
            href={s.src}
            target="_blank"
            rel="noopener noreferrer"
            key={s.name}
            className={`group flex items-center gap-1 p-2 border-2 border-black cursor-pointer transition-colors ${s.bgColor} ${s.textColor}`}
          >
            <div>{s.icon}</div>
            <p className="text-sm font-medium">{s.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
