'use client';
import HeroSection from "@/components/HeroSection/HeroSection";
import { theme } from "antd";
const Home = () => {
  const { token } = theme.useToken();

  return (
   <div>
   <HeroSection />
   </div>
  );
};

export default Home;