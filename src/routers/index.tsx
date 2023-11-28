import Home from '../pages/Home'
import Layout from '../pages/Layout'
import Login from '../pages/Login'
import ProblemsetAll from '../pages/ProblemSet/All'
import Register from '../pages/Register'

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
		element: <Login />,
	},
	{
		path: '/register',
		element: <Register />,
	},
	{
		path: '*',
		element: <div>404......</div>,
	},
]

export default routers
