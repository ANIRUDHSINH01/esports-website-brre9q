import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowOnHover?: boolean;
}

export function Card({ children, className, glowOnHover = true, ...props }: CardProps) {
  return (
    <motion.div
      whileHover={glowOnHover ? { scale: 1.02 } : undefined}
      className={cn(
        'relative bg-black/40 backdrop-blur-xl rounded-lg border border-white/10',
        'p-6 overflow-hidden transition-all duration-300',
        glowOnHover && 'hover:shadow-[0_0_30px_rgba(80,_200,_255,_0.3)]',
        'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent',
        'before:via-white/5 before:to-transparent before:opacity-0 hover:before:opacity-100',
        'before:transition-opacity before:duration-500',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}