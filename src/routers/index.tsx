import Home from '../pages/Home'
import Layout from '../pages/Layout'
import Login from '../pages/Login'
import ProblemsetAll from '../pages/ProblemSet/All'
import SingleProblem from '../pages/ProblemSet/Single'
import Register from '../pages/Register'
import User from '..'

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
			{
				path: '/user/:username',
				element: <User />,
			},
		],
	},
	{
		path: '/problem/:id',
		element: <SingleProblem />,
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
