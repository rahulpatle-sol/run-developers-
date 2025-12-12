// "use client"

// import { useEffect } from "react"
// import Lenis from "@studio-freight/lenis"
// import gsap from "gsap"
// import ScrollTrigger from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// export function LenisSmoothScroll() {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 0.8, // Reduced from 1.2
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       orientation: "vertical",
//       gestureOrientation: "vertical",
//       smoothWheel: true,
//       wheelMultiplier: 0.8, // Reduced from 1
//       smoothTouch: false,
//       touchMultiplier: 1.5, // Reduced from 2
//       infinite: false,
//     })

//     lenis.on("scroll", ScrollTrigger.update)

//     // RAF with better performance
//     function raf(time: number) {
//       lenis.raf(time)
//       requestAnimationFrame(raf)
//     }
//     requestAnimationFrame(raf)

//     // Handle anchor links
//     document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//       anchor.addEventListener("click", function (this: HTMLElement, e) {
//         e.preventDefault()
//         const targetId = this.getAttribute("href")
//         if (targetId && targetId !== "#") {
//           const target = document.querySelector(targetId)
//           if (target) {
//             lenis.scrollTo(target as HTMLElement, {
//               offset: -80,
//               duration: 1,
//             })
//           }
//         }
//       })
//     })

//     return () => {
//       lenis.destroy()
//     }
//   }, [])

//   return null
// }
