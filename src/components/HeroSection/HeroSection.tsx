import { Button, Flex, theme } from "antd";
import Image from "next/image";
import dashboard from "../../../public/images/Dashboard.png"
import useGsapReveal from '@/lib/gsap/useGsapReveal'

export default function HeroSection() {
  const { token } = theme.useToken();
  useGsapReveal('.hero .gsap-reveal')

  return (
    <div
      className="hero"
      style={{
        maxHeight: "140vh",
        padding: "120px 20px",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <h1 className="gsap-reveal" style={{ 
        fontSize: "clamp(32px, 8vw, 72px)", 
        margin: 0,
        lineHeight: 1.2 
      }}>
        All your business <br />
        expenses in one place.
      </h1>

      <p className="gsap-reveal" style={{ 
        color: token.secondary300, 
        fontSize: "clamp(16px, 3vw, 24px)",
        maxWidth: "600px",
        margin: "0 auto"
      }}>
        Your one-stop finance empower platform.
        <br /> Manage all your business expenses with our supafast app.
      </p>


      <Flex gap="middle" justify="center" wrap="wrap" style={{ margin: "32px 0" }}>
        <Button className="gsap-reveal" type="primary" size="large">Get a Free Demo</Button>
        <Button
          className="gsap-reveal"
          size="large"
          style={{
            backgroundColor: token.secondary500,
            border: "none",
            color: "#fff",
          }}
        >
          See Pricing
        </Button>
      </Flex>

      <Image 
        className="gsap-reveal"
        src={dashboard} 
        alt="Hero Image" 
        style={{
          marginTop: "80px", 
          maxWidth: "100%", 
          height: "auto",
          maxHeight: "400px"
        }}
      />
    </div>
  );
}