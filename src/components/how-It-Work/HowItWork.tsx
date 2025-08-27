import React from "react";
import { Button, Card, Col, Flex, Row, theme, Typography } from "antd";
import Image from "next/image";
import register from "../../../public/images/Frame 33682.png";
import business from "../../../public/images/Frame 33681.png";
import work from "../../../public/images/Frame 33683.png";

export default function HowItWork() {
  const { Title, Paragraph } = Typography;
  const { token } = theme.useToken();

  return (
    <div style={{ padding: "120px 20px" }}>
      <Flex vertical align="center" style={{ textAlign: "center" }}>
        <Title level={5} style={{ color: token.primary500 }}>
          HOW IT WORKS
        </Title>
        <Title level={2} style={{ 
          color: token.white,
          fontSize: "clamp(24px, 5vw, 40px)"
        }}>
          Few Easy Steps and Done
        </Title>
        <Paragraph style={{ 
          color: token.secondary300, 
          fontSize: "clamp(16px, 2.5vw, 20px)",
          maxWidth: "600px",
          margin: "0 auto"
        }}>
          In just few easy step, you are all set to manage your business
          finances.
          <br /> Manage all expenses with Spend.In all in one place.
        </Paragraph>
      </Flex>

      <Flex justify="center" style={{ marginTop: "64px" }}>
        <Row gutter={[32, 32]} justify="center">
          {/* Step 1 - Register */}
          <Col xs={24} sm={12} lg={8}>
            <div style={{ position: "relative", textAlign: "center" }}>
              {/* Number Circle */}
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: token.primary500,
                  border: `6px solid ${token.secondary700}`,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  top: "-10px",
                  left: "60px",
                  transform: "translateX(-50%)",
                  zIndex: 2,
                  color: "white",
                  fontSize: "24px",
                  fontWeight: "bold",
                  
                }}
              >
                1
              </div>

              {/* Card with form-like content */}
              <Card
               style={{color:token.white, textAlign:"center"}}
              variant="borderless"
              cover={
                <Flex justify="center"
                  style={{
                    paddingTop: 16,
                  }}
                >
                  <Image
                    src={register}
                    alt="Business"
                    width={200}
                    height={200}
                  />
                </Flex>
              }
            >
             Register your Spend.In account.
            </Card>
            </div>
          </Col>

          {/* card 2---------- */}
           <Col xs={24} sm={12} lg={8}>
            <div style={{ position: "relative", textAlign: "center" }}>
              {/* Number Circle */}
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: token.primary500,
                  border: `6px solid ${token.secondary700}`,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  top: "-10px",
                  left: "60px",
                  transform: "translateX(-50%)",
                  zIndex: 2,
                  color: "white",
                  fontSize: "24px",
                  fontWeight: "bold",
                  
                }}
              >
                2
              </div>

              {/* Card with form-like content */}
              <Card
               style={{color:token.white, textAlign:"center"}}
              variant="borderless"
              cover={
                <Flex justify="center"
                  style={{
                    paddingTop: 16,
                  }}
                >
                  <Image
                    src={business}
                    alt="Business"
                    width={200}
                    height={200}
                  />
                </Flex>
              }
            >
              Fill in the list of your business expenses.
            </Card>
            </div>
          </Col>
          
          {/* card 3---------- */}
            <Col xs={24} sm={12} lg={8}>
            <div style={{ position: "relative", textAlign: "center" }}>
              {/* Number Circle */}
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: token.primary500,
                  border: `6px solid ${token.secondary700}`,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  top: "-10px",
                  left: "60px",
                  transform: "translateX(-50%)",
                  zIndex: 2,
                  color: "white",
                  fontSize: "24px",
                  fontWeight: "bold",
                  
                }}
              >
                3
              </div>

              {/* Card with form-like content */}
              <Card
               style={{color:token.white, textAlign:"center"}}
              variant="borderless"
              cover={
              <Flex justify="center"
                  style={{
                    paddingTop: 16,
                  }}
                >
                  <Image
                    src={work}
                    alt="work"
                    width={200}
                    height={200}
                  />
                </Flex>
              }
            >
             Done, let’s continue the work.
            </Card>
            </div>
          </Col>
        </Row>
      </Flex>

      
      <Flex gap="middle" justify="center" style={{marginTop: "64px"}}>
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
