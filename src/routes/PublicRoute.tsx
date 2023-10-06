import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import { FC } from 'react'

const PublicRoute: FC = () => {
	const { isAuthenticated } = useAuthContext()

	if (isAuthenticated) {
		return <Navigate to='/dashboard' />
	}

	return <Outlet />
}

export default PublicRoute
