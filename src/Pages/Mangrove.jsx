
import Timeline from "../Components/timelineorg";
import HeroSection from "../Components/hero"
import mangrove from "../../public/assets/mangrove.jpg"
import NavService from "../Components/NavService";
import Footer from "../Components/Footer"


export const Mangrove = () =>{


  const events = [
    {
      id: 1,
      title: "Planting & Prepration",
      description: " Open the Mangrove section in app provide, location where you intent to plant, our app will recomend best time and type of mangrove to plant bases on location, obtain and verify permits and prepare site for plantation.",
    },
    {
      id: 2,
      title: "Plant Mangrove",
      description: "Partner with local communitites to carry out plantation process, use GPS enabled device to ensure acurate location tracking, upload a before and after photo for documentation.",
    },
    {
      id: 3,
      title: "Monitor Mangrove",
      description: "Develop a monitoring schedule and conduct a periodic site visits ensuring mangroves are cared and protected from environmental threats.",
    },
    {
      id: 4,
      title: "Receive Green Credit By Verification",
      description: "After 36 months click updated photos of planting sites  for Maangroves and upload for app verification. After verification our ML model and Satelite willverify the growth of Mangroves, area covered, planting density and NGO's or organizations will receive their green credits within 30 days recognizing their contribution",
    },
  ];


  return(
      <div className="bg-white">
        <NavService/>
      <HeroSection 
      imageUrl={mangrove}
      heading="Mangrove Conservation"
      description="Mangrove forests have existed for over 100 years, a testament to their longevity and ecological significance. They are home to over 1000 species of fish, birds, and other wildlife. Mangroves reduce coastal erosion by 70%, protecting us from storms, tsunamis, and flooding. Mangrove forests can store five times more carbon per hectare than tropical rainforests."
      textcolor={"text-green-400"}
      buttonColor={"bg-green-600 hover:bg-green-700 active:bg-green-500"}
      />
      {/* <ContentSection
      title="Mangrove Conservation"
      paragraph1="Mangrove Forest have existed for over 100 years a testament to their longevity and ecological significance. They are homne to over 1000 species of fish, birds and other wild life. Mangrove reduce costal erosion by 70% protecting us from strom ,tsunami and flooding. Mangrove forest can store 5 time more carbon per hect are than tropical rain forest "
      paragraph2=" We call you to partake in the sacred act of planting mangroves, a profound testament to our intertwined destiny with Earth. Each sapling embodies hope, resilience, and the eternal promise of renewal. Together, let us cultivate a legacy of life and harmony, nurturing the roots of existence for generations yet unborn."
      /> */}
      <Timeline events={events} color="green-600" />
      <Footer />
      </div>
    );
}