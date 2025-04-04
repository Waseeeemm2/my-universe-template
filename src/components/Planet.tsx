
import React from 'react';
import { cn } from '@/lib/utils';

interface PlanetProps {
  id: string;
  name: string;
  color: string;
  size: string;
  onClick: () => void;
  className?: string;
  orbitDistance?: string;
  orbitDuration?: string;
  children?: React.ReactNode;
}

export default function Planet({
  id,
  name,
  color,
  size,
  onClick,
  className,
  orbitDistance,
  orbitDuration,
  children
}: PlanetProps) {
  
  const style: React.CSSProperties = orbitDistance ? {
    '--orbit-distance': orbitDistance,
    '--orbit-duration': orbitDuration || '30s',
  } as React.CSSProperties : {};

  return (
    <div className={cn("animate-orbit", className)} style={style}>
      <div
        id={id}
        className={cn("planet", size, color)}
        onClick={onClick}
        role="button"
        aria-label={`Navigate to ${name} section`}
      >
        <span className="absolute inset-0 rounded-full opacity-20 blur-md bg-white dark:bg-blue-300"></span>
        <div className="z-10 text-center">
          <span className="font-semibold">{name}</span>
          {children}
        </div>
      </div>
    </div>
  );
}
