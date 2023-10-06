import { useState } from 'react'
import style from './RowsMobile.module.scss'
import { BankData } from '../../../types/BankType'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	IconButton,
	Collapse,
	Box,
} from '@mui/material'

interface Props {
	bank: BankData
}

const RowsMobile: React.FC<Props> = ({ bank }) => {
	const [open, setOpen] = useState<boolean>(false)

	return (
		<>
			<TableRow className={style['table-row']}>
				<TableCell
					sx={{ padding: '9px 0', width: '1rem' }}
					className={style['table-cell']}
				>
					<IconButton
						aria-label='expand row'
						size='small'
						onClick={() => setOpen(!open)}
					>
						{open ? (
							<KeyboardArrowUpIcon sx={{ color: '#00ae42' }} />
						) : (
							<KeyboardArrowDownIcon sx={{ color: '#00ae42' }} />
						)}
					</IconButton>
				</TableCell>
				<TableCell className={style['table-cell']} sx={{ width: '1rem' }}>
					<img
						src={bank.url}
						alt={bank.bankName}
						style={{ width: '42px', height: '30px' }}
					/>
				</TableCell>
				<TableCell className={style['table-cell']}>{bank.bankName}</TableCell>
			</TableRow>
			<TableRow>
				<TableCell
					style={{ paddingBottom: 0, paddingTop: 0, borderBottom: 'none' }}
					colSpan={6}
				>
					<Collapse
						in={open}
						timeout='auto'
						unmountOnExit
						className={style['collapse-container']}
					>
						<Box sx={{ margin: 1 }}>
							<Table size='small' aria-label='purchases'>
								<TableHead>
									<TableRow>
										<TableCell className={style['table-header']}>
											Descripción
										</TableCell>
										<TableCell className={style['table-header']}>
											Antigüedad
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow>
										<TableCell className={style['table-cell']}>
											{bank.description}
										</TableCell>
										<TableCell className={style['table-cell']}>
											{bank.age + ' años'}
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</>
	)
}

export default RowsMobile
