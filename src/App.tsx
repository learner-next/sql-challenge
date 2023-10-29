import { useEffect, useState } from 'react'
import SqlChallenge from '/sql-challenge.svg'
import { Outlet, Link, useNavigate, useRouter } from '@tanstack/react-router'
import { pathParamMap } from '@/utils'

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
              className={`text-zinc-600 hover:text-green-500 ${
                activeName === 'create-challenge' ? 'text-green-500' : ''
              }`}
            >
              Create
            </span>
          </Link>
          <Link
            to="/select-challenge/$challengeId"
            params={{ challengeId: 'select-base' }}
          >
            <span
              className={`text-zinc-600 hover:text-green-500 ${
                activeName === 'select-challenge' ? 'text-green-500' : ''
              }`}
            >
              Select
            </span>
          </Link>
          <Link
            to="/update-challenge/$challengeId"
            params={{ challengeId: 'challenge1' }}
          >
            <span
              className={`text-zinc-600 hover:text-green-500 ${
                activeName === 'update-challenge' ? 'text-green-500' : ''
              }`}
            >
              Update
            </span>
          </Link>
          <Link
            to="/delete-challenge/$challengeId"
            params={{ challengeId: 'challenge1' }}
          >
            <span
              className={`text-zinc-600 hover:text-green-500 ${
                activeName === 'delete-challenge' ? 'text-green-500' : ''
              }`}
            >
              Delete
            </span>
          </Link>
          <Link to="/challenges">
            <span
              className={`text-zinc-600 hover:text-green-500 ${
                activeName === 'challenges' ? 'text-green-500' : ''
              }`}
            >
              Challenges
            </span>
          </Link>
        </div>
        <a
          href="https://github.com/learner-next/sql-challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-zinc-600 hover:text-green-500">Github ⭐️</span>
        </a>
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
