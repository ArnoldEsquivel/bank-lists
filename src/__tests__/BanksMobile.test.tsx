import { render, screen } from '@testing-library/react'
import BanksMobile from '../pages/Banks/components/BanksMobile'
import { BankProvider } from '../context/BanksContext'

describe('BanksMobile', () => {
	it('should render skeleton components when loading', async () => {
		render(
			<BankProvider>
				<BanksMobile />
			</BankProvider>
		)

		const skeletonElements = screen.getAllByTestId('skeleton-element')
		expect(skeletonElements).toHaveLength(6)
	})
})
