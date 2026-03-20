import Heading from "../../components/common/Heading";
import Navbar from "../../components/Navbar";

export default function KotobaList() {
  return (
    <section>
      <div className="wrapper max-w-md mx-auto">
        <Heading text="list kotoba" jpText="言葉リスト" />
        <Navbar />
      </div>
    </section>
  );
}
