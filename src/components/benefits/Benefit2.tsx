import { Col, Flex, Row, Space, theme } from "antd";
import Image from "next/image";
import icon1 from "../../../public/images/empty-wallet-time.png";
import content from "../../../public/images/Content.png";

export default function Benefit2() {
  const { token } = theme.useToken();
  return (
    <div style={{ padding: "120px 80px", backgroundColor: "#ffffff" }}>
      <Flex justify="center" align="center">
        <div style={{ textAlign: "center", maxWidth: "712px" }}>
          <h5 style={{ color: token.primary500, fontSize: "20px", margin: 0 }}>
            WHY USE SPEND.IN
          </h5>
          <h2
            style={{ color: token.secondary900, fontSize: "40px", margin: 0 }}
          >
            Easy, Simple, Affordable
          </h2>
          <p style={{ color: token.secondary400, fontSize: "20px" }}>
            Our platform helps your business in managing expenses. These are
            some of the reasons why you should use our platform in managing
            business finances.
          </p>
        </div>
      </Flex>

      <Row style={{marginTop: "64px", alignItems: "center" }} gutter={32}>
        <Col span={12}>
        <Space direction="vertical" size="middle" style={{ display: 'flex', paddingRight: "40px" }}>
            <Flex>
            <Flex justify="center" align="center" style={{ backgroundColor: token.primary500, borderRadius: "12px", height:"50px", width:"70px" }}>
              <Image
                src={icon1}
                alt="Benefit 1"
                width={24}
                height={24}
                style={{margin:0}}
              />
            </Flex>
            <div style={{color: token.secondary400, marginLeft: "24px"}}>
              <h3 style={{margin: 0}}>Automatic Invoice Payment</h3>
              <p>
                Automatic payments help you to arrange payments on a certain
                date without doing it manually again.
              </p>
            </div>
          </Flex>


          {/* row 2----------- */}
           <Flex>
            <Flex justify="center" align="center" style={{ backgroundColor: token.primary500, borderRadius: "12px", height:"50px", width:"60px" }}>
              <Image
                src={icon1}
                alt="Benefit 1"
                width={24}
                height={24}
                style={{margin:0}}
              />
            </Flex>
            <div style={{color: token.secondary400, marginLeft: "24px"}}>
              <h3 style={{margin: 0}}>Clear payment history</h3>
              <p>
                Clear payment history helps you to track your business expenses on specific dates.
              </p>
            </div>
          </Flex>


          {/* row 3------------- */}
           <Flex>
            <Flex justify="center" align="center" style={{ backgroundColor: token.primary500, borderRadius: "12px", height:"50px", width:"70px", overflow: "hidden" }}>
              <Image
                src={icon1}
                alt="Benefit 1"
                width={24}
                height={24}
                style={{margin:0}}
              />
            </Flex>
            <div style={{color: token.secondary400, marginLeft: "24px"}}>
              <h3 style={{margin: 0}}>Use of multi-card payments</h3>
              <p>
                Have more than one debit or credit card? Don&apos;t worry, we support payments using more than one card.
              </p>
            </div>
          </Flex>
          </Space>
          
        </Col>
        <Col span={12}><Image src={content} alt="Benefit 1" style={{ width: "100%", height: "auto"}} /></Col>
      </Row>
    </div>
  );
}
