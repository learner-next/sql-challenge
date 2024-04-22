import { RootRoute, Route, Router } from '@tanstack/react-router'
import App from '@/App'
import SelectChallenge from '@/pages/SelectChallenge'
import SqlChallenges from '@/pages/SqlChallenges'
import CreateChallenge from '@/pages/CreateChallenge'
import UpdateChallenge from '@/pages/UpdateChallenge'
import DeleteChallenge from '@/pages/DeleteChallenge'
import SqlPlayground from '@/pages/SqlPlayground'

// Create a root route
const rootRoute = new RootRoute({
  component: App,
})

// create sqlChallenge route
const sqlChallengeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/select-challenge/$challengeId',
  component: SelectChallenge,
})

// create challenges route
const challengesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/sql-challenges',
  component: SqlChallenges,
})

// create createChallenge route
const createChallengeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/create-challenge/$challengeId',
  component: CreateChallenge,
})

// create updateChallenge route
const updateChallengeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/update-challenge/$challengeId',
  component: UpdateChallenge,
})

// create deleteChallenge route
const deleteChallengeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/delete-challenge/$challengeId',
  component: DeleteChallenge,
})

// create sqlPlayground route
const sqlPlaygroundRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/sql-playground',
  component: SqlPlayground,
})

const routeTree = rootRoute.addChildren([
  sqlChallengeRoute,
  challengesRoute,
  createChallengeRoute,
  updateChallengeRoute,
  deleteChallengeRoute,
  sqlPlaygroundRoute,
])

// Create the router using your route tree
export const router = new Router({ routeTree, defaultPreload: 'intent' })

declare module '@tanstack/react-router' {
  interface Register {
    // This infers the type of our router and registers it across your entire project
    router: typeof router
  }
}
