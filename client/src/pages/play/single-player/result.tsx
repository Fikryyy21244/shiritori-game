import { useLocation, useNavigate } from "react-router-dom";

type StateProps = {
  score: number;
  totalWordsAnswered: string[];
};

export default function SoloGameResult() {
  const location = useLocation();
  const navigate = useNavigate();

  const { score = 0, totalWordsAnswered = [] }: StateProps =
    location.state || {};

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="max-w-sm w-full ">
        <div className=" text-center">
          <h1
            className="text-4xl font-black text-red-dark  uppercase italic"
            style={{ fontFamily: "var(--font-rampart)" }}
          >
            HASIL
          </h1>
          <p className="text-red-500 font-bold tracking-widest text-sm mt-1">
            PERMAINAN SELESAI
          </p>
        </div>

        <div className="p-8 flex flex-col gap-6">
          <div className="relative bg-yellow-400 rounded-2xl p-4 text-center shadow-[0_8px_0_0_#ca8a04]">
            <span className="block text-xs font-black text-yellow-800 uppercase tracking-widest mb-1">
              Skor Kamu
            </span>
            <span className="text-5xl font-black text-white drop-shadow-[0_4px_0_rgba(0,0,0,0.2)]">
              {score}
            </span>
          </div>

          <div className="bg-orange-100 rounded-xl p-4 flex justify-between items-center border-2 border-orange-200">
            <span className="font-bold text-orange-800 uppercase text-sm">
              Total Kata
            </span>
            <span className="text-2xl font-black text-orange-600">
              {totalWordsAnswered.length}
            </span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() =>
                navigate("/play/single/game", { state: { isGameStart: true } })
              }
              className="w-full bg-green-500 hover:bg-green-400 text-sm text-white font-black py-4 rounded-xl  active:translate-y-1  transition-all uppercase tracking-wider cursor-pointer"
            >
              Main Lagi
            </button>

            <button
              onClick={() => navigate("/")}
              className="w-full bg-slate-200 hover:bg-slate-300 text-slate-600 font-black py-3 rounded-xl transition-colors uppercase text-sm cursor-pointer"
            >
              Kembali ke Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
