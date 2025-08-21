'use client';
import { theme } from "antd";
const Home = () => {
  const { token } = theme.useToken();

  return (
   <div>
     <h1 style={{ color: token.primary500 }}>Hello AntD + Tailwind Colors</h1>
   </div>
  );
};

export default Home;