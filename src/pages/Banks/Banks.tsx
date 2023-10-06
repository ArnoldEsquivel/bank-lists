import style from './Banks.module.scss'
import BanksTable from './components/BanksTable'
import BanksMobile from './components/BanksMobile'

const BanksList = () => {
	return (
		<div className={style['banklist-main-container']}>
			<h1>Instituciones Bancarias</h1>
			<BanksTable />
			<BanksMobile />
		</div>
	)
}

export default BanksList
