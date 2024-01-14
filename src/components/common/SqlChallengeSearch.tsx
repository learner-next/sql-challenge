import { useState, type FC, useEffect, useRef } from 'react'
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
import updateChallenges from '@/challenges/updateChallenges'
import deleteChallenges from '@/challenges/deleteChallenges'
import type { Challenge } from '@/type'
import { Link } from '@tanstack/react-router'
import { useAtom } from 'jotai'
import { activeNameAtom } from '@/state/activeName'

const sqlChallengeTypePathMap = {
  create: '/create-challenge',
  select: '/select-challenge',
  update: '/update-challenge',
  delete: '/delete-challenge'
}

const allChallenges = [
  ...createChallenges,
  ...selectChallenges,
  ...updateChallenges,
  ...deleteChallenges
]

interface SqlChallengeSearchProps extends InputProps {}

const SqlChallengeSearch: FC<SqlChallengeSearchProps> = ({
  placeholder = 'Search',
  type = 'text'
}) => {
  const [value, setValue] = useState('')
  const [, setActiveName] = useAtom(activeNameAtom)
  const [filteredChallenges, setFilteredChallenges] = useState<Challenge[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const onInteractOutside = (e: Event) => {
    const target = e.target as Node
    if (target && inputRef.current && inputRef.current.contains(target)) {
      return
    } else {
      setFilteredChallenges([])
    }
  }
  const getSearchChallenges = () => {
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
  }
  const handleFocus = () => {
    getSearchChallenges()
  }

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
  }, [value])
  return (
    <Popover open={true}>
      <PopoverTrigger asChild>
        <Input
          ref={inputRef}
          className="h-8 rounded-2xl focus-visible:border-none focus-visible:outline-none focus-visible:ring-1"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={e => setValue(e.target.value)}
          onFocus={handleFocus}
        />
      </PopoverTrigger>

      <PopoverContent
        className={` max-w-sm ${
          filteredChallenges.length === 0 ? 'hidden' : 'visible'
        }`}
        onInteractOutside={onInteractOutside}
      >
        <ScrollArea className="max-h-72 rounded-md">
          <div>
            {filteredChallenges.map((challenge, index) => (
              <div key={challenge.id}>
                {/* @ts-ignore */}
                <Link
                  to={`${
                    sqlChallengeTypePathMap[
                      challenge.sqlType as keyof typeof sqlChallengeTypePathMap
                    ]
                  }/$challengeId`}
                  params={{ challengeId: challenge.id }}
                  onClick={() => {
                    setActiveName(
                      sqlChallengeTypePathMap[
                        challenge.sqlType as keyof typeof sqlChallengeTypePathMap
                      ].slice(1)
                    )
                    setValue('')
                    setFilteredChallenges([])
                  }}
                >
                  <div className="flex items-center justify-between p-2 hover:bg-gray-100">
                    <span className="text-sm font-bold">{challenge.title}</span>
                  </div>
                </Link>
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
