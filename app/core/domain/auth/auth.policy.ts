// Pure domain rules about authentication/authorization.
import type { Role } from './auth.entity'

/** Default landing route for each role after sign-in. */
export const dashboardFor = (role: Role): string =>
  ({
    STUDENT: '/portal/student',
    TEACHER: '/portal/teacher',
    PARENT: '/portal/parent',
    ADMIN: '/admin',
  })[role]
