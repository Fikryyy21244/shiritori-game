import { useLocation } from "react-router-dom";

export default function SoloGameResult() {
  const location = useLocation();
  const { score, totalWordsAnswered } = location.state;

  console.log(score, totalWordsAnswered);

  return (
    <section>
      <div className="max-w-md m-auto">
        <h1>HASIL</h1>
      </div>
    </section>
  );
}
