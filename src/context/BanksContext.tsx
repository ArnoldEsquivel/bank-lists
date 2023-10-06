/* eslint react-refresh/only-export-components: off */
import { createContext, useContext, useEffect, useState } from 'react'
import getBanksList from '../useCases/GetBanksList'
import { BankContextType, BankData, BankProviderProps } from '../types/BankType'

const BankContext = createContext<BankContextType | undefined>(
	undefined as BankContextType | undefined
)

const BankProvider: React.FC<BankProviderProps> = ({ children }) => {
	const [banks, setBanks] = useState<BankData[]>([])
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		setLoading(true)
		const storedData = localStorage.getItem('banks')
		if (storedData) {
			setBanks(JSON.parse(storedData))
			setLoading(false)
		} else {
			fetchData()
		}
	}, [])

	const fetchData = async () => {
		const bankList = await getBanksList()
		if (Array.isArray(bankList)) {
			setBanks(bankList)
			localStorage.setItem('banks', JSON.stringify(bankList))
			setLoading(false)
		}
	}

	return (
		<BankContext.Provider value={{ banks, loading }}>{children}</BankContext.Provider>
	)
}

const useBank = (): BankContextType => {
	const context = useContext(BankContext)
	if (context === undefined) {
		throw new Error('useBank debe usarse dentro de un BankProvider')
	}
	return context
}

export { BankProvider, useBank }
