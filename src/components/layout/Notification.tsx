import style from './Notification.module.scss'
import { useState, useEffect } from 'react'
import { useNotification } from '../../context/NotificationsContext'
import { Alert, Stack, AlertTitle } from '@mui/material'

const Notification = () => {
	const { notification } = useNotification()
	const [open, setOpen] = useState(!!notification.message)

	useEffect(() => {
		setOpen(!!notification.message)
	}, [notification.message])

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<Stack
			sx={{ display: open ? 'flex' : 'none' }}
			className={style['notification-container']}
			spacing={2}
		>
			{open && (
				<Alert
					variant='filled'
					severity={notification.error ? 'error' : 'success'}
					onClose={handleClose}
				>
					<AlertTitle>{notification.error ? 'Error' : 'Success'}</AlertTitle>
					{notification.message}
				</Alert>
			)}
		</Stack>
	)
}

export default Notification
