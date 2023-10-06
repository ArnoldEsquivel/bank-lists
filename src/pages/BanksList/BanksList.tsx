import style from './BanksList.module.scss'
import { useBank } from '../../context/BanksContext'

const BanksList = () => {
	const { banks, loading } = useBank()

	return (
		<div className={style['banklist-main-container']}>
			{
				loading
					? <h1 style={{ color: 'blue' }}>Loading...</h1>
					: banks.map((bank) => (
						<div key={bank.bankName} style={{ color: 'red' }}>
							<h1>{bank.bankName}</h1>
							<p>{bank.description}</p>
							<p>{bank.age}</p>
							<p>{bank.url}</p>
						</div>
					))
			}
		</div>
	)
}

export default BanksList
