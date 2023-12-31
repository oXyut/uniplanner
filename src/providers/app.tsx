import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router } from 'react-router-dom'
type AppProviderProps = {
    children: React.ReactNode
}
export const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <HelmetProvider>
            <Router basename={import.meta.env.BASE_URL}>{children}</Router>
        </HelmetProvider>
    )
}