import { useState, type FC, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import type { InputProps } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

import createChallenges from '@/challenges/createChallenges'
import selectChallenges from '@/challenges/selectChallenges'
import type { Challenge } from '@/type'

const sqlChallengeTypePathMap = {
  create: '/create-challenge',
  select: '/select-challenge'
}

const allChallenges = [...createChallenges, ...selectChallenges]

interface SqlChallengeSearchProps extends InputProps {}

const SqlChallengeSearch: FC<SqlChallengeSearchProps> = ({
  placeholder = 'Search',
  type = 'text'
}) => {
  const [value, setValue] = useState('')
  const [filteredChallenges, setFilteredChallenges] = useState<Challenge[]>([])
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (!value) {
      setFilteredChallenges([])
      return
    }
    const filteredChallenges = allChallenges.filter(challenge => {
      const titleInclude = challenge.title
        .toLowerCase()
        .includes(value.toLowerCase())
      const pathInclude = challenge.id
        .toLowerCase()
        .includes(value.toLowerCase())
      return titleInclude || pathInclude
    })
    setFilteredChallenges(filteredChallenges)
    if (filteredChallenges.length) {
      setOpen(true)
    }
  }, [value])
  return (
    <Popover open={open}>
      <PopoverTrigger asChild>
        <Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <ScrollArea className="h-72 rounded-md">
          <div>
            {filteredChallenges.map((challenge, index) => (
              <div key={challenge.id}>
                <a
                  href={`${
                    sqlChallengeTypePathMap[
                      challenge.sqlType as keyof typeof sqlChallengeTypePathMap
                    ]
                  }?id=${challenge.id}`}
                >
                  <div className="flex items-center justify-between p-2 hover:bg-gray-100">
                    <span className="text-sm font-bold">{challenge.title}</span>
                    <span className="text-xs text-gray-400">
                      {challenge.type}
                    </span>
                  </div>
                </a>
                {index !== filteredChallenges.length - 1 && <Separator />}
              </div>
            ))}
          </div>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  )
}

export default SqlChallengeSearch
