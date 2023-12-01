import { NavLink } from 'react-router-dom'
import { Avatar as AvatarIcon } from '@mui/material'
export default function Avatar(props: { className: string }) {
	return (
		<>
			<div className={props.className}>
				<NavLink to='/user/yun-xia-e'>
					<AvatarIcon />
				</NavLink>
			</div>
		</>
	)
}
