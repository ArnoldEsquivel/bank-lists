import style from './Sidebar.module.scss'
import { useState } from 'react'
import Notification from '../Notification'
import { Tooltip, Button } from '@mui/material'
import ObtenMas from '../../../assets/obten-mas.svg'
import ObtenMasIcon from '../../../assets/favicon.ico'
import { Link } from 'react-router-dom'
import Logout from './Components/Logout'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { SidebarProps } from '../../../types/SidebarType'

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
	const [active, setActive] = useState<boolean>(false)
	const [open, setOpen] = useState<boolean>(false)

	const handleDrawer = () => {
		setOpen(!open)
	}

	const handleActive = () => {
		setActive(!active)
	}

	return (
		<div className={style['sidebar-main-container']}>
			<div className={`${style['sidebar-body']} ${open && style['sidebar-body-open']}`}>
				<Button className={style['sidebar-header']} onClick={handleDrawer}>
					{
						open
							? <img
								src={ObtenMas}
								alt='Obten Mas logo'
								className={style['sidebar-logo']}
							/>
							: <img
								src={ObtenMasIcon}
								alt='Obten Mas logo'
								className={style['sidebar-logo-close']}
							/>
					}
				</Button>

				<div className={style['sidebar-divider']}></div>

				<div className={style['sidebar-list-items']}>
					<Tooltip title={open ? '' : 'Dashboard'} placement='right'>
						<Link
							className={`
                                        ${style['sidebar-item']}
										${active && style['sidebar-item-active']}
                                        ${!open && style['sidebar-item-close']}
                                    `}
							to='/dashboard'
							onClick={() => handleActive()}
						>
							{open && <span>Dashboard</span>}
							<AccountBalanceIcon />
						</Link>
					</Tooltip>
				</div>

				<div className={style['sidebar-session-buttons-container']}>
					<Logout open={open} />
				</div>
			</div>

			<main>
				<Notification />
				{children}
			</main>
		</div>
	)
}

export default Sidebar
