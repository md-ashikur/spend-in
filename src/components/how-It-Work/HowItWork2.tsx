import { Col, Flex, Row, theme, Typography, Grid } from "antd";
import content3 from "../../../public/images/content3.png";
import Image from "next/image";

export default function HowItWork2() {
  const { token } = theme.useToken();
  const { Title, Paragraph } = Typography;
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  
  return (
    <Flex justify="center" align="center">
      <Row 
        style={{ 
          padding: screens.xs 
            ? "40px 16px" 
            : screens.sm 
            ? "50px 20px" 
            : "60px 20px",
          maxWidth: "1200px",
          width: "100%"
        }} 
        gutter={screens.xs ? [16, 24] : screens.sm ? [24, 32] : [32, 32]}
      >
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Flex justify="center" align="center" style={{ 
            padding: screens.xs ? "0 8px" : "0 16px"
          }}>
            <Image
              src={content3}
              alt="Content 3"
              style={{ 
                maxWidth: "100%", 
                height: "auto",
                width: screens.xs ? "90%" : "100%"
              }}
            />
          </Flex>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          style={{ 
            padding: screens.xs 
              ? "20px 8px 0 8px" 
              : screens.sm 
              ? "0 16px" 
              : "0 20px"
          }}
        >
          <Title level={4} style={{ 
            color: token.primary500,
            fontSize: screens.xs ? "14px" : "16px",
            marginBottom: screens.xs ? "8px" : "16px"
          }}>
            HOW IT WORKS
          </Title>
          <Title
            level={2}
            style={{
              color: token.white,
              fontSize: "clamp(20px, 5vw, 40px)",
              marginBottom: screens.xs ? "12px" : "16px",
              lineHeight: 1.3
            }}
          >
            Few Easy Steps and Done
          </Title>
          <Paragraph
            style={{
              color: token.secondary300,
              fontSize: "clamp(14px, 2.5vw, 18px)",
              lineHeight: 1.6,
              marginBottom: screens.xs ? "24px" : "40px"
            }}
          >
            In just few easy step, you are all set to manage your business
            finances. Manage all expenses with Spend.In all in one place.
          </Paragraph>

          {/* Steps List */}
          <div style={{ marginTop: screens.xs ? "24px" : "40px" }}>
            {/* Step 1 */}
            <Flex align="center" style={{ marginBottom: screens.xs ? "16px" : "0" }}>
              <div
                style={{
                  width: screens.xs ? "40px" : "48px",
                  height: screens.xs ? "40px" : "48px",
                  backgroundColor: token.primary500,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: screens.xs ? "16px" : "20px",
                  fontWeight: "bold",
                  marginRight: screens.xs ? "12px" : "16px",
                  flexShrink: 0,
                }}
              >
                1
              </div>
              <Title level={5} style={{ 
                color: token.white, 
                margin: 0,
                fontSize: screens.xs ? "14px" : "16px",
                lineHeight: 1.4
              }}>
                Register your Spend.In account.
              </Title>
            </Flex>

            {/* Connecting Line */}
            <div
              style={{
                width: "2px",
                height: screens.xs ? "40px" : "52px",
                backgroundColor: token.primary500,
                marginLeft: screens.xs ? "19px" : "23px",
                marginBottom: "0",
              }}
            />

            {/* Step 2 */}
            <Flex align="center" style={{ marginBottom: screens.xs ? "16px" : "0" }}>
              <div
                style={{
                  width: screens.xs ? "40px" : "48px",
                  height: screens.xs ? "40px" : "48px",
                  backgroundColor: token.primary500,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: screens.xs ? "16px" : "20px",
                  fontWeight: "bold",
                  marginRight: screens.xs ? "12px" : "16px",
                  flexShrink: 0,
                }}
              >
                2
              </div>
              <Title level={5} style={{ 
                color: token.white, 
                margin: 0,
                fontSize: screens.xs ? "14px" : "16px",
                lineHeight: 1.4
              }}>
                Fill in the list of your business expenses.
              </Title>
            </Flex>

            {/* Connecting Line 2 dashed line */}
            <div
              style={{
                width: "2px",
                height: screens.xs ? "40px" : "52px",
                background: `repeating-linear-gradient(to bottom, transparent 5px, transparent 8px, ${token.white} 0px, ${token.white} 20px)`,
                marginLeft: screens.xs ? "19px" : "23px",
              }}
            />

            {/* Step 3 */}
            <Flex align="center">
              <div
                style={{
                  width: screens.xs ? "40px" : "48px",
                  height: screens.xs ? "40px" : "48px",
                  backgroundColor: token.white,
                  color: token.secondary500,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: screens.xs ? "16px" : "20px",
                  fontWeight: "bold",
                  marginRight: screens.xs ? "12px" : "16px",
                  flexShrink: 0,
                }}
              >
                3
              </div>
              <Title level={5} style={{ 
                color: token.white, 
                margin: 0,
                fontSize: screens.xs ? "14px" : "16px",
                lineHeight: 1.4
              }}>
                Done, let&apos;s continue the work.
              </Title>
            </Flex>
          </div>

          {/* steps----- */}
        </Col>
      </Row>
    </Flex>
  );
}
