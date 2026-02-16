"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function GlassCard({
  children,
  className,
  hover = true,
  onClick,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn("glass-panel", className)}
      whileHover={hover ? { scale: 1.03 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  );
}
