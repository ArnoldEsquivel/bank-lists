import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconButton, Button, Tooltip } from '@mui/material'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import styles from './Logout.module.scss'
import { useAuthContext } from '../../../../context/AuthContext'

interface LogoutProps {
	open: boolean
}

const Logout: React.FC<LogoutProps> = ({ open }) => {
	const [modalOpen, setModalOpen] = useState(false)
	const modalRef = useRef<HTMLDivElement | null>(null)
	const { logout } = useAuthContext()

	useEffect(() => {
		const handleOutsideClick = (e: MouseEvent) => {
			if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
				closeModal()
			}
		}

		if (modalOpen) {
			document.addEventListener('mousedown', handleOutsideClick)
		} else {
			document.removeEventListener('mousedown', handleOutsideClick)
		}

		return () => {
			document.removeEventListener('mousedown', handleOutsideClick)
		}
	}, [modalOpen])

	const openModal = () => {
		setModalOpen(true)
	}

	const closeModal = () => {
		setModalOpen(false)
	}

	const handleConfirm = () => {
		logout()
		closeModal()
	}

	return (
		<div className={styles['modal-button-container']}>
			<Tooltip title={!open && 'Cerrar Sesion'} placement='right'>
				<Button
					className={`${styles['modal-button-open']} ${
						!open && styles['modal-button-open-close']
					}`}
					onClick={openModal}
				>
					<LogoutOutlinedIcon />
					{open && (
						<span className={styles['modal-button-text']}>Cerrar Sesión</span>
					)}
				</Button>
			</Tooltip>

			<AnimatePresence>
				{modalOpen && (
					<motion.div
						className={styles['modal-overlay']}
						exit={{ opacity: 0 }}
						// onClick={closeModal}
					>
						<motion.div
							className={styles['modal']}
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -50 }}
							ref={modalRef}
						>
							<div className={styles['modal-header']}>
								<IconButton
									onClick={closeModal}
									className={styles['modal-close-icon']}
								>
									<CloseOutlinedIcon />
								</IconButton>
							</div>

							<div className={styles['modal-content']}>
								<h1>Cerrar Sesión</h1>
								<span>¿Estás seguro que deseas cerrar sesión?</span>
							</div>

							<div className={styles['modal-buttons']}>
								<Button
									className={styles['modal-button']}
									variant='contained'
									color='error'
									onClick={closeModal}
								>
									Cancelar
								</Button>
								&nbsp;
								<Button
									className={styles['modal-button']}
									variant='contained'
									color='success'
									onClick={handleConfirm}
								>
									Cerar Sesión
								</Button>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default Logout
