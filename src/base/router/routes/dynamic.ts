import DashboardRoutes from '@/modules/Dashboard/router'
import UserRoutes from '@/modules/User/router'
import AccountRoutes from '@/modules/Account/router'
import ErrorRoutes from '@/modules/Error/router'

const routes = [
  ...DashboardRoutes,
  ...UserRoutes,
  ...AccountRoutes,
  ...ErrorRoutes,
]

export default routes
