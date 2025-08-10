import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuCard from './MenuCard';

import type { MenuItem } from './MenuCard';

interface MenuGridProps {
    items: MenuItem[];
    onSelect: (item: MenuItem) => void;
    onAddToCart: (item: MenuItem) => void;
}

export default function MenuGrid({ items, onSelect, onAddToCart }: MenuGridProps) {
    return (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
                {items.map((item) => (
                    <MenuCard
                        key={item.id}
                        item={item}
                        onSelect={() => onSelect(item)}
                        onAddToCart={() => onAddToCart(item)}
                    />
                ))}
            </AnimatePresence>
        </motion.div>
    );
}
