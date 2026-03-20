import { useLocation, useNavigate } from "react-router-dom";

const navList = [
  {
    label: "ホーム",
    path: "/",
  },
  {
    label: "言葉リスト",
    path: "/list-kotoba",
  },
  {
    label: "遊び方",
    path: "/cara-bermain",
  },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <nav className="mb-4">
      <ul className="grid grid-cols-3 gap-2">
        {navList.map((n) => {
          const isActive = n.path === location.pathname;
          return (
            <li
              onClick={() => navigate(n.path)}
              className={`group border-2 border-black text-center p-2 ${isActive ? "bg-red-dark " : "bg-transparent"} cursor-pointer hover:bg-red-dark  `}
            >
              <span
                className={`text-base  ${isActive ? "text-white" : "group-hover:text-white"} font-semibold`}
                style={{ fontFamily: "var(--font-rampart)" }}
              >
                {n.label}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
