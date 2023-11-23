import { useRoutes } from 'react-router-dom'
import routers from './routers'

export default function App() {
	const outlet = useRoutes(routers)
	return outlet
}
