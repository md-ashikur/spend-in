"use client"

import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

export default function GSAPProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    // smoother global defaults (slower, softer)
    gsap.defaults({ duration: 1.0, ease: 'power2.out' })

    // Global reveal for any element with .gsap-reveal that hasn't been initialized
    const elems = gsap.utils.toArray('.gsap-reveal') as HTMLElement[]
    const instances: gsap.core.Tween[] = []
    elems.forEach((el) => {
  const ds = el.dataset as DOMStringMap
  if (ds.gsapInitialized) return
  ds.gsapInitialized = '1'
      const tw = gsap.fromTo(
        el,
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.14,
          duration: 1.0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )
      instances.push(tw)
    })

    return () => {
      instances.forEach((anim) => anim.kill())
      const sts = ScrollTrigger.getAll()
      sts.forEach((st) => st.kill())
    }
  }, [])

  return <>{children}</>
}
