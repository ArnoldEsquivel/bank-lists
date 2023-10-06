import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { BankProvider } from './context/BanksContext'
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'
import Loader from './components/layout/Loader'

const Login = lazy(() => import('./pages/Login/Login'))
const BanksList = lazy(() => import('./pages/Banks/Banks'))

export const App = () => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<BankProvider>
					<Suspense fallback={<Loader />}>
						<Routes>
							<Route path='/' element={<PublicRoute />}>
								<Route index element={<Login />} />
							</Route>
							<Route path='/banks' element={<PrivateRoute />}>
								<Route index element={<BanksList />} />
							</Route>
						</Routes>
					</Suspense>
				</BankProvider>
			</AuthProvider>
		</BrowserRouter>
	)
}

export default App
