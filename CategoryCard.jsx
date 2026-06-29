import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { iconMap } from '@/utils/iconMap.js';

const CategoryCard = ({ category, index = 0 }) => {
  const IconComponent = iconMap[category.icon] || iconMap.Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link to={`/tools?category=${encodeURIComponent(category.name)}`}>
        <Card className="group h-full backdrop-blur-sm bg-card/50 border-border/40 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
          <div className={`h-2 bg-gradient-to-r ${category.gradient}`} />
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <IconComponent className="w-7 h-7 text-white" />
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-200">
              {category.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              {category.description}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-muted-foreground">
                {category.toolCount} tools available
              </span>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
