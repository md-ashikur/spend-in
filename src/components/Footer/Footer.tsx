"use client";
import { Col, Divider, Row, Space, theme, Typography } from "antd";
import Image from "next/image";
import logo from "../../../public/images/Content.png";
import Link from "next/link";



export default function Footer() {
  const {Title} = Typography;
  const {token} = theme.useToken();
  return (
    <footer style={{ background: token.white, padding: "48px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <Row gutter={[32, 32]} align="top">
          <Col xs={24} sm={24} md={8} lg={8}>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
             
              <Title level={5} style={{ marginBottom: 12 }}>Spend.In</Title>
            </div>
            <p style={{ marginTop: 1, color: token.secondary400 }}>
              Data visualization, and<br/> expense management<br/> for your business.
            </p>
          </Col>

          <Col xs={24} sm={8} md={4} lg={4}>
            <Title level={5} style={{ marginBottom: 12 }}>Product</Title>
            <Space direction="vertical" size="large">
              <Link href="#" style={{ color: token.secondary400 }}>Digital Invoice</Link>
              <Link href="#" style={{ color: token.secondary400 }}>Insights</Link>
              <Link href="#" style={{ color: token.secondary400 }}>Reimbursements</Link>
              <Link href="#" style={{ color: token.secondary400 }}>Virtual Assistant</Link>
              <Link href="#" style={{ color: token.secondary400 }}>Artificial Intelligence</Link>
            </Space>
          </Col>

          <Col xs={24} sm={8} md={4} lg={4}>
            <Title level={5} style={{ marginBottom: 12 }}>Company</Title>
            <Space direction="vertical" size="large">
              <Link href="#" style={{ color: token.secondary400 }}>About Us</Link>
              <Link href="#" style={{ color: token.secondary400 }}>Newsletters</Link>
              <Link href="#" style={{ color: token.secondary400 }}>Our Partners</Link>
              <Link href="#" style={{ color: token.secondary400 }}>Career</Link>
              <Link href="#" style={{ color: token.secondary400 }}>Contact Us</Link>
            </Space>
          </Col>

          <Col xs={24} sm={8} md={4} lg={4}>
            <Title level={5} style={{ marginBottom: 12 }}>Resources</Title>
            <Space direction="vertical" size="large">
              <Link href="#" style={{ color: token.secondary400 }}>Blog</Link>
              <Link href="#" style={{ color: token.secondary400 }}>Pricing</Link>
              <Link href="#" style={{ color: token.secondary400 }}>FAQ</Link>
              <Link href="#" style={{ color: token.secondary400 }}>Events</Link>
              <Link href="#" style={{ color: token.secondary400 }}>Ebook & Guides</Link>
            </Space>
          </Col>

          <Col xs={24} sm={24} md={2} lg={4}>
            <Title level={5} style={{ marginBottom: 12 }}>Follow Us</Title>
            <Space direction="vertical" size="large">
              <Link href="#" style={{ color: token.secondary400 }}>LinkedIn</Link>
              <Link href="#" style={{ color: token.secondary400 }}>Twitter</Link>
              <Link href="#" style={{ color: token.secondary400 }}>Instagram</Link>
              <Link href="#" style={{ color: token.secondary400 }}>Facebook</Link>
              <Link href="#" style={{ color: token.secondary400 }}>YouTube</Link>
            </Space>
          </Col>
        </Row>

        <Divider style={{ margin: "40px 0" }} />

        <Row justify="space-between" align="middle">
          <Col>
            <Space size={24}>
              <Link href="/privacy-policy" style={{ color: token.secondary500 }}>Privacy Policy</Link>
              <Link href="/terms" style={{ color: token.secondary500 }}>Terms & Conditions</Link>
              <Link href="/cookie-policy" style={{ color: token.secondary500 }}>Cookie Policy</Link>
            </Space>
          </Col>
          <Col>
            <span style={{ color: token.secondary500 }}>© PickoLab 2022</span>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

