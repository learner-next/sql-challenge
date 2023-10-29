import App from '@/App'
import SqlChallenge from '@/pages/SqlChallenge'
import Challenges from '@/pages/Challenges'
import CreateChallenge from '@/pages/CreateChallenge'
import UpdateChallenge from '@/pages/UpdateChallenge'
import DeleteChallenge from '@/pages/DeleteChallenge'
import { Router, Route, RootRoute } from '@tanstack/react-router'

// Create a root route
const rootRoute = new RootRoute({
  component: App
})

// create sqlChallenge route
const sqlChallengeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/select-challenge/$challengeId',
  component: SqlChallenge
})

// create challenges route
const challengesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/challenges',
  component: Challenges
})

// create createChallenge route
const createChallengeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/create-challenge/$challengeId',
  component: CreateChallenge
})

// create updateChallenge route
const updateChallengeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/update-challenge/$challengeId',
  component: UpdateChallenge
})

// create deleteChallenge route
const deleteChallengeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/delete-challenge/$challengeId',
  component: DeleteChallenge
})

const routeTree = rootRoute.addChildren([
  sqlChallengeRoute,
  challengesRoute,
  createChallengeRoute,
  updateChallengeRoute,
  deleteChallengeRoute
])

// Create the router using your route tree
export const router = new Router({ routeTree, defaultPreload: 'intent' })

declare module '@tanstack/react-router' {
  interface Register {
    // This infers the type of our router and registers it across your entire project
    router: typeof router
  }
}
