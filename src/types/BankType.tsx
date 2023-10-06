interface BankData {
	bankName: string
	description: string
	age: number
	url: string
}

interface BankProviderProps {
	children: React.ReactNode
}

interface BankContextType {
	banks: BankData[]
	loading: boolean
}

interface TableProps {
	banks: BankData[]
}

export type { BankData, BankProviderProps, BankContextType, TableProps }
