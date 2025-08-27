'use client';
import Benefit2 from "@/components/benefits/Benefit2";
import Benefits from "@/components/benefits/Benefits";
import HeroSection from "@/components/HeroSection/HeroSection";
import HowItWork from "@/components/how-It-Work/HowItWork";
import HowItWork2 from "@/components/how-It-Work/HowItWork2";

const Home = () => {
 

  return (
   <div >
   <HeroSection />
   <Benefits/>
   <Benefit2/>
   <HowItWork/>
   <HowItWork2/>
   </div>
  );
};

export default Home;