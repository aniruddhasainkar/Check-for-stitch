import React from 'react';
import { cn } from '../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'error';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'primary-gradient text-white shadow-sm hover:opacity-90 active:scale-95',
      secondary: 'bg-surface-container text-on-surface hover:bg-surface-container-high active:scale-95',
      ghost: 'bg-transparent text-on-surface hover:bg-surface-container active:scale-95',
      outline: 'bg-transparent border border-outline-variant text-on-surface hover:bg-surface-container active:scale-95',
      error: 'bg-error text-white hover:bg-error/90 active:scale-95',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-xs font-semibold',
      md: 'px-4 py-2 text-sm font-semibold',
      lg: 'px-6 py-3 text-base font-semibold',
      icon: 'p-2',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
