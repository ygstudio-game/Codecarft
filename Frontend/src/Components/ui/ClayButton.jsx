import React from "react";
import { cn } from "@/lib/utils";

const ClayButton = React.forwardRef(({ className, variant = "primary",  children, ...props }, ref) => {
  const baseStyles = "relative inline-flex items-center justify-center font-bold px-6 py-3 rounded-xl transition-all duration-300 ease-out transform hover:scale-102 hover:-translate-y-1 active:scale-95";
  
  const variants = {
    primary: "bg-[var(--color-cyber-mojito)] text-[var(--color-frost-graphite)] shadow-[var(--shadow-clay)]",
    secondary: "bg-[var(--color-carbon-edge)] text-white shadow-[var(--shadow-clay)]",
    outline: "bg-transparent border-2 border-[var(--color-cyber-mojito)] text-[var(--color-cyber-mojito)] hover:bg-[var(--color-cyber-mojito)] hover:text-[var(--color-frost-graphite)] shadow-[var(--shadow-neumorphic)]"
  };

  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
});

ClayButton.displayName = "ClayButton";

export { ClayButton };
