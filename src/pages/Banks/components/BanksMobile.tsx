import style from './BanksMobile.module.scss'
import { useBank } from '../../../context/BanksContext'
import RowsMobile from './RowsMobile'
import Skeletons from './Skeletons'
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from '@mui/material'

const BanksMobile = () => {
	const { banks, loading } = useBank()

	return (
		<TableContainer
			component={Paper}
			className={style['table-mobile-main-container']}
		>
			{loading ? (
				<Skeletons />
			) : (
				<Table aria-label='collapsible table'>
					<TableHead>
						<TableRow>
							<TableCell className={style['table-header']} />
							<TableCell className={style['table-header']} />
							<TableCell className={style['table-header']}>
								Nombre
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{banks.map((bank, index) => (
							<RowsMobile key={index} bank={bank} />
						))}
					</TableBody>
				</Table>
			)}
		</TableContainer>
	)
}

export default BanksMobile
