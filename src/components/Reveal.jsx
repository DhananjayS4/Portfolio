import { motion, useReducedMotion } from "framer-motion"

export default function Reveal({ children, className = "", delay = 0, immediate = false }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>

  const motionProps = immediate
    ? { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 14 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
      }

  return (
    <motion.div
      className={className}
      {...motionProps}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
