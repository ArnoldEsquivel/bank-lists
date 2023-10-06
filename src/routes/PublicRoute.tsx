import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import { FC } from 'react'

const PublicRoute: FC = () => {
	const { isAuthenticated } = useAuthContext()

	if (isAuthenticated) {
		return <Navigate to='/banks' />
	}

	return <Outlet />
}

export default PublicRoute
