import { gsap as _gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// export const gsap = _gsap
_gsap.registerPlugin(ScrollTrigger)

export const gsap = _gsap
