import React from "react";
import { cn } from "@/lib/utils";

interface EyebrowLabelProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export function EyebrowLabel({ className, children, ...props }: EyebrowLabelProps) {
  return (
    <p
      className={cn(
        "font-inter text-[11px] font-semibold tracking-[0.12em] uppercase text-theme-green mb-4",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
