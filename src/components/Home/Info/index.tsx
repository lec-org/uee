import styles from './index.module.scss'

export default function Info() {
	return <div className={styles.Root}>
		<div className={styles.dailyFortuneBox}>
			<div className={styles.dailyFortune}>
				<div className={styles.dailyFortuneTitle}>欢迎回来，<a href='#' style={{color: 'blue'}}>xxx</a></div>
				<div className={styles.dailyFortuneData}>
					<div style={{fontSize: '2em', writingMode: 'vertical-lr'}}>十二月</div>
					<div style={{ fontSize: '5em' }}>01</div>
					<div style={{ fontSize: '2em', writingMode: 'vertical-lr' }}>星期五</div>
				</div>
				<div style={{fontSize:'1.5em'}}>距离月末还有xx天</div>
				<button className={styles.dailyFortuneButton}>点击打卡</button>
			</div>
		</div>
		<div>文章列表</div>
	</div>
}
