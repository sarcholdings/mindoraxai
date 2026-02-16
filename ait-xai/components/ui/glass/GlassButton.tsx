"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline";
  href?: string;
}

export function GlassButton({
  children,
  className,
  variant = "primary",
  href,
  ...props
}: GlassButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer";

  const variantClasses = {
    primary:
      "gradient-brand-bg text-black shadow-lg hover:shadow-xl hover:shadow-[#4ADE80]/30",
    outline:
      "glass-panel text-white border border-white/20 hover:bg-white/10 hover:border-white/30",
  };

  const Component = motion.button;

  return (
    <Component
      className={cn(baseClasses, variantClasses[variant], className)}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      {...props}
    >
      {children}
    </Component>
  );
}

export function GlassButtonLink({
  children,
  className,
  variant = "primary",
  href,
  ...props
}: GlassButtonProps & { href: string }) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer";

  const variantClasses = {
    primary:
      "gradient-brand-bg text-black shadow-lg hover:shadow-xl hover:shadow-[#4ADE80]/30",
    outline:
      "glass-panel text-white border border-white/20 hover:bg-white/10 hover:border-white/30",
  };

  return (
    <motion.a
      href={href}
      className={cn(baseClasses, variantClasses[variant], className)}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      {...(props as any)}
    >
      {children}
    </motion.a>
  );
}
