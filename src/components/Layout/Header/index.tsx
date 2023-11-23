//* 导入 内部组件
import Navs from './Navs'
import Avatar from './Avatar'

//* 导入CSS文件
import styles from './index.module.scss'

// * 导入功能
import { useNavigate } from 'react-router-dom'

export default function Header() {
	// * 创建路由钩子
	const navTo = useNavigate()
	return (
		<>
			<div className={styles['header']}>
				<div
					className={styles['iconTag']}
					onClick={() => navTo('/')}
				>
					这是图标
				</div>
				<Navs className={styles['nav']}></Navs>
				<Avatar className={styles['avatar']}></Avatar>
			</div>
		</>
	)
}
