"use client"

import React from 'react'
import { theme, Typography, Card, Carousel, Grid, Button } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import testimonials from '@/data/testimonials.json'

export default function Testimonials() {
  const { token } = theme.useToken()
  const { Title, Paragraph } = Typography
  const screens = Grid.useBreakpoint()

  // Determine cards per view: desktop 3, tablet 2, mobile 1
  const perSlide = screens.lg ? 3 : screens.md ? 2 : 1

  type Testimonial = { quote: string; name: string; role: string }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const carouselRef = React.useRef<any>(null)

  return (
    <div style={{ padding: '40px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
        <div style={{ maxWidth: 740, textAlign: 'center' }}>
          <Title level={5} style={{ color: token.primary500 }}>WHAT THEY SAY</Title>
          <Title level={2} style={{ color: token.white }}>Our User Kind Words</Title>
          <Paragraph style={{ color: token.secondary300 }}>
            Here are some testimonials from our user after using Spend.In to manage their business expenses.
          </Paragraph>
        </div>
      </div>

      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <Carousel
          ref={carouselRef}
          dots={{ className: 'testimonials-dots' }}
          autoplay
          autoplaySpeed={4500}
          pauseOnHover
          draggable
          slidesToShow={perSlide}
          slidesToScroll={1}
          infinite
        >
          {(() => {
            const gap = screens.lg ? 20 : screens.md ? 16 : 12
            return testimonials.map((t: Testimonial, i: number) => (
              <div key={i} style={{ padding: 0, display: 'flex', justifyContent: 'center' }}>
                <Card
                  style={{
                    width: '356px',
                    height: 284,
                    boxShadow: '0 6px 18px rgba(6,15,26,0.3)',
                    borderRadius: 12,
                    background: token.secondary500,
                    color: token.white,
                    boxSizing: 'border-box',
                    overflow: 'visible',
                    margin: `0 10px`,
                  }}
                >
                <Paragraph style={{ color: token.white }}>{t.quote}</Paragraph>

                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: 12 }}>
                  <div style={{ marginLeft: 8 }}>
                    <div style={{ fontWeight: 600 }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: token.secondary300 }}>{t.role}</div>
                  </div>
                </div>
                </Card>
              </div>
            ))
          })()}
        </Carousel>

        {/* Prev / Next buttons below carousel */}
        {testimonials.length > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 20 }}>
            <Button type="default" shape="circle" size="large" onClick={() => carouselRef.current?.prev?.()} aria-label="Previous">
              <LeftOutlined />
            </Button>
            <Button type="primary" shape="circle" size="large" onClick={() => carouselRef.current?.next?.()} aria-label="Next">
              <RightOutlined />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
