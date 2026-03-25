import Heading from "../../components/common/Heading";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const howToPlayData = [
  {
    title: "🎯 Tujuan Game",
    content:
      "Sambungkan kata bahasa Jepang dari huruf terakhir kata sebelumnya.",
  },
  {
    title: "🔤 Aturan Dasar",
    list: [
      "Kata harus dimulai dari huruf terakhir",
      "Tidak boleh mengulang kata",
      "Tidak boleh berakhir dengan 「ん」",
    ],
  },
  {
    title: "⏱️ Timer",
    content:
      "Kamu memiliki waktu terbatas untuk menjawab. Jika waktu habis, kamu kalah.",
  },
  {
    title: "👥 Mode Game",
    list: [
      "Single Player: Main sendiri",
      "Multiplayer: Bergantian dengan pemain lain",
    ],
  },
];

export default function HowToPlayPage() {
  return (
    <section>
      <div className="wrapper max-w-md mx-auto ">
        <Heading text="Cara Bermain" jpText="遊び方" />
        <Navbar />

        <div className="mt-6 space-y-4">
          {howToPlayData.map((item, index) => (
            <div key={index} className="border-2 border-black p-4">
              <h2 className="font-bold text-lg mb-2">{item.title}</h2>

              {item.content && (
                <p className="text-sm text-[#333]">{item.content}</p>
              )}

              {item.list && (
                <ul className="text-sm text-[#333] space-y-1">
                  {item.list.map((li, i) => (
                    <li key={i}>• {li}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="bg-yellow-100 border-2 border-yellow-400  p-4">
            <h2 className="font-bold text-lg mb-2">💡 Contoh</h2>
            <p className="text-sm text-gray-700">
              さくら → らっぱ → ぱんだ → だるま
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </section>
  );
}
