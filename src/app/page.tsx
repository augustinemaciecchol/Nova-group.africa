import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Divisions } from "@/components/Divisions";
import { Leadership } from "@/components/Leadership";
import { Edge } from "@/components/Edge";
import { Csr } from "@/components/Csr";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Divisions />
      <Leadership />
      <Edge />
      <Csr />
      <Contact />
    </>
  );
}
