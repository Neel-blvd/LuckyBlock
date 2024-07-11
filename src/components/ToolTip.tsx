import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  
interface ToolTipPropType {
  content: string,
  children: React.ReactNode
}

function ToolTip({ content, children }: ToolTipPropType) {
  return (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger>{children}</TooltipTrigger>
                <TooltipContent className='rounded-full'>
                    <p>{content}</p>
                </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  );
}

export default ToolTip