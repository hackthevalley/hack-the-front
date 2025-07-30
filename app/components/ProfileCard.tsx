'use client';

import React from 'react';

interface ProfileCardProps {
  children?: React.ReactNode;
  className?: string;
  isDefault: boolean;
}

export default function ProfileCard({ children, className = '', isDefault = true }: ProfileCardProps) {
  const defaultClass = 'w-48 h-48 rounded-[3rem] bg-linear-140 from-[#A1CAF1]/75 via-sky-300/50 to-white/10 backdrop-blur-md'
  const defaultClassAlt = 'w-48 h-48 rounded-[3rem] bg-[linear-gradient(to_bottom,rgba(186,230,253,0.6),rgba(255,255,255,0.8),rgba(186,230,253,0.6))] backdrop-blur-md border border-white/10';
  return (
    <div className={`${className} ${isDefault ? defaultClass : defaultClassAlt}`} >
      {children}
    </div>
  );
}

