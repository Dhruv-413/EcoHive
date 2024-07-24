import NavService from "../Components/NavService";
import Timeline from "../Components/timelineorg";
import HeroSection from "../Components/hero";
import air from "../../public/assets/air.jpg"
import ContentSection from "../Components/Content";
import Footer from "../Components/Footer"

export const Air = () => {


  const events = [
    {
      id: 1,
      title: "Company Inception",
      description: "The company was born out of a vision to innovate.",
    },
    {
      id: 2,
      title: "Achieved $65 Million Funding",
      description: "In an affirmation of our potential and promise, we secured a substantial funding of $65 million.",
    },
    {
      id: 3,
      title: "Beta Version Launch",
      description: "Marking a significant step forward, we released the beta version of our product.",
    },
    {
      id: 4,
      title: "Product's Global Rollout",
      description: "The culmination of our efforts and dedication led to the global launch of our product.",
    },
  ];

  return (
    <div className="bg-white">
      <NavService />
      <HeroSection 
      imageUrl={air}
      heading="Air Polution Reduction"
      description="Largest pollution-producing sector for all nations all over the world since the last century. Is the main factor in global warming and is a leading factor in human demise all over the world. Most of the leading billion-dollar enterprises all over the world have promised to drastically reduce their carbon footprints in the next few decades. While net industrial air pollution is still increasing every year, leading to reduced average life expectancy all over the world,."
      textcolor={"text-gray-400"}
      buttonColor={"bg-gray-600 hover:bg-gray-700 active:bg-gray-500"}
      />
      <ContentSection
        title="Air Pollution"
        paragraph1="Planting and conserving airs fosters a symbiotic relationship with nature, symbolizing growth, harmony, and sustainability. airs represent resilience and interconnectedness, offering life-giving oxygen, shelter, and beauty. By nurturing airs, we embrace our role as stewards of the Earth, ensuring a thriving, balanced ecosystem for future generations."
        paragraph2="We call you to partake in the sacred act of planting airs, a profound testament to our intertwined destiny with Earth. Each sapling embodies hope, resilience, and the eternal promise of renewal. Together, let us cultivate a legacy of life and harmony, nurturing the roots of existence for generations yet unborn."
      />
      <Timeline events={events} color="gray-600" />
      <Footer/>
    </div>
  );
};
