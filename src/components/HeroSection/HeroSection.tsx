import { Button, Flex, theme } from "antd";
import Image from "next/image";
import dashboard from "../../../public/images/Dashboard.png"

export default function HeroSection() {
  const { token } = theme.useToken();

  return (
    <div
      style={{
        maxHeight: "660px",
        padding: "120px 40px",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <h1 style={{ fontSize: "72px", margin: 0 }}>
        All your business <br />
        expenses in one place.
      </h1>

      <p style={{ color: token.secondary300, fontSize: "24px" }}>
        Your one-stop finance empower platform.
        <br /> Manage all your business expenses with our supafast app.
      </p>


      <Flex gap="middle" justify="center">
        <Button type="primary">Get a Free Demo</Button>
        <Button
          style={{
            backgroundColor: token.secondary500,
            border: "none",
            color: "#fff",
          }}
        >
          See Pricing
        </Button>
      </Flex>

      <Image src={dashboard} alt="Hero Image" style={{marginTop: "80px", maxWidth: "100%", height: "auto"}}/>
    </div>
  );
}
