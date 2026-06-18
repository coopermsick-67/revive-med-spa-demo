"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

function Accordion({ children }: { children: React.ReactNode }) {
  return <div className="w-full">{children}</div>;
}

function AccordionItem({
  value,
  trigger,
  children,
}: {
  value: string;
  trigger: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex w-full items-center justify-between py-4 text-left font-semibold transition-colors",
          "text-gray-900 dark:text-white hover:text-accent dark:hover:text-accent",
          open && "text-accent"
        )}
      >
        {trigger}
        <ChevronDown className={cn("w-5 h-5 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div className="pb-4 text-gray-600 dark:text-gray-400 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

function AccordionTrigger({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function AccordionContent({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
