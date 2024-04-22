import type { FC, PropsWithChildren } from 'react'
import { useCallback, useEffect, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

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
