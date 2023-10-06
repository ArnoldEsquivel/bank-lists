type SessionData = {
    email: string;
    password: string;
};

type AuthContextType = {
    isAuthenticated: boolean
    login: (session: SessionData) => void;
    logout: () => void
}

interface AuthProviderProps {
    children: React.ReactNode
}

export type { AuthContextType, AuthProviderProps, SessionData }