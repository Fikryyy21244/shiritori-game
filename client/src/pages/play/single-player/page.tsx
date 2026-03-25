import { useNavigate } from "react-router-dom";
import Heading from "../../../components/common/Heading";
import { useState } from "react";

export default function SinglePlayerPage() {
  const navigate = useNavigate();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleStartGame = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      navigate("/play/single/game", {
        state: {
          isGameStart: true,
        },
      });
    }, 3000);
  };

  return (
    <section>
      <div className="max-w-md mx-auto text-center">
        {isRedirecting && (
          <div className="fixed inset-0 z-10 flex flex-col items-center justify-center bg-yellow-light backdrop-blur-sm rounded-xl">
            <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-2 font-bold text-black animate-pulse text-sm">
              Menyiapkan Game...
            </p>
          </div>
        )}

        <Heading text="Single Player" jpText="一人プレイ" />

        <p className="mt-4 text-gray-600">
          Mainkan shiritori dan uji kosakata Jepang kamu!
        </p>

        <button
          onClick={handleStartGame}
          className="border-2 border-black bg-blue-400 hover:bg-blue-500 text-white font-bold px-6 py-3 mt-6 rounded-lg w-full cursor-pointer"
        >
          Start Game
        </button>

        <div className="mt-6 text-left bg- p-4 bg-red-dark border-2 border-black">
          <h2 className="font-bold mb-2 text-white">Cara Bermain</h2>
          <ul className="text-sm text-white space-y-1">
            <li>• Masukkan kata Jepang (hiragana)</li>
            <li>• Kata harus dimulai dari huruf terakhir sebelumnya</li>
            <li>• Tidak boleh mengulang kata</li>
            <li>• Jangan sampai berakhir dengan "ん"</li>
          </ul>
        </div>

        <div className="mt-4 text-left bg-yellow-100 p-4  border-2 boder-yellow-400">
          <h2 className="font-bold mb-2">Tips</h2>
          <p className="text-sm text-gray-700">
            Gunakan kosakata sederhana dulu seperti りんご, ねこ, いぬ untuk
            bertahan lebih lama!
          </p>
        </div>
      </div>
    </section>
  );
}
