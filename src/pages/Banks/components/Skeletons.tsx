import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

const Skeletons = () => {
	return (
		<Stack spacing={1} sx={{ padding: '0px 1rem' }}>
			<Skeleton
				variant='text'
				sx={{ fontSize: '3.9rem', backgroundColor: '#383838' }}
				data-testid='skeleton-element'
			/>
			<Skeleton
				variant='rectangular'
				height={36}
				sx={{ backgroundColor: '#383838' }}
				data-testid='skeleton-element'
			/>
			<Skeleton
				variant='rectangular'
				height={36}
				sx={{ backgroundColor: '#383838' }}
				data-testid='skeleton-element'
			/>
			<Skeleton
				variant='rectangular'
				height={36}
				sx={{ backgroundColor: '#383838' }}
				data-testid='skeleton-element'
			/>
			<Skeleton
				variant='rectangular'
				height={36}
				sx={{ backgroundColor: '#383838' }}
				data-testid='skeleton-element'
			/>
			<Skeleton
				variant='rectangular'
				height={36}
				sx={{ backgroundColor: '#383838' }}
				data-testid='skeleton-element'
			/>
		</Stack>
	)
}

export default Skeletons
