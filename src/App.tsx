import { useEffect } from 'react'
import Logo from '/vite.svg'
import { Outlet, Link, useNavigate, useParams } from '@tanstack/react-router'

function App() {
  const navigate = useNavigate()
  const params = useParams({
    from: '/sqlChallenge/$challengeId'
  })
  useEffect(() => {
    navigate({
      to: '/sqlChallenge/$challengeId',
      params: { challengeId: params.challengeId ?? 'challenge1' }
    })
  }, [navigate, params])
  return (
    <div className="flex h-screen flex-col justify-between">
      <div className="flex w-screen items-center justify-start gap-4 border border-b-gray-300 p-4">
        <img src={Logo} width={28} height={28} />
        <Link
          to="/sqlChallenge/$challengeId"
          params={{ challengeId: 'challenge1' }}
        >
          <span className="text-lime-500">Sql Challenge</span>
        </Link>
        <Link to="/challenges">
          <span className="text-lime-500">Challenges</span>
        </Link>
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
