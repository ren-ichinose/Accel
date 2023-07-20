'use client'

import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

export default function Motion({ children }: { children: React.ReactNode }) {
  const pathName = usePathname()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathName}
        initial={{ opacity: 0 }} // 初期状態
        animate={{ opacity: 1 }} // マウント時
        exit={{ opacity: 0 }} // アンマウント時
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
