import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import type { PropsWithChildren, FC } from 'react'
import { useEffect, useState, useCallback } from 'react'

interface AccordionResultProps extends PropsWithChildren {
  title: string
  collapsed?: boolean
}

const AccordionResult: FC<AccordionResultProps> = ({ children, title }) => {
  // need to fixed: https://github.com/radix-ui/primitives/issues/2296
  const [value, setValue] = useState<'item-1'>()
  useEffect(() => {})
  const handleTrigger = useCallback(() => {
    setValue(value === 'item-1' ? undefined : 'item-1')
  }, [value])
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger onClick={handleTrigger}>{title}</AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionResult
