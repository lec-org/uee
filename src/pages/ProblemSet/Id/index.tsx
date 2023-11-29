import { useParams } from 'react-router-dom'

export default function IdProblem() {
	const { id } = useParams()
	return <div>这是单个题,id为{id}</div>
}
