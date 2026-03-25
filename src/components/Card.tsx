import React from 'react';
import { cn } from '../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({ className, hoverable = false, ...props }) => {
  return (
    <div
      className={cn(
        'bg-surface-container-lowest rounded-xl border border-outline-variant/10 shadow-[0_12px_40px_-12px_rgba(17,48,105,0.04)]',
        hoverable && 'hover:translate-y-[-4px] transition-all duration-300 cursor-pointer',
        className
      )}
      {...props}
    />
  );
};
