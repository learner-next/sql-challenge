import App from '@/App'
import Home from '@/pages/Home'
import Levels from '@/pages/Levels'
import { Router, Route, RootRoute } from '@tanstack/react-router'

// Create a root route
const rootRoute = new RootRoute({
  component: App
})

// create home route
const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/home/$id',
  component: Home
})

// create levels route
const levelsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/levels',
  component: Levels
})

const routeTree = rootRoute.addChildren([homeRoute, levelsRoute])

// Create the router using your route tree
export const router = new Router({ routeTree, defaultPreload: 'intent' })

declare module '@tanstack/react-router' {
  interface Register {
    // This infers the type of our router and registers it across your entire project
    router: typeof router
  }
}
