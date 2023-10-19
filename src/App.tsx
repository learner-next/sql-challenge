import Logo from '/vite.svg'
import { Outlet, Link } from '@tanstack/react-router'

function App() {
  return (
    <>
      <div className="flex h-screen items-center justify-start">
        <img src={Logo} width={28} height={28} />
        <Link to="/home/$id" params={{ id: '1' }}>
          Home
        </Link>
        <Link to="/levels">Levels</Link>
      </div>
      <Outlet />
      <div className="flex h-screen items-center justify-center"></div>
    </>
  )
}

export default App
