import style from './BanksTable.module.scss'
import { TableProps } from '../../../types/BankType'

const BankTable: React.FC<TableProps> = ({ banks }) => {
	console.log(banks)

	return (
		<div className={style['banktable-main-container']}>
			<h1>test</h1>
		</div>
	)
}

export default BankTable
