"use client";

import { LucideIcon } from "lucide-react";

export interface TabOption {
  id: string;
  label: string;
  icon?: LucideIcon;
}

interface TabSwitcherProps {
  tabs: TabOption[];
  activeTab: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onTabChange: (id: any) => void;
  className?: string;
}

export const TabSwitcher = ({ tabs, activeTab, onTabChange, className = "" }: TabSwitcherProps) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="inline-flex p-1 rounded-full bg-muted/50 border border-border">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                isActive ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {Icon && <Icon className="h-4 w-4" />}
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
