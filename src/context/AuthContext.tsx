/* eslint react-refresh/only-export-components: off */
import { createContext, useState, useContext } from 'react'
import Cookies from 'js-cookie'
import { AuthContextType, AuthProviderProps, SessionData } from '../types/AuthType'

const AuthContext = createContext<AuthContextType | undefined>(
	undefined as AuthContextType | undefined
)

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
		Boolean(Cookies.get('bank-session') || false)
	)

	const login = async (session: SessionData) => {
		// Verify session with backend
		const newSession = {
			name: 'John Doe',
			email: session.email
		}

		Cookies.set("bank-session", JSON.stringify(newSession));
		setIsAuthenticated(true);
	};

	const logout = () => {
		Cookies.remove('bank-session')
		setIsAuthenticated(false)
	}

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}

const useAuthContext = (): AuthContextType => {
	const context = useContext(AuthContext)
	if (context === undefined) {
		throw new Error('useAuthContext debe usarse dentro de un AuthProvider')
	}
	return context
}

export { AuthProvider, useAuthContext }