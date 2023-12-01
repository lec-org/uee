//* 导入 内部组件
import Navs from './Navs'
import Avatar from './Avatar'

//* 导入CSS文件
import styles from './index.module.scss'

// * 导入功能
// import Home from '../../../pages/Home'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

export default function Header() {
	const isLogin = useRef(true)

	return (
		<>
			<div className={styles['header']}>
				<Link to='/'>
					<div className={styles['iconTag']}>这是图标</div>
				</Link>
				<Navs className={styles['nav']}></Navs>
				{!isLogin.current ? (
					<div className='account'>
						<Link to='/login'>
							<button>登录</button>
						</Link>
						<Link to='/register'>
							<button>注册</button>
						</Link>
					</div>
				) : (
					<Avatar className={styles['avatar']}></Avatar>
				)}
			</div>
		</>
	)
}
