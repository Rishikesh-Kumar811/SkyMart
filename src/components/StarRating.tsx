import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '../lib/utils';
interface StarRatingProps {
  rate: number;
  count?: number;
  className?: string;
}
export const StarRating: React.FC<StarRatingProps> = ({ rate, count, className = '' }) => {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-[clamp(0.7rem,4cqw,1.5rem)] h-[clamp(0.7rem,4cqw,1.5rem)]",
              i < Math.round(rate) ? 'text-amber-400 fill-amber-400' : 'text-white/15 fill-white/15'
            )}
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="text-white/40 text-[clamp(0.7rem,3.5cqw,1.2rem)] font-medium">({count})</span>
      )}
    </div>
  );
};
