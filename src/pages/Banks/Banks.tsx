import style from './Banks.module.scss'
import BanksTable from './components/BanksTable'

const BanksList = () => {
	return (
		<div className={style['banklist-main-container']}>
			<h1>Instituciones Bancarias</h1>
			<BanksTable />
		</div>
	)
}

export default BanksList
