import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AdSpace = ({ size = 'medium', className = '' }) => {
  const sizeClasses = {
    small: 'h-24',
    medium: 'h-48',
    large: 'h-64'
  };

  return (
    <Card className={`backdrop-blur-sm bg-muted/30 border-2 border-dashed border-border/40 ${sizeClasses[size]} ${className}`}>
      <CardContent className="h-full flex items-center justify-center p-6">
        <div className="text-center">
          <p className="text-sm font-medium text-muted-foreground">Ad Space</p>
          <p className="text-xs text-muted-foreground/60 mt-1">Advertisement placeholder</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdSpace;
