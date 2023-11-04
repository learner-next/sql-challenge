import { useEffect, useState, useCallback } from 'react'
import SqlChallenge from '/sql-challenge.svg'
import { Outlet, Link, useNavigate, useRouter } from '@tanstack/react-router'
import { pathParamMap } from '@/utils'
import SqlChallengeSearch from '@/components/common/SqlChallengeSearch'

function App() {
  const navigate = useNavigate()
  const router = useRouter()
  const [activeName, setActiveName] = useState('')
  useEffect(() => {
    const pathName = router.history.location.pathname
    const [, path, paramChallengeId] = pathName.split('/')
    if (!path) {
      navigate({
        to: '/select-challenge/$challengeId',
        params: { challengeId: 'select-base' }
      })
      return
    } else if (!paramChallengeId) {
      // path map -> challengeId
      const challengeId = pathParamMap[path as keyof typeof pathParamMap]
      challengeId &&
        navigate({
          to: `${path}/$challengeId`,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          params: { challengeId }
        })
      return
    }
  }, [navigate, router])

  // need to watch immediate
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const pathName = router.history.location.pathname
    const [, path] = pathName.split('/')
    setActiveName(path)
  })
  const getActiveColor = useCallback(
    (linkPath: string) => {
      return activeName === linkPath ? 'text-green-500' : 'text-zinc-600'
    },
    [activeName]
  )
  return (
    <div className="flex h-screen flex-col justify-between">
      <div className="flex w-screen items-center justify-between border border-b-gray-300 p-4">
        <div className="flex items-center justify-start gap-4">
          <img src={SqlChallenge} width={36} height={36} />
          <Link
            to="/create-challenge/$challengeId"
            params={{ challengeId: 'create-table' }}
          >
            <span
              className={` hover:text-green-500 ${getActiveColor(
                'create-challenge'
              )}`}
            >
              Create
            </span>
          </Link>
          <Link
            to="/select-challenge/$challengeId"
            params={{ challengeId: 'select-base' }}
          >
            <span
              className={`hover:text-green-500 ${getActiveColor(
                'select-challenge'
              )}`}
            >
              Retrieve
            </span>
          </Link>
          <Link
            to="/update-challenge/$challengeId"
            params={{ challengeId: 'update-table' }}
          >
            <span
              className={`hover:text-green-500 ${getActiveColor(
                'update-challenge'
              )}`}
            >
              Update
            </span>
          </Link>
          <Link
            to="/delete-challenge/$challengeId"
            params={{ challengeId: 'delete-table' }}
          >
            <span
              className={`hover:text-green-500 ${getActiveColor(
                'delete-challenge'
              )}`}
            >
              Delete
            </span>
          </Link>
          <Link to="/sql-challenges">
            <span
              className={`hover:text-green-500 ${getActiveColor(
                'sql-challenges'
              )}`}
            >
              Challenges
            </span>
          </Link>
          <Link to="/sql-playground">
            <span
              className={`hover:text-green-500 ${getActiveColor(
                'sql-playground'
              )}`}
            >
              Playground
            </span>
          </Link>
        </div>
        <div className="flex justify-end gap-4">
          <SqlChallengeSearch />
          <a
            href="https://github.com/learner-next/sql-challenge"
            target="_blank"
            rel="noopener noreferrer"
            className="basis-28"
          >
            <span className="text-zinc-600 hover:text-green-500">
              Github ⭐️
            </span>
          </a>
        </div>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
      <div className="flex w-screen items-center justify-center py-4 text-slate-500">
        Copyright © 2023 Talljack.
      </div>
    </div>
  )
}

export default App
