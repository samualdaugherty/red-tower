import { Hero } from "@/components/sections/hero";
import { Goals } from "@/components/sections/goals";
import { Focus } from "@/components/sections/focus";
import { Clients } from "@/components/sections/clients";
import { Process } from "@/components/sections/process";
import { ContactCTA } from "@/components/sections/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Goals />
      <Focus />
      <Clients />
      <Process />
      <ContactCTA />
    </>
  );
}
