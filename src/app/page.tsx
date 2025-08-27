'use client';
import Benefit2 from "@/components/benefits/Benefit2";
import Benefits from "@/components/benefits/Benefits";
import HeroSection from "@/components/HeroSection/HeroSection";
import HowItWork from "@/components/how-It-Work/HowItWork";
import HowItWork2 from "@/components/how-It-Work/HowItWork2";
import Testimonials from "@/components/Testimonials/Testimonials";

const Home = () => {
 

  return (
   <div >
   <HeroSection />
   <Benefits/>
   <Benefit2/>
   <HowItWork/>
   <HowItWork2/>
   <Testimonials/>
   </div>
  );
};

export default Home;