import React from "react";
import { cn } from "@/lib/utils";

const ClayCard = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl p-6 transition-all duration-300 ease-out transform hover:-translate-y-2 hover:rotate-1",
        "bg-[var(--color-frost-graphite)] text-white border border-[rgba(255,255,255,0.05)]",
        "shadow-[var(--shadow-clay)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

ClayCard.displayName = "ClayCard";

export { ClayCard };
