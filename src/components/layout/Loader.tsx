import style from './Loader.module.scss'

const Loader: React.FC = () => {
	return (
		<div className={style['loader-container']}>
			<div className={style['spinner']}>
			</div>
		</div>
	)
}

export default Loader
