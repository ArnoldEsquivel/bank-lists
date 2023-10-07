import { render, screen } from '@testing-library/react'
import BankTable from '../pages/Banks/components/BanksTable'
import { BankProvider } from '../context/BanksContext'

describe('BankTable', () => {
	it('should render skeleton components when loading', async () => {
		render(
			<BankProvider>
				<BankTable />
			</BankProvider>
		)

		const skeletonElements = screen.getAllByTestId('skeleton-element')
		expect(skeletonElements).toHaveLength(6)
	})
})
