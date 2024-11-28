import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  const baseStyles = 'relative inline-flex items-center justify-center rounded-md font-medium transition-all duration-300';
  
  const variants = {
    primary: 'bg-cyan-500 text-white hover:bg-cyan-600 shadow-[0_0_20px_rgba(34,_211,_238,_0.3)]',
    secondary: 'bg-purple-500 text-white hover:bg-purple-600 shadow-[0_0_20px_rgba(168,_85,_247,_0.3)]',
    outline: 'border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500/10'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}