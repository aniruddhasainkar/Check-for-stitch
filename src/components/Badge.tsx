import React from 'react';
import { cn } from '../lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'neutral';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ className, variant = 'neutral', ...props }) => {
  const variants = {
    primary: 'bg-primary-container text-primary',
    secondary: 'bg-secondary-container text-secondary',
    tertiary: 'bg-tertiary-container text-tertiary',
    error: 'bg-error/10 text-error',
    neutral: 'bg-surface-container-high text-on-surface-variant',
  };

  return (
    <span
      className={cn(
        'px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-sm',
        variants[variant],
        className
      )}
      {...props}
    />
  );
};
