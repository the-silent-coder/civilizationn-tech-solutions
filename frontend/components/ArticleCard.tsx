"use client";

import { motion } from "framer-motion";

interface ArticleCardProps {
  children: React.ReactNode;
}

export default function ArticleCard({
  children,
}: ArticleCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
}