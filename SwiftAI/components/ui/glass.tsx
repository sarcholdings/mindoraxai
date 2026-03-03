"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface GlassBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassBadge({ children, className }: GlassBadgeProps) {
  return (
    <div
      className={cn(
        "inline-block px-4 py-1.5 rounded-full border border-hero-foreground/20 bg-hero-foreground/10 backdrop-blur-md",
        className
      )}
    >
      <span className="text-[12px] font-medium tracking-wide uppercase text-hero-foreground">
        {children}
      </span>
    </div>
  );
}

interface GlassButtonLinkProps {
  href: string;
  variant?: "primary" | "outline";
  children: React.ReactNode;
  className?: string;
}

export function GlassButtonLink({
  href,
  variant = "primary",
  children,
  className,
}: GlassButtonLinkProps) {
  const baseClasses =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200";

  const variantClasses = {
    primary:
      "bg-hero-foreground/20 hover:bg-hero-foreground/30 border border-hero-foreground/30 backdrop-blur-md text-hero-foreground shadow-lg",
    outline:
      "border-2 border-hero-foreground/40 hover:border-hero-foreground/60 hover:bg-hero-foreground/10 backdrop-blur-md text-hero-foreground",
  };

  return (
    <Link
      href={href}
      className={cn(baseClasses, variantClasses[variant], className)}
    >
      {children}
    </Link>
  );
}

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassPanel({ children, className }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-hero-foreground/20 bg-hero-foreground/5 backdrop-blur-xl p-6 shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
}

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
}

export function GlassCard({
  children,
  className,
  hover = false,
  onClick,
  onMouseEnter,
}: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={cn(
        "rounded-lg border border-hero-foreground/10 bg-hero-foreground/5 backdrop-blur-md transition-all duration-300",
        hover && "hover:bg-hero-foreground/10 hover:border-hero-foreground/20",
        onClick && "cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}
