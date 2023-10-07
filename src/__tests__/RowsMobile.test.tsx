import { render, screen } from '@testing-library/react'
import RowsMobile from '../pages/Banks/components/RowsMobile'
import { BankData } from '../types/BankType'

const mockBank: BankData = {
	bankName: 'Mock Bank',
	url: 'https://mockbank.com',
	description: 'This is a mock bank',
	age: 10,
}

describe('RowsMobile', () => {
	it('should render bank name and logo', () => {
		render(<RowsMobile bank={mockBank} />)
		const bankName = screen.getByText(mockBank.bankName)
		const bankLogo = screen.getByAltText(mockBank.bankName)
		expect(bankName).toBeDefined() // Verifica que el elemento esté definido
		expect(bankLogo).toBeDefined() // Verifica que el elemento esté definido
	})
})
