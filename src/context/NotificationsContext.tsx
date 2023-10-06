/* eslint react-refresh/only-export-components: off */
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { NotificationContextType } from '../types/NotificationType'

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

const NotificationsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [notification, setNotification] = useState({
		message: '',
		success: true,
	})

	useEffect(() => {
		if (notification.message) {
			const timer = setTimeout(() => {
				clearNotification()
			}, 3600)

			return () => clearTimeout(timer)
		}
	}, [notification.message])

	const clearNotification = () => {
		setNotification({
			message: '',
			success: true,
		})
	}

	return (
		<NotificationContext.Provider value={{ setNotification, notification }}>
			{children}
		</NotificationContext.Provider>
	)
}

const useNotification = (): NotificationContextType => {
	const context = useContext(NotificationContext)
	if (context === undefined) {
		throw new Error('useNotification debe usarse dentro de un NotificationsProvider')
	}
	return context
}

export { NotificationsProvider, useNotification }
