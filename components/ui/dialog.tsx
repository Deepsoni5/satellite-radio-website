"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

function Dialog({ open, onOpenChange, children }: DialogProps) {
  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      <div className="relative z-10 w-full max-w-md">{children}</div>
    </div>
  );
}

interface DialogContentProps {
  className?: string;
  children: React.ReactNode;
  onInteractOutside?: (e: MouseEvent | TouchEvent) => void;
  onEscapeKeyDown?: (e: KeyboardEvent) => void;
}

function DialogContent({ className, children }: DialogContentProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-6 shadow-xl",
        className,
      )}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}

function DialogHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center mb-4">
      {children}
    </div>
  );
}

function DialogTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h2 className={cn("text-lg font-bold text-foreground", className)}>
      {children}
    </h2>
  );
}

function DialogDescription({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
  );
}

export { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription };
