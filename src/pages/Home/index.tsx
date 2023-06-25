import Services from "./services/Services";
import Carrossel from "./carousel/Carousel";

export default function Home() {
  return (
    <main className="w-full">
      <Carrossel />
      <Services />
    </main>
  );
}
