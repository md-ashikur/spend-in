import { Col, Flex, Row, theme, Typography } from 'antd'
import content3 from "../../../public/images/content3.png"
import Image from 'next/image'


export default function HowItWork2() {
const { token } = theme.useToken();
    const { Title, Paragraph } = Typography;
  return (
<Flex justify='center' align='center' >
        <Row style={{padding:"120px 80px"}}>
      <Col span={12}>
       <Flex justify='center' align='center'>
       <Image src={content3} alt="Content 3" />
       </Flex>
      </Col>
      <Col span={12} style={{paddingInline:"80px"}}>
      <Title level={4} style={{color:token.primary500}}>HOW IT WORKS</Title>
      <Title level={2} style={{color:token.white}}>Few Easy Steps and Done</Title>
      <Paragraph style={{color:token.secondary300, fontSize: "20px"}}>In just few easy step, you are all set to manage your business finances. Manage all expenses with Spend.In all in one place.</Paragraph>
     
      {/* Steps List */}
      <div style={{ marginTop: "40px" }}>
        {/* Step 1 */}
        <Flex align='center'>
          <div
            style={{
              width: "48px",
              height: "48px",
              backgroundColor: token.primary500,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              marginRight: "16px",
              flexShrink: 0
            }}
          >
            1
          </div>
          <Title level={5} style={{ color: token.white, margin: 0 }}>
            Register your Spend.In account.
          </Title>
        </Flex>

        {/* Connecting Line */}
        <div
          style={{
            width: "2px",
            height: "52px",
            backgroundColor: token.primary500,
            marginLeft: "23px",
            marginBottom: "0"
          }}
        />

        {/* Step 2 */}
        <Flex align='center'>
          <div
            style={{
              width: "48px",
              height: "48px",
              backgroundColor: token.primary500,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              marginRight: "16px",
              flexShrink: 0
            }}
          >
            2
          </div>
          <Title level={5} style={{ color: token.white, margin: 0 }}>
            Fill in the list of your business expenses.
          </Title>
        </Flex>

        {/* Connecting Line 2 dashed line */}
        <div
          style={{
            width: "2px",
            height: "52px",
            background: `repeating-linear-gradient(to bottom, transparent 5px, transparent 8px, ${token.white} 0px, ${token.white} 20px)`,
            marginLeft: "23px"
          }}
        />

        {/* Step 3 */}
        <Flex align='center'>
          <div
            style={{
              width: "48px",
              height: "48px",
              backgroundColor: token.white,
              color: token.secondary500,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              fontWeight: "bold",
              marginRight: "16px",
              flexShrink: 0
            }}
          >
            3
          </div>
          <Title level={5} style={{ color: token.white, margin: 0 }}>
            Done, let&apos;s continue the work.
          </Title>
        </Flex>
      </div>

     {/* steps----- */}
      </Col>
    </Row>
</Flex>
  )
}
