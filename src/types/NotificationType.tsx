type NotificationContextType = {
	setNotification: (notification: { message: string; success: boolean }) => void
	notification: {
		message: string
		success: boolean
	}
}

export type { NotificationContextType }