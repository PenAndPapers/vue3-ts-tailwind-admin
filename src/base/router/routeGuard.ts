import type { RouteLocation, RouteRecordRaw } from 'vue-router'
import { isAuthenticated } from '@/middleware/auth'
import router from './index'
import staticRoutes from './routes/static'
import dynamicRoutes from './routes/dynamic'

const NextLocation = new Function()

const addRoutes = (routes: RouteRecordRaw[]) => {
  routes.forEach(async (route) => {
    await new Promise((resolve) => {
      router.addRoute(route)
      resolve(true)
    })
  })
}

const removeRoutes = (routes: RouteRecordRaw[], requiresAuth: boolean) => {
  routes.forEach(async (route) => {
    if (
      route.meta &&
      route.meta.requiresAuth === requiresAuth &&
      !['PageError', 'PageNotFound'].includes(route.name as string)
    ) {
      await new Promise((resolve) => {
        router.removeRoute(route.name as string)
        resolve(true)
      })
    }
  })
}

export default async (
  to: RouteLocation,
  from: RouteLocation,
  next: typeof NextLocation
) => {
  /**
   * check if user is authenticated
   */
  if (isAuthenticated()) {
    /**
     * if dynamic routes are not yet added to current route
     * then we need to add it first to prevent 404 page to show
     * when page is refreshed
     */
    if (!router.hasRoute('Dashboard')) {
      await removeRoutes(staticRoutes, false)
      await addRoutes(dynamicRoutes)

      /**
       * redirect to the dashboard if try to access static routes
       * or if user is from the ff. pages
       * added return for ealy bail out
       */
      if (['/', '/login', '/register'].includes(to.path))
        return next('/dashboard')

      /**
       * redirect to the last accessed page after page is refreshed
       * added return for ealy bail out
       */
      const origin = window.location.origin
      const path = window.location.toString().replace(origin, '')
      if (from.name === undefined) return next(path)
    }

    next()
  } else {
    if (!router.hasRoute('Home')) {
      addRoutes(staticRoutes)
      removeRoutes(dynamicRoutes, true)

      if (router.hasRoute('Home')) return next(to.redirectedFrom?.fullPath)
    }

    next()
  }
}
