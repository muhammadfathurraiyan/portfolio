import { Flower } from "../ui/Flower";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      <Flower className="absolute top-0 left-0" />
    </section>
  );
}
