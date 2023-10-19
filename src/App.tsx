import { useEffect } from 'react'
import Logo from '/vite.svg'
import { Outlet, Link, useNavigate } from '@tanstack/react-router'

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate({ to: '/sqlChallenge/$id', params: { id: 'challenge1' } })
  }, [])
  return (
    <div className="flex h-screen flex-col justify-between">
      <div className="flex w-screen items-center justify-start gap-4 border border-b-gray-300 p-4">
        <img src={Logo} width={28} height={28} />
        <Link to="/sqlChallenge/$id" params={{ id: 'challenge1' }}>
          <span className="text-lime-500">Sql Challenge</span>
        </Link>
        <Link to="/levels">
          <span className="text-lime-500">Levels</span>
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
