import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

const Skeletons = () => {
	return (
		<Stack spacing={1} sx={{ padding: '0px 1rem' }}>
			<Skeleton
				variant='text'
				sx={{ fontSize: '3.9rem', backgroundColor: '#383838' }}
			/>
			<Skeleton
				variant='rectangular'
				height={36}
				sx={{ backgroundColor: '#383838' }}
			/>
			<Skeleton
				variant='rectangular'
				height={36}
				sx={{ backgroundColor: '#383838' }}
			/>
			<Skeleton
				variant='rectangular'
				height={36}
				sx={{ backgroundColor: '#383838' }}
			/>
			<Skeleton
				variant='rectangular'
				height={36}
				sx={{ backgroundColor: '#383838' }}
			/>
			<Skeleton
				variant='rectangular'
				height={36}
				sx={{ backgroundColor: '#383838' }}
			/>
		</Stack>
	)
}

export default Skeletons
