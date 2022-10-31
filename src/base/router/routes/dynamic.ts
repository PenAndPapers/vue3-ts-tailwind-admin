import DashboardRoutes from '@/modules/Dashboard/router'
import ErrorRoutes from '@/modules/Error/router'

const routes = [...DashboardRoutes, ...ErrorRoutes]

export default routes
