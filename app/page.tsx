import React from "react";
import Header from "@/components/header";
import Testimonials from "@/components/testimonials";
import { InfiniteMovingCardsDemo } from "@/components/movingcards";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main className="h-full w-full">
      <Header />
      <Testimonials />
      <InfiniteMovingCardsDemo />
      <Pricing />
    </main>
  );
}
