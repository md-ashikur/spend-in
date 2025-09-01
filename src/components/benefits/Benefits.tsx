"use client";
import { Col, Row, theme, Grid } from "antd";
import Image from "next/image";
import benefitsData from "@/data/benefits.json";

export default function Benefits() {
  const { token } = theme.useToken();
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  // Prefer lg and above for wide desktop padding (120px)
  const paddingInline = screens.lg ? "120px" : screens.md ? "32px" : screens.sm ? "24px" : "20px";
  const paddingTop = screens.lg ? "120px" : screens.md ? "100px" : screens.sm ? "80px" : "60px";
  const paddingBottom = paddingTop;

  return (
    <div className="gsap-reveal" 
      style={{
        paddingTop: paddingTop,
        backgroundColor: "#fff",
        paddingBottom: paddingBottom,
        paddingInline: paddingInline,
      }}
    >
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={10} lg={8} xl={8}>
          <h5
            className="gsap-reveal"
            style={{ color: token.primary500, fontSize: "20px", margin: "0" }}
          >
            {benefitsData.title}
          </h5>
          <h2
            className="gsap-reveal"
            style={{ color: token.secondary900, fontSize: "40px", margin: "0" }}
          >
            {benefitsData.heading}
          </h2>
        </Col>
        <Col xs={24} sm={24} md={14} lg={16} xl={12}>
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
      <Row style={{ marginTop: "64px" }} gutter={[24, 24]}>
        {benefitsData.cards.map((card) => (
          <Col key={card.id} xs={24} sm={12} md={8} lg={8} xl={8}>
            <div className="gsap-reveal" style={{maxWidth: "384px", height: "100%"}}>
              <Image src={card.image} alt={card.title} width={384} height={384} style={{ maxWidth: "100%", height: "auto" }} />
              <div>
                <h3 className="gsap-reveal" style={{ color: token.secondary900 }}>
                  {card.title}
                </h3>
                <p className="gsap-reveal" style={{ color: token.secondary400 }}>
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
