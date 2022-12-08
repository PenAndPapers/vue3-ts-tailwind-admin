import DashboardRoutes from '@/modules/Dashboard/router'
import UserRoutes from '@/modules/User/router'
import ErrorRoutes from '@/modules/Error/router'

const routes = [...DashboardRoutes, ...UserRoutes, ...ErrorRoutes]

export default routes
