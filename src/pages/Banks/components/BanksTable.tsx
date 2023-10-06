import style from './BanksTable.module.scss'
import { useBank } from '../../../context/BanksContext'
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

const BankTable: React.FC = () => {
	const { banks, loading } = useBank()

	return (
		<TableContainer component={Paper} className={style['table-main-container']}>
			{loading ? (
				<Skeletons />
			) : (
				<Table sx={{ minWidth: 660 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell className={style['table-heade']} />
							<TableCell className={style['table-heade']}>Nombre</TableCell>
							<TableCell className={style['table-heade']}>
								Descripción
							</TableCell>
							<TableCell align='center' className={style['table-heade']}>
								Antigüedad
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{banks.map((bank, index) => (
							<TableRow key={index} className={style['table-row']}>
								<TableCell className={style['table-cell']}>
									<img
										src={bank.url}
										alt={bank.bankName}
										style={{ width: '41px', height: '30px' }}
									/>
								</TableCell>
								<TableCell className={style['table-cell']}>
									{bank.bankName}
								</TableCell>
								<TableCell className={style['table-cell']}>
									{bank.description}
								</TableCell>
								<TableCell align='center' className={style['table-cell']}>
									{bank.age + ' años'}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			)}
		</TableContainer>
	)
}

export default BankTable
