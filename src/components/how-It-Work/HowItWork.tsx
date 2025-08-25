import React from "react";
import { Card, Col, Flex, Row, theme, Typography } from "antd";
import Image from "next/image";
import register from "../../../public/images/Frame 33682.png";
import business from "../../../public/images/Frame 33681.png";
import work from "../../../public/images/Frame 33683.png";

export default function HowItWork() {
  const { Title, Paragraph } = Typography;
  const { token } = theme.useToken();

  return (
    <div style={{ padding: "120px" }}>
      <Flex vertical align="center" style={{ textAlign: "center" }}>
        <Title level={5} style={{ color: token.primary500 }}>
          HOW IT WORKS
        </Title>
        <Title level={2} style={{ color: token.white }}>
          Few Easy Steps and Done
        </Title>
        <Paragraph style={{ color: token.secondary300, fontSize: 20 }}>
          In just few easy step, you are all set to manage your business
          finances.
          <br /> Manage all expenses with Spend.In all in one place.
        </Paragraph>
      </Flex>

      <Flex justify="center">
        <Row gutter={80}>
          <Col span={8}>
            <Card
              style={{ color: token.white, textAlign: "center" }}
              variant="borderless"
              cover={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: 16,
                  }}
                >
                  <Image
                    src={register}
                    alt="Register"
                    width={200}
                    height={200}
                  />
                </div>
              }
            >
              Register your Spend.In account.
            </Card>
          </Col>
          <Col span={8}>
            <Card
            style={{color:token.white, textAlign:"center"}}
              variant="borderless"
              cover={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: 16,
                  }}
                >
                  <Image
                    src={business}
                    alt="Business"
                    width={200}
                    height={200}
                  />
                </div>
              }
            >
              Fill in the list of your business expenses.
            </Card>
          </Col>
          <Col span={8}>
            <Card
              style={{ color: token.white, textAlign: "center" }}
              variant="borderless"
              cover={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: 16,
                  }}
                >
                  <Image src={work} alt="Work" width={200} height={200} />
                </div>
              }
            >
              Done, let’s continue the work.
            </Card>
          </Col>
        </Row>
      </Flex>
    </div>
  );
}
