import App from '@/App'
import SqlChallenge from '@/pages/SqlChallenge'
import Challenges from '@/pages/Challenges'
import { Router, Route, RootRoute } from '@tanstack/react-router'

// Create a root route
const rootRoute = new RootRoute({
  component: App
})

// create sqlChallenge route
const sqlChallengeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/sqlChallenge/$challengeId',
  component: SqlChallenge
})

// create challenges route
const challengesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/challenges',
  component: Challenges
})

const routeTree = rootRoute.addChildren([sqlChallengeRoute, challengesRoute])

// Create the router using your route tree
export const router = new Router({ routeTree, defaultPreload: 'intent' })

declare module '@tanstack/react-router' {
  interface Register {
    // This infers the type of our router and registers it across your entire project
    router: typeof router
  }
}
