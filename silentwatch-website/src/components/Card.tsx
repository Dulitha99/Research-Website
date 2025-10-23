'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  image?: string;
  href?: string;
  className?: string;
  children?: React.ReactNode;
  delay?: number;
}

const Card = ({ 
  title, 
  description, 
  icon: Icon, 
  image, 
  href, 
  className = '', 
  children,
  delay = 0 
}: CardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const cardContent = (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: 1.05, 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${className}`}
    >
      {/* Image Section */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      )}

      {/* Icon Section */}
      {Icon && !image && (
        <div className="p-6 pb-0">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-16 h-16 bg-[#00B8D9]/10 rounded-full flex items-center justify-center mb-4"
          >
            <Icon className="w-8 h-8 text-[#00B8D9]" />
          </motion.div>
        </div>
      )}

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#002B5B] mb-3 group-hover:text-[#00B8D9] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          {description}
        </p>
        
        {children && (
          <div className="mt-4">
            {children}
          </div>
        )}
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00B8D9]/5 to-[#002B5B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className="block"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {cardContent}
      </motion.a>
    );
  }

  return cardContent;
};

export default Card;
