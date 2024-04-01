import {
  Brand,
  Header,
  Hero,
  Services,
  Subscribe,
  TravelPoint,
} from "@/components";
import Image from "next/image";
import Ellipse23 from "@/public/Ellipse23.svg";
import Ellipse2 from "@/public/Ellipse2.svg";

export default function Home() {
  return (
    <main className=" relative">
      <Image
        className="ellipse23"
        src={Ellipse23}
        alt="Ellipse for background"
      />
      <div className="absolute right-0 top-80" style={{ zIndex: "-1" }}>
        <Image src={Ellipse2} alt="ellipse for bg" />
      </div>
      <Header />
      <Hero />
      <Brand />
      <TravelPoint />
      <Services />
      <Subscribe />
    </main>
  );
}
