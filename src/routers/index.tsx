import Sider from '../components/Home/Sider'
import Home from '../pages/Home'
import Layout from '../pages/Layout'
import ProblemsetAll from '../pages/ProblemSet/All'

const routers = [
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '',
				element: <Home />,
			},
			{
				path: '/all',
				element: <ProblemsetAll />,
			},
		],
	},
	{
		path: '/login',
		element: <div>Login</div>,
	},
	{
		path: '*',
		element: <div>404......</div>,
	},
]

export default routers
