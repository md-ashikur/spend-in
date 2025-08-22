"use client";
import { Col, Row, theme } from "antd";
import Image from "next/image";
import benefitsData from "@/data/benefits.json";

export default function Benefits() {
  const { token } = theme.useToken();
  return (
    <div
      style={{
        paddingTop: "120px",
        backgroundColor: "#fff",
        paddingBottom: "120px",
        paddingInline: "80px",
      }}
    >
      <Row>
        <Col span={8}>
          <h5
            style={{ color: token.primary500, fontSize: "20px", margin: "0" }}
          >
            {benefitsData.title}
          </h5>
          <h2
            style={{ color: token.secondary900, fontSize: "40px", margin: "0" }}
          >
            {benefitsData.heading}
          </h2>
        </Col>
        <Col span={12}>
          <p
            style={{
              color: token.secondary400,
              fontSize: "20px",
              paddingInline: "2px",
            }}
          >
            {benefitsData.description}
          </p>
        </Col>
      </Row>

      {/* cards----------- */}
      <Row style={{ marginTop: "64px" }}>
        {benefitsData.cards.map((card) => (
          <Col key={card.id} span={8}>
            <div style={{maxWidth: "384px", height: "100%"}}>
              <Image src={card.image} alt={card.title} width={384} height={384} />
              <div>
                <h3 style={{ color: token.secondary900 }}>
                  {card.title}
                </h3>
                <p style={{ color: token.secondary400 }}>
                  {card.description}
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
