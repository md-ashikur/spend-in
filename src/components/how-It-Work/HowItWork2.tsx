import { Col, Row, theme, Typography } from 'antd'
import content3 from "../../../public/images/content3.png"
import Image from 'next/image'


export default function HowItWork2() {
const { token } = theme.useToken();
    const { Title, Paragraph } = Typography;
  return (
    <Row style={{padding:"120px 80px"}}>
      <Col span={12}>
        <Image src={content3} alt="Content 3" />
      </Col>
      <Col span={12} style={{paddingInline:"80px"}}>
      <Title level={4} style={{color:token.primary500}}>HOW IT WORKS</Title>
      <Title level={2} style={{color:token.white}}>Few Easy Steps and Done</Title>
      <Paragraph style={{color:token.secondary300, fontSize: "20px"}}>In just few easy step, you are all set to manage your business finances. Manage all expenses with Spend.In all in one place.</Paragraph>
     
      </Col>
    </Row>
  )
}
