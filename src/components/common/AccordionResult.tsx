import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import type { PropsWithChildren, FC } from 'react'

interface AccordionResultProps extends PropsWithChildren {
  title: string
}

const AccordionResult: FC<AccordionResultProps> = ({ children, title }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item1">
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionResult
