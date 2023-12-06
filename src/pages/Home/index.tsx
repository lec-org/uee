import Info from '../../components/Home/Info'
import Sider from '../../components/Home/Sider'
import styles from './index.module.scss'

export default function Home() {
	return (
		<>
			<div className={styles.Root}>
				<div className={styles.Index}>
					<Info />
					<Sider />
				</div>
			</div>
		</>
	)
}
