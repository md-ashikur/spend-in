import { Typography } from 'antd';
import React from 'react'

export default function Testimonials() {

    const {Title, Paragraph} = Typography;
  return (
    <div>

      <Title level={5}>WHAT THEY SAY</Title>
      <Title level={2}>Our User Kind Words</Title>
      <Paragraph>
       Here are some testimonials from our user after using Spend.In to manage their business  expenses.
      </Paragraph>
 
    </div>
  )
}
