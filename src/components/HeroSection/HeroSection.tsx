import { Button, Flex, theme } from "antd";
import Image from "next/image";
import dashboard from "../../../public/images/Dashboard.png"

export default function HeroSection() {
  const { token } = theme.useToken();

  return (
    <div
      style={{
        maxHeight: "660px",
        padding: "120px 20px",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <h1 style={{ 
        fontSize: "clamp(32px, 8vw, 72px)", 
        margin: 0,
        lineHeight: 1.2 
      }}>
        All your business <br />
        expenses in one place.
      </h1>

      <p style={{ 
        color: token.secondary300, 
        fontSize: "clamp(16px, 3vw, 24px)",
        maxWidth: "600px",
        margin: "0 auto"
      }}>
        Your one-stop finance empower platform.
        <br /> Manage all your business expenses with our supafast app.
      </p>


      <Flex gap="middle" justify="center" wrap="wrap" style={{ margin: "32px 0" }}>
        <Button type="primary" size="large">Get a Free Demo</Button>
        <Button
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