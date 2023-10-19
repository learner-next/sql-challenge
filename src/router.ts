import App from '@/App'
import SqlChallenge from '@/pages/SqlChallenge'
import Levels from '@/pages/Levels'
import { Router, Route, RootRoute } from '@tanstack/react-router'

// Create a root route
const rootRoute = new RootRoute({
  component: App
})

// create sqlChallenge route
const sqlChallengeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/sqlChallenge/$id',
  component: SqlChallenge
})

// create levels route
const levelsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/levels',
  component: Levels
})

const routeTree = rootRoute.addChildren([sqlChallengeRoute, levelsRoute])

// Create the router using your route tree
export const router = new Router({ routeTree, defaultPreload: 'intent' })

declare module '@tanstack/react-router' {
  interface Register {
    // This infers the type of our router and registers it across your entire project
    router: typeof router
  }
}
