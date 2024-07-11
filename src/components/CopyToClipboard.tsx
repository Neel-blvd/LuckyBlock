'use client'
import React from 'react'
import ToolTip from './ToolTip'
import { useToast } from "@/components/ui/use-toast"


interface PropType {
    content?: string, 
    children?: React.ReactNode
}

function CopyToClipboard( {content, children}: PropType ) {
    
    const { toast } = useToast();

  return (
    <ToolTip content='Copy to Clipboard'>
        <button className='bg-zinc-500 rounded-lg p-1 px-4'
            onClick={() => {
                toast({
                    description: 'Copied to Clipboard'
                })
                navigator.clipboard.writeText(content || "")
            }}>
            <p>
                {content}
            </p>
        </button>
    </ToolTip>
  )
}

export default CopyToClipboard