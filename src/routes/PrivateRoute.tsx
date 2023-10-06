import { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import Sidebar from '../components/layout/Sidebar/Sidebar'
import { NotificationsProvider } from '../context/NotificationsContext'

const PrivateRoute: FC = () => {
	const { isAuthenticated } = useAuthContext()

	if (!isAuthenticated) {
		return <Navigate to='/' />
	}

	return (
		<NotificationsProvider>
			<Sidebar>
				<Outlet />
			</Sidebar>
		</NotificationsProvider>
	)
}

export default PrivateRoute
