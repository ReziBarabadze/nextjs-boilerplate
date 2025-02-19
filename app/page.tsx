import React from "react";
import Services from "../components/Services";
import OurFleet from "../components/OurFleet";
import WhyChooseUs from "../components/WhyChooseUs";
import OnlyToday from "@/components/OnlyToday";
import Cover from "@/components/Cover";

const HomePage = () => {
  return (
    <>
      <Cover />
      <Services />
      <OurFleet />
      <WhyChooseUs />
      <OnlyToday />
    </>
  );
};

export default HomePage;
