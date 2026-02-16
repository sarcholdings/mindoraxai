"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassBadgeProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  className?: string;
}

export function GlassBadge({ children, className, ...props }: GlassBadgeProps) {
  return (
    <motion.div
      className={cn(
        "inline-block px-3 py-1 glass-panel rounded-full",
        className
      )}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <span className="text-[12px] font-medium tracking-wide leading-none py-1">
        {children}
      </span>
    </motion.div>
  );
}
