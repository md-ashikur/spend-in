"use client"

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function useGsapReveal(selector = '.gsap-reveal') {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const elements = gsap.utils.toArray(selector) as HTMLElement[]
    if (!elements.length) return

    const instances = elements.map((el) => {
      return gsap.fromTo(
        el,
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.14,
          ease: 'power2.out',
          duration: 1.0,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    return () => {
      // kill created ScrollTriggers and animations
      instances.forEach((anim) => {
        try {
          anim.kill()
        } catch (e) { console.debug('gsap kill error', e) }
      })
      const sts = ScrollTrigger.getAll()
      sts.forEach((st) => st.kill())
    }
  }, [selector])
}
