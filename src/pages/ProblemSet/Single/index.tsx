import { useParams } from 'react-router-dom'

import Header from '../../../components/SingleProblem/Header'
import TabSet from '../../../components/SingleProblem/content/TabSet'
import Editor from '../../../components/SingleProblem/content/Editor'
import SubmitInfo from '../../../components/SingleProblem/content/SubmitInfo'

import styles from './index.module.scss'

export default function SingleProblem() {
	const { id } = useParams()
	return (
		<>
			<Header />
			<div className={styles['content']}>
				<TabSet />
				<div className={styles['editor']}>
					<Editor />
					<SubmitInfo />
				</div>
			</div>
		</>
	)
}
