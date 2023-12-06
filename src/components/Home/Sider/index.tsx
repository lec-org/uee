import { useRef, useState } from 'react';
import styles from './index.module.scss'

export default function Sider() {
	const pet = useRef(null);
	//const petBox = useRef('petBox');

	//const [petPos, setPetPos] = useState([0,0]);
	//const G = 10;

	setInterval(() => {
		console.log(pet.current);
	},1000);

	return (
	<div className={styles.Root}>
		<div className={styles.dailyProblemsBox}>
			<div className={styles.dailyProblems}>
				<div>日期表</div>
				<div>每日一题</div>
				<div className={styles.hr}></div>
				<div>欢迎来到ueeOJ</div>
				<div>登录注册</div>
			</div>
		</div>
		<div className={styles.petBox}>
			<div className={styles.pet} ref={pet}>陈信豪</div>
		</div>
	</div>
	)
}
