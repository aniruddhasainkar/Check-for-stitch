import React from 'react';
import { cn } from '../lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <label className="text-[10px] font-bold tracking-[0.05em] uppercase text-on-surface-variant px-1">
            {label}
          </label>
        )}
        <div className="relative group">
          <input
            ref={ref}
            className={cn(
              'w-full h-11 px-4 bg-surface-container-low border border-transparent focus:border-primary focus:ring-0 focus:bg-surface-container-lowest rounded-lg text-sm text-on-surface placeholder:text-on-surface-variant/40 transition-all outline-none',
              error && 'border-error focus:border-error',
              className
            )}
            {...props}
          />
        </div>
        {error && <p className="text-error text-[11px] px-1">{error}</p>}
      </div>
    );
  }
);
