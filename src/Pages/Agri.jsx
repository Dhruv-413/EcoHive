
import NavService from "../Components/NavService";
import Timeline from "../Components/timelineorg";
import agri from "../../public/assets/agri.jpg"
import HeroSection from "../Components/hero";
import ContentSection from "../Components/Content";
import Footer from "../Components/Footer"

export const Agri = () =>{
  const events = [
    {
      id: 1,
      title: "Register Your FarmLand",
      description: "Open the Sustainable Farming section in the app, register your farm by providing form details such as farm size, location ,season and type of crop grown , ensure GPS to record farm location.",
    },
    {
      id: 2,
      title: "Implement Sustainible Farm Practices",
      description: "Our app will provide sustainable farming advices, pest management advices, which if implemented and documented by taking photos should be uploaded in app for green credit.",
    },
    {
      id: 3,
      title: "Verify Sustainable Practices ",
      description: "After growing season use app to schedule and verfication our app will review uploaded data and current farm state for verification.",
    },
    {
      id: 4,
      title: "Recieve Green Credits",
      description: "Once Verified Farmers will receive Green Credit within 72 hours app will also recomend how to apply for maximum benefits like government subsidies for sustainable farming.",
    },
  ];

  return(
      <div className="bg-white">
      <NavService/>
      <HeroSection 
      imageUrl={agri}
      heading="Sustainable Agriculture"
      description="Sustainable farming can cut water use by up to 50% and reduce soil erosion by 90%. Crop rotation and organic methods keep our land fertile and our planet healthy. With sustainable practices, crop resilience can increase by 30%, protecting our food supply from climate change, pests, and diseases. Less dependency on chemicals means safer, more reliable food. Sustainable agriculture can lower farming costs by 20% and boost yields by 15%."
      textcolor={"text-lime-400"}
      buttonColor={"bg-lime-600 hover:bg-lime-700 active:bg-lime-500"}
      />
      {/* <ContentSection
      title="Sustainable Agriculture"
      paragraph1="Planting and conserving agris fosters a symbiotic relationship with nature, symbolizing growth, harmony, and sustainability. agris represent resilience and interconnectedness, offering life-giving oxygen, shelter, and beauty. By nurturing agris, we embrace our role as stewards of the Earth, ensuring a thriving, balanced ecosystem for future generations."
      paragraph2=" We call you to partake in the sacred act of planting agris, a profound testament to our intertwined destiny with Earth. Each sapling embodies hope, resilience, and the eternal promise of renewal. Together, let us cultivate a legacy of life and harmony, nurturing the roots of existence for generations yet unborn."
      /> */}
      <Timeline events={events} color="lime-600" />
      <Footer/>
      </div>
    );
}