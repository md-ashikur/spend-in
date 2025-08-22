import { theme } from "antd";
import React from "react";

export default function HeroSection() {
  const { token } = theme.useToken();

  return (
    <div
      style={{
        height: "90vh",
        padding: "40px",
        textAlign: "center",       
      }}
    >
      <h1 style={{ fontSize: "72px", margin: 0 }}>
        All your business <br />
        expenses in one place.
      </h1>

      <h4>
        Your one-stop finance empower platform. Manage all your business
        expenses with our supafast app.
      </h4>
    </div>
  );
}
