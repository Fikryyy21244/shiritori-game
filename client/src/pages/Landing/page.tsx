import Heading from "../../components/common/Heading";
import LandingButton from "../../components/common/LandingButton";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const buttons = [
  {
    text: "Single Player",
    bgColor: "bg-red-300",
    textColor: "",
    path: "/play/single",
  },
  {
    text: "Multi Player",
    bgColor: "bg-amber-300",
    textColor: "/play/multiplayer",
    path: "/play/multiplayer",
  },
];

export default function LandingPage() {
  return (
    <section>
      <div className="wrapper max-w-md mx-auto">
        <Heading text="shiritori" jpText="しりとり ゲーム" />
        <Navbar />

        <div className="mb-4">
          <div className="grid grid-cols-2 gap-2">
            {buttons.map((b) => {
              return (
                <LandingButton
                  text={b.text}
                  bgColor={b.bgColor}
                  path={b.path}
                />
              );
            })}
          </div>
        </div>

        <div className="border-2 bg-white border-black text-center p-2 ">
          <span
            className="text-sm"
            style={{ fontFamily: "var(--font-iosevka)" }}
          >
            言葉をつなげよう！ Lanjutkan sambung katanya!
          </span>
        </div>

        <Footer />
      </div>
    </section>
  );
}
