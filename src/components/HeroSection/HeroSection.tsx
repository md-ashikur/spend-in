import { Button, Flex, theme } from "antd";
import React from "react";

export default function HeroSection() {
  const { token } = theme.useToken();

  return (
    <div
      style={{
        
        padding: "120px 40px",
        textAlign: "center",
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
    </div>
  );
}
