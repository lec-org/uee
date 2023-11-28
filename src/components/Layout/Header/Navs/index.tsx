import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'

export default function Navs(props: { className: string }) {
	return (
		<div className={props.className}>
			<nav className={styles['navs']}>
				<NavLink
					to='all'
					className={({ isActive }) =>
						isActive ? styles['navActive'] : void 0
					}
				>
					题库
				</NavLink>
			</nav>
		</div>
	)
}
