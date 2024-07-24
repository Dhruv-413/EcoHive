import NavService from "../Components/NavService";
import TimelineOrg from "../Components/timelineorg";
import TimelineIndi from "../Components/timelineindi";
import tree from "../../public/assets/tree.jpg";
import HeroSection from "../Components/hero";
import Footer from '../Components/Footer'

export const Tree = () => {
  const events = [
    {
      id: 1,
      title: "Preparation & Plantation of Tree",
      description: "Open the app navigate to tree plantation, enable phone's GPS, click a photo of tree while staying within 2 meters, upload the photo on the app.",
    },
    {
      id: 2,
      title: "Monitor and Verify Tree Growth",
      description: "Visit the location in periods in 6 months and after the time frame click a photo of the same tree to show its growth, upload photo for verification.",
    },
    {
      id: 3,
      title: "Recieve Green Credits",
      description: "Once photo is uploaded our app with the help of satellite and advance ML model will verify the tree's growth after verification, recieve green credit in 72 hours.",
    },
    {
      id: 4,
      title: "Benefits Of Initiative",
      description: "The initiate will help you reduce carbon foothprint and green crdits can be redeemed for rewards, rebates and monetary benefits from government and private Organizations.",
    },
  ];


  const events1 = [
    {
      id: 1,
      title: "Land Allocation & Plantation Prepration",
      description: "Organizations aquire land or plantation by government then they navigate to organization tree plantation section, assign partners on the app to carry out plantation process.",
    },
    {
      id: 2,
      title: "Plantation & Monitoring",
      description: "Ensure GPS enabled devices to record location of tree plantation and click photos to ensure acurate location tracking, upload photos to document the planting activity.",
    },
    {
      id: 3,
      title: "Verify Tree Growth",
      description: "Involve regular sites visits to protect tress from pest and diseases after 6 months upload updated photos for showing tree growth and for app verification.",
    },
    {
      id: 4,
      title: "Receive Green Credit & Benefits",
      description: "Earn susbtanitial green credit after large scale contribution verificatiion and enhance corporate social responsibility profile.",
    },
  ];


  return (
    <div className="bg-white">
      <NavService />
      <HeroSection 
      imageUrl={tree}
      heading="Tree Plantation"
      description="Trees are incredible environmental powerhouses with numerous benefits. A single mature tree can produce enough oxygen for ten people in one season and absorb up to one ton of carbon dioxide over its lifetime, significantly aiding in the fight against climate change. Trees support biodiversity, providing homes for 80% of the world’s terrestrial species. Spending time around trees and green spaces has been shown to reduce stress, lower blood pressure, and improve mental well-being."
      textcolor={"text-green-400"}
      buttonColor={"bg-green-600 hover:bg-green-700 active:bg-green-500"}
      />
      {/* <ContentSection
        title="Tree Plantation"
        paragraph1="Planting and conserving trees fosters a symbiotic relationship with nature, symbolizing growth, harmony, and sustainability. Trees represent resilience and interconnectedness, offering life-giving oxygen, shelter, and beauty. By nurturing trees, we embrace our role as stewards of the Earth, ensuring a thriving, balanced ecosystem for future generations."
        paragraph2=" We call you to partake in the sacred act of planting trees, a profound testament to our intertwined destiny with Earth. Each sapling embodies hope, resilience, and the eternal promise of renewal. Together, let us cultivate a legacy of life and harmony, nurturing the roots of existence for generations yet unborn."
      /> */}
      <TimelineIndi events={events} color="green-600" />
      <TimelineOrg events={events1} color="green-600" />
      <Footer />
    </div>
  );
};
