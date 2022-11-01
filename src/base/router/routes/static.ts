import LoginRoutes from '@/modules/Login/router'
import OneTimePinRoutes from '@/modules/OneTimePin/router'
import ForgotPasswordRoutes from '@/modules/ForgotPassword/router'
import RegisterRoutes from '@/modules/Register/router'
import ErrorRoutes from '@/modules/Error/router'

const routes = [
  ...LoginRoutes,
  ...OneTimePinRoutes,
  ...ForgotPasswordRoutes,
  ...RegisterRoutes,
  ...ErrorRoutes,
]

export default routes
