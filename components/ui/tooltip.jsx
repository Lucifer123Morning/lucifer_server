'use client';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '../../lib/utils'; // если нет utils — можно удалить

export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;

export const TooltipContent = ({ className, ...props }) => (
    <TooltipPrimitive.Content
        className={cn(
            "bg-gray-800 text-white text-sm px-3 py-2 rounded-md shadow-md z-50",
            className
        )}
        {...props}
    />
);
