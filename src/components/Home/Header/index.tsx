//* 导入 内部组件
import Navs from './Navs'
import Avatar from './Avatar'

//* 导入CSS文件
import styles from './index.module.scss'

export default function Header() {
	return (
		<div className={styles['header']}>
			<div className={styles['iconTag']}>这是图标</div>
			<Navs className={styles['nav']}></Navs>
			<Avatar className={styles['avatar']}></Avatar>
		</div>
	)
}
