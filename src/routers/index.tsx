import Home from '../pages/Home'
import Layout from '../pages/Layout'
import Login from '../pages/Login'
import ProblemsetAll from '../pages/ProblemSet/All'
import IdProblem from '../pages/ProblemSet/Id'
import Register from '../pages/Register'
import User from '../pages/User'

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
		path: '/problem/:id',
		element: <IdProblem />,
	},
	{
		path: '/user/:username',
		element: <User />,
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
