
import NavService from "../Components/NavService";
import TimelineOrg from "../Components/timelineorg";
import TimelineIndi from "../Components/timelineindi";
import HeroSection from "../Components/hero";
import water from "../../public/assets/water.jpg"
import Footer from '../Components/Footer'


export const Water = () =>{


  const events = [
    {
      id: 1,
      title: "Install or Verify Rain Water Harvesting System",
      description: "Access home's roof and gutter system for installation of RHS(Rain Water Harvesting System), our app will provide best practices for effective storage of rain water.",
    },
    {
      id: 2,
      title: "Verification of Installation & Usage",
      description: "Fill Form and verify your address, rainwater harvesting system location, water meter and upload photos of rain water harvesting system, water meter while ensuring GPS.",
    },
    {
      id: 3,
      title: "Documentation & Monetoring Of Usage",
      description: "Regularly maintain system to ensure functionality and upload photos at 1 months interval of your water meter to show reducation in municipal water usage.",
    },
    {
      id: 4,
      title: "Receive Green Credits",
      description: "Our app will verify your rainwater harvesting system and address accoring to prior submitted documents after verification you will receive green credit within 72 hours, recognizing your contribution to sustainable water management.",
    },
  ];

  const events1 = [
    {
      id: 1,
      title: "Setup The Sewage Treatment Plant",
      description: "Install sewage treatment plant or use it if pre installed and submit all sensor details monitoring water quality parameters in our app. Ensure the STP is properly connected to the faculty sewage.",
    },
    {
      id: 2,
      title: "Document STP Usage",
      description: "Enter the STP location in our app, take photos of our installed STP capturing all key sensors, upload photo with address details for app verification.",
    },
    {
      id: 3,
      title: "Report Usage",
      description: "Monitor regular STP use for proper functioning by generated reports of water input and output using tracking parameters like pH, amonia, etc. other sensors.",
    },
    {
      id: 4,
      title: "Receive Green Credit",
      description: "Upload generated report for app verification, app will verify installation and usage based on submitted report, credits with be provided in the working week after starting of verification process.",
    },
  ];

  return(
      <div className="bg-white">
      <NavService/>
      <HeroSection 
      imageUrl={water}
      heading="Water Management"
      description="Water, being a life-sustaining resource, is the lifeblood of all living organisms on Earth. Water scarcity exacerbates climate change. Without water, all life on Earth would cease to exist. Water scarcity has been seen as a leading cause of crippled economics as it is interlinked with agriculture, energy production, industrial, and household usage."
      textcolor={"text-blue-400"}
      buttonColor={"bg-blue-600 hover:bg-blue-700 active:bg-blue-500"}
      />
      {/* <ContentSection
      title="Water Management"
      paragraph1="Planting and conserving mangroves fosters a symbiotic relationship with nature, symbolizing growth, harmony, and sustainability. mangroves represent resilience and interconnectedness, offering life-giving oxygen, shelter, and beauty. By nurturing mangroves, we embrace our role as stewards of the Earth, ensuring a thriving, balanced ecosystem for future generations."
      paragraph2=" We call you to partake in the sacred act of planting mangroves, a profound testament to our intertwined destiny with Earth. Each sapling embodies hope, resilience, and the eternal promise of renewal. Together, let us cultivate a legacy of life and harmony, nurturing the roots of existence for generations yet unborn."
      /> */}
      <TimelineIndi events={events} color="blue-600" />
      <TimelineOrg events={events1} color="blue-600" />
      <Footer />
      </div>
    );
}