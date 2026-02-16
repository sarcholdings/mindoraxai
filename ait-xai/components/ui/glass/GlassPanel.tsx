"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassPanelProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  className?: string;
}

export function GlassPanel({
  children,
  className,
  ...props
}: GlassPanelProps) {
  return (
    <motion.div
      className={cn("glass-panel p-6 space-y-4", className)}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
