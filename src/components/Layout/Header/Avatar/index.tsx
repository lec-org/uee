import { NavLink } from 'react-router-dom'

export default function Avatar(props: { className: string }) {
	return (
		<>
			<NavLink to='/user'>
				{' '}
				<div className={props.className}>这是头像</div>
			</NavLink>
		</>
	)
}
