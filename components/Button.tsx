import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  isLoading, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 uppercase tracking-widest text-xs font-bold transition-all duration-300 ease-in-out border";
  
  const variants = {
    primary: "bg-white text-black border-white hover:bg-black hover:text-white",
    outline: "bg-transparent text-white border-zinc-700 hover:border-white hover:bg-white/10",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? 'PROCESSING...' : children}
    </button>
  );
};