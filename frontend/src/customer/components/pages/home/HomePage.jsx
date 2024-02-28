import React from "react";
import MainCarousel from "../../homecarasoule/Maincarasoule";
import HomesectionCarasoule from "../../homesectioncarasoule/HomesectionCarasoule";
import { kurtaPage1 } from "./data";
export default function HomePage() {
  return (
    <div>
      <div>
        <MainCarousel />
      </div>
      <div className="border px-5 lg:px-10 space-y-10 flex flex-col justify-center py-20">
        <HomesectionCarasoule data={kurtaPage1} heading={"Women's Kurta"} />
        <HomesectionCarasoule data={kurtaPage1} heading={"Women's Kurta"} />
        <HomesectionCarasoule data={kurtaPage1} heading={"Women's Kurta"} />
      </div>
    </div>
  );
}
