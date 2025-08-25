import React from "react";
import { theme, Typography } from "antd";
export default function HowItWork() {
  const { Title, Paragraph } = Typography;
  const { token } = theme.useToken();

  return (
    <div>
      <Title level={5} style={{ color: token.white }}>
        HOW IT WORKS
      </Title>
      <Title level={2} style={{ color: token.white }}>
        Few Easy Steps and Done
      </Title>
      <Paragraph>
        In just few easy step, you are all set to manage your business finances.
        Manage all expenses with Spend.In all in one place.
      </Paragraph>
    </div>
  );
}
