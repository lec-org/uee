import { useParams } from 'react-router-dom'

import Header from '../../../components/SingleProblem/Header'
import TabSet from '../../../components/SingleProblem/content/TabSet'
import Editor from '../../../components/SingleProblem/content/Editor'
import SubmitInfo from '../../../components/SingleProblem/content/SubmitInfo'

export default function SingleProblem() {
	const { id } = useParams()
	return (
		<>
			<Header />
			<TabSet />
			<Editor />
			<SubmitInfo />
			<div>这是单个题,id为{id}</div>
		</>
	)
}
